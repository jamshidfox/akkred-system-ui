import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AddPhoto from '../../../icons/Map'
import { InputError, InputLabel } from '../../UI'
import useFileUploads from './useFileUploads'

const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -999;
`

const Label = styled('label')`
  display: inline-block;
`

const ImageField = styled('div')`
  align-items: center;
  border: 1px solid #ced0dd;
  border-radius: ${props => props.theme.input.borderRadius};
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 160px;
  transition: 200ms;
  overflow: hidden;
  width: 160px;
  &:hover {
    border-color: ${props => props.theme.color.primary.default};
  }
`

const Image = styled('div')`
  background-image: ${({ url }) => (url ? `url(${url})` : 'none')};
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`

const Placeholder = styled('div')`
  color: ${props => props.theme.color.primary.default};
  font-weight: 500;
  text-align: center;
  & svg {
    color: #d3d5db;
    font-size: 38px;
    display: block;
    margin: 0 auto 7px;
  }
`

const ImageUploadField = props => {
  const {

    label,
    input: { name, value },
  } = props

  const [state, onChange] = useFileUploads({})

  const { loading, error, image } = state

  console.warn(state)

  const inputId = `imageInput-${name}`
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Input onChange={onChange} type="file" id={inputId} />
      <Label htmlFor={inputId}>
        <ImageField>
          {value ? (
            <Image />
          ) : (
            <Placeholder>
              <AddPhoto />
              <div>{loading ? 'Загрузка...' : 'Загрузить'}</div>
            </Placeholder>
          )}
        </ImageField>
      </Label>
      <InputError>{error}</InputError>
    </div>
  )
}

ImageUploadField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired
}

export default ImageUploadField
