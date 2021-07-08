import React from 'react'
import {
  Field,
  Form,
  InputField, UniversalStaticSelectField,
} from '../../../components/FormField'
import { Modal } from '../../../components/UI'
import { MediumButton } from '../../../components/UI/Buttons'
import { FieldWrapper } from '../../../components/StyledElems'
import { AUDIT_RESULT_ANSWER_LIST } from '../../../constants/backend'

const AuditResultConfirm = props => {
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
                  component={UniversalStaticSelectField}
                  list={AUDIT_RESULT_ANSWER_LIST}

                  name="statusResult"
                  label="Javob"
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

export default AuditResultConfirm
