import React from 'react'
import {
  Field,
  Form,
  UniversalSearchField
} from '../../../../../components/FormField'
import { MediumButton, Modal } from '../../../../../components/UI'
import { FieldWrapper } from '../../../../../components/StyledElems'
import * as API from '../../../../../constants/api'

const CommissionCreateModal = props => {
  const {
    onClose,
    open,
    initialValues,
    onUpdateService,
    onSubmit,
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
                  component={UniversalSearchField}
                  name={'commission'}
                  label={'Commission'}
                  api={API.EMPLOYEES_LIST}
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

export default CommissionCreateModal
