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
import FileUploadField from '../../../../../components/FormField/File/FileUploadField'
import { Col } from '../../../../../components/Grid'
import * as API from '../../../../../constants/api'
import { TYPE_EXPERTS, ADDRESS_TYPE } from '../../../../../constants/backend'

const ExpertsCreateModal = props => {
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
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Field
                  name="cases"
                  label="izoh"
                  component={InputField}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="date"
                  label="date"
                  component={DateField}
                />
              </FieldWrapper>

              <FieldWrapper >
                <Field
                  name="type"
                  label="Роль эксперта "
                  component={UniversalStaticSelectField}
                  list={TYPE_EXPERTS}
                />
              </FieldWrapper>

              <FieldWrapper >
                <Field
                  name="address"
                  label="Аддресс"
                  component={UniversalStaticSelectField}
                  list={ADDRESS_TYPE}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  component={UniversalSearchField}
                  // params={{ children_only: false }}
                  name={'expert'}
                  label={'Expert'}
                  api={API.EMPLOYEES_LIST}
                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  component={FileUploadField}
                  name={'file'}
                  label={'file '}
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

export default ExpertsCreateModal
