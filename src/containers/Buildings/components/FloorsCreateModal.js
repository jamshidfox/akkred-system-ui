import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'
import styled from 'styled-components'
import { Modal, MediumButton } from '../../../components/UI'
import { InputField } from '../../../components/FormField'
import { CheckboxFieldArray } from '../../../components/FormField/FieldArray'

const FieldWrapper = styled.div`
margin-bottom: 20px;
`
export const floorFields = [
  'name',
  'floors'
]
const BuildingsCreateModal = props => {
  const { open, onClose, onSubmit, initialValues, roomsList } = props

  console.log(initialValues)
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
                <FieldArray
                  name="rooms"
                  component={CheckboxFieldArray} />
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
  onSubmit: PropTypes.func
}

export default BuildingsCreateModal
