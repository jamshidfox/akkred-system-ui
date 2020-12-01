import React from 'react'
import {
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
import { ANSWER_LIST } from '../../../../../constants/backend'

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
        initialValues={initialValues}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Field
                  name="cases"
                  label="case"
                  component={InputField}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  component={UniversalSearchField}

                  name="assignment"
                  label="assignment"
                  api={API.DOC_LIST}
                />
              </FieldWrapper>

              {/*<FieldWrapper >*/}
              {/*  <Field*/}
              {/*    name="managementAnalysis"*/}
              {/*    label="Был ли проведен анализ со стороны руководства? "*/}
              {/*    component={UniversalStaticSelectField}*/}
              {/*    list={ANSWER_LIST}*/}
              {/*  />*/}
              {/*</FieldWrapper>*/}
              <FieldWrapper>
                <Field
                  component={UniversalSearchField}
                  // params={{ children_only: false }}
                  name={'expert'}
                  label={'Expert'}
                  api={API.EMPLOYEES_LIST}
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