import React from 'react'
import {
  Field,
  Form,
  InputField,
} from '../../../components/FormField'
import { Modal } from '../../../components/UI'
import { MediumButton } from '../../../components/UI/Buttons'
import { FieldWrapper } from '../../../components/StyledElems'
import FileUploadField from '../../../components/FormField/File/FileUploadField'

const ExpertsResultModal = props => {
  const {
    onClose,
    open,
    initialValues,
    onSubmit
  } = props

  return (
    <Modal onClose={onClose} open={open} width={'400px'}>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Field
                  component={FileUploadField}

                  name="file"
                  label="Vazifa"
                />
              </FieldWrapper>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </Modal>
  )
}

export default ExpertsResultModal
