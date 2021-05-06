import React from 'react'
import {
  Field,
  Form,
  InputField,
  UniversalSearchField, UniversalStaticSelectField,
} from '../../../components/FormField'
import { Modal } from '../../../components/UI'
import { MediumButton } from '../../../components/UI/Buttons'
import { FieldWrapper } from '../../../components/StyledElems'
import FileUploadField from '../../../components/FormField/File/FileUploadField'
import { Col } from '../../../components/Grid'
import * as API from '../../../constants/api'
import { ANSWER_LIST } from '../../../constants/backend'

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
                  name="comments"
                  label="Izoh"
                  component={InputField}
                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  component={FileUploadField}

                  name="file"
                  label="Vazifa"
                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  component={FileUploadField}

                  name="act"
                  label="Akt"
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
