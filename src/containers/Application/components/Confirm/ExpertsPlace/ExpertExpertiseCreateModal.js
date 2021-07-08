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
import FileUploadField from '../../../../../components/FormField/File/FileUploadField'

const ExpertExpertiseCreateModal = props => {
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
                  component={UniversalSearchField}
                  name={'expert'}
                  label={'Expert'}
                  api={API.EMPLOYEES_LIST}
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

              <FieldWrapper>
                <Field
                  component={FileUploadField}
                  name={'assignment'}
                  label={'hujjat '}
                />
              </FieldWrapper>



              <FieldWrapper>
                <Field
                  component={InputField}
                  name={'direction'}
                  label={'Menedjment tizimi hujjatlariga va akkreditatsiya sohasiga asosan jalb etiladigan baholash yoʼnalishi '}
                />
              </FieldWrapper>


              <FieldWrapper>
                <Field
                  component={InputField}
                  name={'standard'}
                  label={'Meʼyoriy huquqiy hujjat va standart talablari'}
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

export default ExpertExpertiseCreateModal
