import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled, { css } from 'styled-components'
import { SingleDatePicker } from 'react-dates'
import { getFieldError } from '../../../utils/form'
import { InputLabel, InputError } from '../../../components/UI'
import commonProps from './commonProps'
import DateContainer from './DateContainer'

export const DATE_FORMAT_ISO_8601 = 'YYYY-MM-DD'
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
  const value = input.value
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

const DateField = props => {
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
  const date = getFormattedDate(input)
  const error = getFieldError(meta)

  return (
    <FieldContainer error={error}>
      <InputLabel>{label}</InputLabel>
      <DateContainer height={height}>
        <SingleDatePicker
          {...defaultProps}
          id={input.name}
          date={date}
          focused={focusedInput}
          onDateChange={onChange}
          onFocusChange={onFocusChange}
          keepOpenOnDateSelect={false}
          appendToBody={false}
        />
      </DateContainer>
      <InputError>{error}</InputError>
    </FieldContainer>
  )
}

DateField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  onChange: PropTypes.func,
  dateFormat: PropTypes.string,
  onFocusChange: PropTypes.func,
  label: PropTypes.string,
  height: PropTypes.number,
  focusedInput: PropTypes.bool
}

DateField.defaultProps = {
  dateFormat: DATE_FORMAT_ISO_8601,
  height: 52
}

export default DateField
