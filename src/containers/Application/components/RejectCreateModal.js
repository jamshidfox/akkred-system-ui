import React from 'react'
import {
  Field,
  Form,
  InputField,
  TextArea,
} from '../../../components/FormField'
import { Modal } from '../../../components/UI'
import { MediumButton } from '../../../components/UI/Buttons'
import { FieldWrapper } from '../../../components/StyledElems'

const RejectCreateModal = props => {
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
                  name="comment"
                  label="Izoh"
                  component={InputField}
                />
              </FieldWrapper>
              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Yuvorish</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </Modal>
  )
}

export default RejectCreateModal
