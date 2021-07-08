import React from 'react'
import {
  DateField,
  Field,
  Form,
  InputField,
  UniversalSearchField, UniversalStaticSelectField,
} from '../../../../../components/FormField'
import { Modal } from '../../../../../components/UI'
import { MediumButton } from '../../../../../components/UI/Buttons'
import { FieldWrapper } from '../../../../../components/StyledElems'
import * as API from '../../../../../constants/api'
import { TYPE_EXPERTS, ADDRESS_TYPE } from '../../../../../constants/backend'

const ExpertsCreateModal = props => {
  const {
    onClose,
    open,
    initialValues,
    onUpdatePlace,
    onSubmit
  } = props

  return (
    <Modal onClose={onClose} open={open} width={'400px'}>
      <Form
        onSubmit={initialValues ? onUpdatePlace : onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Field
                  component={UniversalSearchField}
                  name={'expert'}
                  label={'Expert'}
                  api={API.EMPLOYEES_LIST}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="cases"
                  label="Standart bandi "
                  component={InputField}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="date"
                  label="dan"
                  component={DateField}
                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  name="toDate"
                  label="gacha"
                  component={DateField}
                />
              </FieldWrapper>

              <FieldWrapper >
                <Field
                  name="type"
                  label="Ekspertning roli"
                  component={UniversalStaticSelectField}
                  list={TYPE_EXPERTS}
                />
              </FieldWrapper>

              <FieldWrapper >
                <Field
                  name="address"
                  label="Manzili"
                  component={UniversalStaticSelectField}
                  list={ADDRESS_TYPE}
                />
              </FieldWrapper>


              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Tanlanash</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </Modal>
  )
}

export default ExpertsCreateModal
