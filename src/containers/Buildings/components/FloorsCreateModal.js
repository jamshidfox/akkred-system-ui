import React from 'react'
import PropTypes from 'prop-types'
import { prop } from 'ramda'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import styled from 'styled-components'
import { Modal, MediumButton } from '../../../components/UI'
import { InputField, CheckboxGroupField } from '../../../components/FormField'

const FieldWrapper = styled.div`
margin-bottom: 20px;
`
export const floorFields = [
  'name',
  'rooms',
  'id'
]
const BuildingsCreateModal = props => {
  const { open, onClose, onSubmit, initialValues, modalFloor, roomsList } = props
  const data = prop('results', roomsList)

  return (
    <Modal
      width="644px"
      open={open}
      onClose={onClose}>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        mutators={arrayMutators}
        render={({ handleSubmit, values, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Field
                  name="name"
                  label="Название этажа"
                  component={InputField}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name={'rooms'}
                  items={data}
                  width={'40%'}
                  component={CheckboxGroupField}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="id"
                  component={InputField}
                  defaultValue={modalFloor.id}
                  type="hidden"
                />
              </FieldWrapper>
              <MediumButton type={'submit'}>добавить</MediumButton>
            </form>
          )
        }}
      />

    </Modal>
  )
}

BuildingsCreateModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  initialValues: PropTypes.object,
  modalFloor: PropTypes.object,
  roomsList: PropTypes.object,
  onSubmit: PropTypes.func
}

export default BuildingsCreateModal
