import React from 'react'
import {
  Field,
  Form,
  UniversalStaticSelectField
} from '../../../../components/FormField'
import { Modal } from '../../../../components/UI'
import { MediumButton } from '../../../../components/UI/Buttons'
import { FieldWrapper } from '../../../../components/StyledElems'
import FileUploadField from '../../../../components/FormField/File/FileUploadField'

const typeList = [
  {
    id:'type_one',
    name:'type_one',
  },
  {
    id:'type_two',
    name:'type_two',
  },
  {
    id:'type_three',
    name:'type_three',
  },
  {
    id:'type_four',
    name:'type_four',
  }
]
const DocumentCreateModal = props => {
  const {
    onClose,
    open,
    initialValues,
    onUpdateDocument,
    onSubmit
  } = props

  return (
    <Modal onClose={onClose} open={open} width={'400px'}>
      <Form
        onSubmit={initialValues ? onUpdateDocument : onSubmit}
        initialValues={initialValues}
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
                  name="type"
                  label="type"
                  component={UniversalStaticSelectField}
                  list={typeList}
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
