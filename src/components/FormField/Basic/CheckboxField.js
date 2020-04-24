import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'react-fc'
import { getFieldError } from '../../../utils/form'
import { default as Checkbox } from '~/components/UI/Checkbox'

const CheckboxField = props => {
  const {
    label,
    meta,
    width,
    input: { value, checked, ...input }
  } = props
  return (
    <Checkbox
      error={getFieldError(meta)}
      width={width}
      onChange={() => null}
      label={label}
      checked={value}
      {...input}
    />
  )
}

CheckboxField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  width: PropTypes.string,
  placeholder: PropTypes.string
}

export default pure(CheckboxField)
