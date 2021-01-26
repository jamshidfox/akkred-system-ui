import React from 'react'
import { MediumButton } from '../../../../components/UI/Buttons'
import { Modal } from '../../../../components/UI'
import { Field, Form, InputField } from '../../../../components/FormField'
import { FieldWrapper } from '../../../../components/StyledElems'

const ExpertReject = ({ onClose, open, onSubmit, initialValues }) => {
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
                  label="comments"
                  component={InputField}
                />
              </FieldWrapper>
              <div style={{
                display: 'none'
              }}>

                <FieldWrapper>
                  <Field
                    name="expert"
                    label="expert"
                    component={InputField}
                  />
                </FieldWrapper>

              </div>

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

export default ExpertReject
