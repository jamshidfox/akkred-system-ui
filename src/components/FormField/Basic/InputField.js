import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'react-fc'
import { Input } from '../../UI'
import { getFieldError } from '../../../utils/form'

const InputField = ({ label, meta, input, ...rest }) => {
  return (
    <Input
      {...input}
      {...rest}
      label={label}
      error={getFieldError(meta)}
    />
  )
}

InputField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string
}

export default pure(InputField)
