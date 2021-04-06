import React from 'react'
import {
  Field,
  Form,
  InputField,
  UniversalSearchField,
} from '../../../../components/FormField'
import { Modal } from '../../../../components/UI'
import { MediumButton } from '../../../../components/UI/Buttons'
import { FieldWrapper } from '../../../../components/StyledElems'

const BrancCreateModal = props => {
  const {
    onClose,
    open,
    initialValues,
    onUpdateService,
    onSubmit
  } = props

  return (
    <Modal onClose={onClose} open={open} width={'400px'}>
      <Form
        onSubmit={initialValues ? onUpdateService : onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Field
                  name="address"
                  label="address"
                  component={InputField}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="phoneNumber"
                  label="phoneNumber"
                  component={InputField}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="name"
                  label="name"
                  component={InputField}
                />
              </FieldWrapper>
              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Сохранить</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </Modal>
  )
}

export default BrancCreateModal
