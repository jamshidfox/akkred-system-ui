import React from 'react'
import {
  Field,
  Form,
  InputField, UniversalStaticSelectField
} from '../../../../../components/FormField'
import { MediumButton, Modal } from '../../../../../components/UI'
import { FieldWrapper } from '../../../../../components/StyledElems'
import { typeContractCount } from '../../../../../constants/backend'

const TravelDataCreateModal = props => {
  const {
    onClose,
    open,
    onSubmit
  } = props

  const required = value => (value ? undefined : { file: ['This field is required.'], name: ['This field is required.'] })


  return (
    <Modal onClose={onClose} open={open} width={'400px'}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Field
                  name={'name'}
                  label={'Tovar (ish, xizmat)lar nomi'}
                  component={InputField}
                  validate={required}

                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  name="type"
                  label="O‘lchov birligi"
                  component={UniversalStaticSelectField}
                  list={typeContractCount}
                  validate={required}
                />

              </FieldWrapper>

              <FieldWrapper>
                <Field
                  name="count"
                  label="Miqdori"
                  component={InputField}
                  validate={required}
                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  name="price"
                  label="Narxi"
                  component={InputField}
                  validate={required}
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

export default TravelDataCreateModal
