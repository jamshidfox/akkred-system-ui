import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import styled from 'styled-components'
import { Modal, MediumButton } from '../../../components/UI'
import { InputField } from '../../../components/FormField'

const FieldWrapper = styled.div`
  margin-bottom: 20px;
`
const FloorItem = styled.div`
  padding-bottom: 15px;
`

export const fields = [
  'name',
  'floors'
]
const BuildingsCreateModal = props => {
  const { open, onClose, onSubmit, updateItem } = props
  const initialValues = { ...updateItem }

  return (
    <Modal
      width="644px"
      title={'Изменить корпус'}
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
                  label="Название корпуса"
                  component={InputField}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="id"
                  type="hidden"
                  component={InputField}
                />
              </FieldWrapper>
              {initialValues.floors &&
                <FloorItem>
                  <b>Этажи</b>
                </FloorItem>
              }
              {initialValues.floors && initialValues.floors.map((floor, i) => (
                <FloorItem key={i}>
                  {floor.name}
                </FloorItem>
              ))}
              <MediumButton type={'submit'}>Изменить</MediumButton>
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
  updateItem: PropTypes.object,
  onSubmit: PropTypes.func
}

export default BuildingsCreateModal
