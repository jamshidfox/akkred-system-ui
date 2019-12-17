import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import { Modal, MediumButton } from '../../../components/UI'
import { InputField, UniversalSearchField } from '../../../components/FormField'
import * as ROUTES from '../../../constants/api'

export const fields = [
  'roomCategory',
  'amount'
]
const RoomCreateModal = props => {
  const { open, onClose, onSubmit } = props
  return (
    <Modal
      title="Новый тип номера"
      open={open}
      onClose={onClose} >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="roomCategory"
              label="тип номера"
              component={UniversalSearchField}
              api={ROUTES.ROOM_TYPE_LIST}
            />
            <Field
              name="child_type"
              label="Подкатегория"
              component={UniversalSearchField} />
            <Field
              name="amount"
              label="количество номеров"
              component={InputField} />
            <MediumButton>добавить</MediumButton>
          </form>
        )}
      />

    </Modal>
  )
}

RoomCreateModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func
}

export default RoomCreateModal
