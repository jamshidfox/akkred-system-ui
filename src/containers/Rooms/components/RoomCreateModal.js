import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'
import { Modal, MediumButton } from '../../../components/UI'
import { InputField, UniversalSearchField } from '../../../components/FormField'
import * as ROUTES from '../../../constants/api'

const FieldWrapper = styled.div`
margin-bottom: 20px;
`
export const fields = [
  'roomCategory',
  'amount'
]
const RoomCreateModal = props => {
  const { open, onClose, onSubmit } = props
  return (
    <Modal
      width="400px"
      title="Новый тип номера"
      open={open}
      onClose={onClose} >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => (
          <form onSubmit={handleSubmit}>
            <FieldWrapper>
              <Field
                name="roomCategory"
                label="тип номера"
                component={UniversalSearchField}
                api={ROUTES.ROOM_TYPE_LIST}
              />
            </FieldWrapper>
            <FieldWrapper>
              <Field
                name="child_type"
                label="Подкатегория"
                component={UniversalSearchField} />
            </FieldWrapper>
            <FieldWrapper>
              <Field
                name="amount"
                label="количество номеров"
                component={InputField} />
            </FieldWrapper>
            <MediumButton>добавить</MediumButton>
          </form>
        )}
      />

    </Modal>
  )
}

RoomCreateModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default RoomCreateModal
