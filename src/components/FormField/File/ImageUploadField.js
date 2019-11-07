import React from 'react'
import PropTypes from 'prop-types'
import { prop, path } from 'ramda'
import styled from 'styled-components'
import AddPhoto from '../../../icons/Map'
import { InputError, InputLabel } from '../../UI'
import { getFileUrl } from './utils'
import FileWrapper from './FileWrapper'

const Input = styled('input')`
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
  transition: ${props => props.theme.cube.transition};
  overflow: hidden;
  width: 160px;
  &:hover {
    border-color: ${props => props.theme.cube.primaryColor};
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
  color: ${props => props.theme.cube.primaryColor};
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
    store,
    label,
    onInputChange,
    input: { name, value },
    state: { loading, error }
  } = props

  const storeData = store.getState()
  const accessToken = path(['auth', 'signIn', 'data', 'accessToken'], storeData)

  const fileId = prop('id', value)
  const imageUrl = value ? getFileUrl(fileId, accessToken) : null

  const inputId = `imageInput-${name}`
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Input onChange={onInputChange} type="file" id={inputId} />
      <Label htmlFor={inputId}>
        <ImageField>
          {value ? (
            <Image url={imageUrl} />
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
  onInputChange: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired
}

export default FileWrapper(ImageUploadField)
