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
                  label={'Товар (иш, хизмат)лар номи'}
                  component={InputField}

                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  name="type"
                  label="Ўлчов бирлиги"
                  component={UniversalStaticSelectField}
                  list={typeContractCount}
                />

              </FieldWrapper>

              <FieldWrapper>
                <Field
                  name="count"
                  label="Миқ-дори"
                  component={InputField}
                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  name="price"
                  label="Нархи"
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

export default TravelDataCreateModal
