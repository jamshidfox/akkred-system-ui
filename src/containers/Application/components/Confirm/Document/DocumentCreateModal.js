import React from 'react'
import {
  Field,
  Form,
  InputField
} from '../../../../../components/FormField'
import { MediumButton, Modal } from '../../../../../components/UI'
import { FieldWrapper } from '../../../../../components/StyledElems'
import FileUploadField from '../../../../../components/FormField/File/FileUploadField'

const DocumentCreateModal = props => {
  const {
    onClose,
    open,
    onSubmit
  } = props

  return (
    <Modal onClose={onClose} open={open} width={'400px'}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Field
                  component={FileUploadField}
                  name={'file'}
                  label={'Hujjat'}
                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  name="name"
                  label="Hujjat nomi"
                  component={InputField}
                />
              </FieldWrapper>
              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">qo'shish</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </Modal>
  )
}

export default DocumentCreateModal
