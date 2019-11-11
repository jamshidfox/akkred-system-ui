import React from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'
import { ImageUploadField } from '../File'

const ImageFieldArray = props => {
  const { fields } = props
  return (
    <div>
      {fields.map((name, index) => {
        return (
          <Field
            name={`${name}.firstName`}
            component={ImageUploadField} />
        )
      })}
    </div>
  )
}

ImageFieldArray.propTypes = {
  fields: PropTypes.array
}
export default ImageFieldArray
