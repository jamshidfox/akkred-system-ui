import React from 'react'
import PropTypes from 'prop-types'
import { path } from 'ramda'
import styled from 'styled-components'
import { UploadCloud, Paperclip, Trash2 } from 'react-feather'
import FileWrapper from './FileWrapper'
import { InputError, InputLabel } from '~/components/UI'
import Loader from '~/components/Loader'

const Container = styled('div')`
  position:relative;
`

const FileInput = styled('input')`
  width: 1px;
  height: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: -1;
`

const InputContainer = styled('div')`
  align-items: center;
  background-color: #fbfbfc;
  border-radius: ${props => props.theme.input.borderRadius};
  display:flex;
  justify-content: space-between;
  height: 52px;
  padding: 0 20px;
`

const UploadButton = styled('div')`
  align-items: center;
  color: ${props => props.theme.cube.primaryColor};
  cursor:pointer;
  display:flex;
  font-weight: 500;
  position:absolute;
  top: 0;
  right: 0;
  & > svg {
    margin-right: 5px;
  }
`

const PlaceholderText = styled('div')`
  color: ${props => props.theme.input.placeholderColor};
  font-size: 15px;
`

const FileName = styled('div')`
  align-items: center;
  display:flex;
  font-size: 15px;
  & > svg {
    color: ${props => props.theme.cube.primaryColor};
    margin-right: 5px;
  }
`

const ActionIcons = styled('div')`

`

const DeleteIcon = styled(Trash2)`
  color: ${props => props.theme.input.labelColor};
  cursor:pointer;
  display:block;
`

const FileUploadField = props => {
  const {
    input,
    label,
    placeholder,
    state,
    onInputChange
  } = props

  const fieldName = path(['name'], input) + '_file'
  const fieldValue = path(['value'], input)

  const { loading, error } = state

  const fileName = path(['name'], fieldValue)
  const fileExt = path(['ext'], fieldValue)
  const fileFullName = fileName + fileExt

  const onRemoveFile = () => input.onChange(null)

  return (
    <Container>
      <InputLabel>{label}</InputLabel>

      <FileInput onChange={onInputChange} type={'file'} id={fieldName} />
      {!loading && (
        <label htmlFor={fieldName}>
          <UploadButton>
            <UploadCloud size={16} />
            Загрузить файл
          </UploadButton>
        </label>
      )}

      <InputContainer>
        {fieldValue
          ? (
            <FileName>
              <Paperclip size={18} />
              {fileFullName}
            </FileName>
          )
          : (
            <PlaceholderText>
              {placeholder}
            </PlaceholderText>
          )}

        <ActionIcons>
          {loading && <Loader size={24} />}
          {fieldValue && <DeleteIcon size={22} onClick={onRemoveFile} />}
        </ActionIcons>
      </InputContainer>

      <InputError>{error}</InputError>
    </Container>
  )
}

FileUploadField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  state: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired
}

FileUploadField.defaultProps = {
  placeholder: 'Загрузите файл'
}

export default FileWrapper(FileUploadField)