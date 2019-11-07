import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UploadCloud from '../../../icons/Map'
import { InputError, InputLabel } from '../../UI'
import FileWrapper from './FileWrapper'

const ActionBtn = styled.div`
  align-items: center;
  border: 1px solid;
  border-radius: 6px;
  color: ${props => props.theme.color.primary.default};
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  height: 38px;
  padding: 10px 20px;
  & svg {
    margin-right: 5px;
  }
`
const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const FileUploadButton = props => {
  const {
    onInputChange,
    state: { loading, error },
    label
  } = props

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Input onChange={onInputChange} type="file" id={'fileInput'} />
      <label htmlFor="fileInput">
        <ActionBtn>
          <UploadCloud />
          {loading ? 'Loading...' : 'Загрузить'}
        </ActionBtn>
      </label>
      <InputError>{error}</InputError>
    </div>
  )
}

FileUploadButton.propTypes = {
  label: PropTypes.string,
  state: PropTypes.object,
  onInputChange: PropTypes.func.isRequired
}

export default FileWrapper(FileUploadButton)
