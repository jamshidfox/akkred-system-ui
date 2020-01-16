import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled, { css } from 'styled-components'
import { SingleDatePicker } from 'react-dates'
import { split, head, pipe } from 'ramda'
import { getFieldError } from '../../../utils/form'
import { InputLabel, InputError } from '../../../components/UI'
import { DisplayFlex } from '../../../components/StyledElems'
import commonProps from './commonProps'
import DateContainer from './DateContainer'
import TimeField from './TimeField'

export const DATE_FORMAT_ISO_8601 = 'YYYY-MM-DDT'

const defaultProps = {
  ...commonProps,
  // input related props
  placeholder: 'Укажите дату',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDate: true,
  regular: false,
  verticalSpacing: undefined,
  keepFocusOnInput: false,

  horizontalMargin: 0,
  initialVisibleMonth: null,
  numberOfMonths: 1
}

const getFormattedDate = input => {
  const value = pipe(split('T'), head)(input.value)
  const regEx = /\d{4}-{1}\d{2}-{1}\d{2}/

  if (regEx.test(value)) {
    return moment(value)
  }

  return null
}

const FieldContainer = styled('div')`
  ${props => props.error && (
    css`
      & ${InputLabel} {
        color: ${props => props.theme.color.danger.default};
      }
    `
  )
}
`
const Display = styled(DisplayFlex)`
  > div:first-child {
    width: calc(100% - 100px);
  }
`
const DateTimeField = props => {
  const {
    input,
    meta,
    label,
    height,
    dateFormat
  } = props

  const [focusedInput, setFocusedInput] = useState(false)

  const onFocusChange = ({ focused }) => setFocusedInput(focused)
  const onChange = date => {
    const prettyDate = date ? moment(date).format(dateFormat) : null
    input.onChange(prettyDate)
  }
  const value = getFormattedDate(input)
  const error = getFieldError(meta)


  return (
    <FieldContainer error={error}>
      <InputLabel>{label}</InputLabel>
      <Display>
        <DateContainer height={height}>
          <SingleDatePicker
            {...defaultProps}
            id={input.name}
            date={value}
            focused={focusedInput}
            onDateChange={onChange}
            onFocusChange={onFocusChange}
            keepOpenOnDateSelect={false}
            appendToBody={false}
          />
        </DateContainer>
        <TimeField {...props} />
      </Display>
      <InputError>{error}</InputError>
    </FieldContainer>
  )
}

DateTimeField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  onChange: PropTypes.func,
  dateFormat: PropTypes.string,
  onFocusChange: PropTypes.func,
  label: PropTypes.string,
  height: PropTypes.number,
  focusedInput: PropTypes.bool
}

DateTimeField.defaultProps = {
  dateFormat: DATE_FORMAT_ISO_8601,
  height: 48
}

export default DateTimeField
