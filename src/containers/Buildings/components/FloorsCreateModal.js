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
export const floorCreateFields = [
  'name',
  'rooms'
]
const FloorsCreateModal = props => {
  const { open, onClose, onSubmit, roomsList } = props
  const data = prop('results', roomsList)
  const initialValues = {}

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
                  label="Номера"
                  width={'40%'}
                  labelPath={['id']}
                  component={CheckboxGroupField}
                />
              </FieldWrapper>
              <MediumButton type={'submit'}>Добавить</MediumButton>
            </form>
          )
        }}
      />

    </Modal>
  )
}

FloorsCreateModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  roomsList: PropTypes.object,
  onSubmit: PropTypes.func
}

export default FloorsCreateModal
