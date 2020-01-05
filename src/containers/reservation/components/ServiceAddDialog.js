import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  DateField,
  Field,
  Form,
  InputField,
  NoopFields,
  UniversalSearchField,
  UniversalStaticSelectField
} from '../../../components/FormField'
import { Col, Row as RowUI } from '../../../components/Grid'
import { FieldWrapper } from '../../../components/StyledElems'
import * as API from '../../../constants/api'
import { SERVICE_FREQ } from '../../../constants/backend'
import { MediumButton } from '../../../components/UI/Buttons'
import { Modal } from '../../../components/UI'

const Label = styled.div`
  margin-bottom: 16px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: ${props => props.theme.color.basic.default};
`

const ClientCreateDialog = props => {
  const {
    onClose,
    open,
    onSubmit
  } = props
  return (
    <Modal onClose={onClose} open={open} width={'400px'}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Field
                  name="serviceType"
                  label="услуга"
                  api={API.HOTEL_SERVICE_LIST}
                  component={UniversalSearchField}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="type"
                  label="темп начисления"
                  list={SERVICE_FREQ}
                  component={UniversalStaticSelectField} />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="servicedClientsCount"
                  label="кол-во гостей"
                  component={InputField}
                />
              </FieldWrapper>
              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Сохранить</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </Modal>
  )
}

ClientCreateDialog.propTypes = {
  values: PropTypes.object,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  onSubmit: PropTypes.func
}
export default ClientCreateDialog
