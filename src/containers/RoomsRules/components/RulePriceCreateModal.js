import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'
import { Modal, MediumButton } from '../../../components/UI'
import { InputField, UniversalStaticSelectField } from '../../../components/FormField'
import { RULE_TYPES } from '../../../constants/backend'

const FieldWrapper = styled.div`
margin-bottom: 20px;
`
export const fields = [
  'ruleType',
  'fromTime',
  'toTime',
  'percent'
]
const RoomCreateModal = props => {
  const { open, onClose, onSubmit } = props
  return (
    <Modal
      width="400px"
      title="Новый тип"
      open={open}
      onClose={onClose} >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Field
                  name="ruleType"
                  label="Тип"
                  component={UniversalStaticSelectField}
                  list={RULE_TYPES}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="fromTime"
                  label="Время с"
                  component={InputField} />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="toTime"
                  label="Время до"
                  component={InputField} />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="percent"
                  label="Процент"
                  component={InputField} />
              </FieldWrapper>
              <MediumButton type={'submit'}>добавить</MediumButton>
            </form>
          )
        }}
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
