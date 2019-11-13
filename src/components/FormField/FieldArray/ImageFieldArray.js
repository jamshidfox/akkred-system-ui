import React, { useEffect } from 'react'
import { Field, useField } from 'react-final-form'
import PropTypes from 'prop-types'
import { prop, pipe, filter, join, map } from 'ramda'
import styled from 'styled-components'
import { ImageUploadField } from '../File'
import useCompareEffect from '../../../hooks/useCompareEffect'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Image = styled.div`
  margin-right: 10px;
`
const ImageFieldArray = props => {
  const { fields } = props
  const values = prop('value', fields)
  const ids = pipe(filter(prop('id')), map(prop('id')), join('-'))(values)
  useCompareEffect(() => {
    fields.push({})
  }, [ids])
  return (
    <Wrapper>
      {fields.map((name, index) => {
        return (
          <Image>
            <Field
              name={`${name}`}
              component={ImageUploadField} />
          </Image>
        )
      })}
    </Wrapper>
  )
}

ImageFieldArray.propTypes = {
  fields: PropTypes.array
}
export default ImageFieldArray
