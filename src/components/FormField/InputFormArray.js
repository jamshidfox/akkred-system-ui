import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { pure } from 'react-fc'
import { Input } from '../UI'
import { getFieldError } from '../../utils/form'

const InputFormArray = ({ label, id, meta, input, fields, ...rest }) => {
  const [floorValue, setFloorValue] = useState('')

  const inputChange = (e) => {
    setFloorValue(e.target.value)
    fields.value[id] = { name: e.target.value }
  }

  return (
    <Input
      {...input}
      {...rest}
      label={label}
      onChange={(e) => inputChange(e)}
      value={floorValue}
      error={getFieldError(meta)}
    />
  )
}

InputFormArray.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  fields: PropTypes.object,
  id: PropTypes.number,
  placeholder: PropTypes.string
}

export default pure(InputFormArray)
