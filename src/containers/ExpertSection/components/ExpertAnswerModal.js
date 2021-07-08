import React from 'react'
import {
  Field,
  Form,
  InputField,
  UniversalSearchField, UniversalStaticSelectField,
} from '../../../components/FormField'
import { Modal } from '../../../components/UI'
import { MediumButton } from '../../../components/UI/Buttons'
import { FieldWrapper } from '../../../components/StyledElems'
import FileUploadField from '../../../components/FormField/File/FileUploadField'
import { Col } from '../../../components/Grid'
import * as API from '../../../constants/api'
import { ANSWER_LIST, ANSWER_TYPE_LIST, EXPERT_ANSWER_TYPE_LIST } from '../../../constants/backend'

const ExpertAnswerModal = props => {
  const {
    onClose,
    open,
    initialValues,
    onSubmit
  } = props

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
                  label="Izoh"
                  component={InputField}
                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  component={UniversalStaticSelectField}
                  list={EXPERT_ANSWER_TYPE_LIST}

                  name="answer_type"
                  label="Javob"
                />
              </FieldWrapper>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </Modal>
  )
}

export default ExpertAnswerModal
