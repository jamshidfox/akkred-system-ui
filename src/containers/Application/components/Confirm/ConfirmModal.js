
import React from 'react'
import { MediumButton } from '../../../../components/UI/Buttons'
import { Modal } from '../../../../components/UI'
import { Field, Form, InputField } from '../../../../components/FormField'
import { FieldWrapper } from '../../../../components/StyledElems'

const ConfirmDialog = ({ onClose, open, onSubmit, stage }) => {
  const onSubmitSec = () => {

  }

  switch (stage) {
  // case 'stage_1':
  //   return (
  //     <Modal onClose={onClose} open={open} width={'400px'}>
  //       <div style={{ textAlign: 'right' }}>
  //         <MediumButton onClick={onSubmit}>Confirm stage_1</MediumButton>
  //       </div>
  //     </Modal>
  //   )
  case 'stage_1':
    return (
      <Modal onClose={onClose} open={open} width={'400px'}>
        <Form
          onSubmit={onSubmitSec}
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
                    name="fullName"
                    label="fullName"
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
  case 'stage_3':
    return (
      <Modal onClose={onClose} open={open} width={'400px'}>
        <div style={{ textAlign: 'right' }}>
          <MediumButton onClick={onSubmit}>Confirm stage_3</MediumButton>
        </div>
      </Modal>
    )

  default:
    return <div />
  }
}

export default ConfirmDialog
