import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import { Modal } from '../../../components/UI'
import { InputField, UniversalSearchField } from '../../../components/FormField'

const RoomCreateModal = props => {
  const { open, onClose } = props
  return (
    <Modal
      title="Новый тип номера"
      open={open}
      onClose={onClose} >
      <Form
        onSubmit={() => null}
        render={({ handleSubmit, ...formikProps }) => (
          <form onSubmit={handleSubmit}>
            <Field name="type" label="тип номера" component={UniversalSearchField} />
            <Field name="type" label="Подкатегория" component={UniversalSearchField} />
            <Field name="type" label="количество номеров" component={InputField} />
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
