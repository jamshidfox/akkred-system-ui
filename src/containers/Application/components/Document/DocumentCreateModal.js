import React from 'react'
import {
  Field,
  Form,
  UniversalStaticSelectField,
  InputField
} from '../../../../components/FormField'
import { Modal } from '../../../../components/UI'
import { MediumButton } from '../../../../components/UI/Buttons'
import { FieldWrapper } from '../../../../components/StyledElems'
import FileUploadField from '../../../../components/FormField/File/FileUploadField'

const typeList = [
  {
    id:'ACCREDITATION_SCOPE_DRAFT',
    name:' Проект области аккредитации ',
  },
  {
    id:'APPLICANT_DETAILS',
    name:'Сведения о заявителе/объекте аккредитации',
  },
  {
    id:'QUALITY_MANAGEMENT_SYSTEM_DOCUMENTATION',
    name:'Документация Системы Менеджмента Качества',
  },
  {
    id:'QUALITY_QUIDE',
    name:'Руководство по качеству',
  }
]
const DocumentCreateModal = props => {
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
                  component={FileUploadField}
                  name={'file'}
                  label={'File 1'}
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

export default DocumentCreateModal
