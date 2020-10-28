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
  position: relative;
  align-items: center;
  background: ${({ theme }) => theme.background.input};
  border: ${({ theme }) => theme.border.input};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  display: flex;
  justify-content: space-between;
  height: 52px;
  padding: 0 20px;
`
const UploadButton = styled('div')`
  align-items: center;
  color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
  display: flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  position: absolute;
  bottom: 0;
  height: 52px;
  right: 0;
  user-select: none;
  padding: 0 20px;
  & > svg {
    margin-right: 8px;
  }
  & > span{
    margin-top: 2px;
  }
`
const PlaceholderText = styled('div')`
  color: ${({ theme }) => theme.text.placeholder};
  font-size: 15px;
`
const FileName = styled('div')`
  align-items: center;
  display:flex;
  font-size: 15px;
  & > svg {
    width: 18px;
    min-width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.palette.primary};
    margin-right: 15px;
  }
`
const ActionIcons = styled('div')``
const DeleteIcon = styled(Trash2)`
  color: ${({ theme }) => theme.text.label};
  cursor:pointer;
  display:block;
`

// Component
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
              {loading ? 'Загружается . . .' : placeholder}
            </PlaceholderText>
          )}

        <ActionIcons>
          {loading && <Loader size={0.7} />}
          {fieldValue && <DeleteIcon size={22} onClick={onRemoveFile} />}
        </ActionIcons>

        {!loading && !fieldValue && (
          <label htmlFor={fieldName}>
            <UploadButton>
              <UploadCloud size={18} />
              <span>Выбрать</span>
            </UploadButton>
          </label>
        )}
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
