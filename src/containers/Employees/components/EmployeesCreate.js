import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'

import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalSearchField
} from '../../../components/FormField'
import * as API from '~/constants/api'

export const fields = [
  'username',
  'password',
  'fullName',
  'email',
  'phoneNumber',
  'lastName',
  'firstName',
  'role'
]

const BoxUI = styled(Box)`
  padding: 25px;
`
const Label = styled.div`
  margin-bottom: 16px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: ${props => props.theme.color.basic.default};
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`

const ReservationCreate = props => {
  const { onSubmit, initialValues } = props

  return (
    <BoxUI>
      <PageTitle name="Добавить сотрудника" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit, values, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Label>Основная информация</Label>
              <Row gutter={24}>

                <Col span={8}>
                  <Field name="username" label="Логин" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="role" label="Должность"
                    api={API.ROLE_LIST}
                    component={UniversalSearchField}
                  />
                </Col>
                <Col span={8}>
                  <Field name="password" label="Пароль" component={InputField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={4}>
                  <Field name="fullName" label="Ф.И.O" component={InputField} />
                </Col>
                <Col span={4}>
                  <Field name="email" label="mail" component={InputField} />
                </Col>
                <Col span={4}>
                  <Field name="phoneNumber" label="phoneNumber" component={InputField} />
                </Col>
                <Col span={4}>
                  <Field name="lastName" label="lastName" component={InputField} />
                </Col>
                <Col span={4}>
                  <Field name="firstName" label="firstName" component={InputField} />
                </Col>
                <Col span={4}>
                  <Field name="middleName" label="middleName" component={InputField} />
                </Col>
              </Row>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type={'submit'}>Сохранить</MediumButton>
              </div>

            </form>
          )
        }}
      />
    </BoxUI>
  )
}
ReservationCreate.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
}

export default ReservationCreate
