import React from 'react'
import { prop } from 'ramda'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { PageTitle, MediumButton, InputLabel } from '../../../components/UI'

import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalSearchField,
  UniversalStaticSelectField,
  DateField,
  NoopFields
} from '../../../components/FormField'
import { GENDER_LIST, CLIENT_LIST, AGE_LIST } from '../../../constants/backend'
import * as API from '../../../constants/api'
import { Box } from '../../../components/StyledElems'

export const fields = [
  'surname',
  'name',
  'fatherName',
  'fromCountry',
  'birthDate',
  'gender',
  'citizenship',
  'phoneNumber',
  'email',
  'clientType',
  'ageType'
]

const BoxUI = styled(Box)`
  padding: 25px;
`
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

const Row = styled(RowUI)`
  margin-bottom: 40px;
`
const ReservationCreate = props => {
  const { onSubmit, initialValues } = props

  return (
    <BoxUI>
      <PageTitle name="Профиль" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <NoopFields names={['docId', 'arrId']} />
              <Label>Основная информация</Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="surname"
                    label="фамилия"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field name="name" label="имя" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field
                    name="fatherName"
                    label="отчество"
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={6}>
                  <Field
                    name="citizenship"
                    label="страна рождения"
                    component={UniversalSearchField}
                    api={API.COUNTRY_LIST}
                  />
                </Col>

                <Col span={6}>
                  <Field
                    name="birthDate"
                    label="дата рождения"
                    component={DateField}
                  />
                </Col>

                <Col span={6}>
                  <Field
                    name="phoneNumber"
                    label="Телефон номер"
                    component={InputField}
                  />
                </Col>
                <Col span={6}>
                  <Field name="email" label="Почта" component={InputField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={6}>
                  <Field
                    name="fromCountry"
                    label="страна прибытие "
                    component={UniversalSearchField}
                    api={API.COUNTRY_LIST}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    name="gender"
                    label="пол"
                    component={UniversalStaticSelectField}
                    list={GENDER_LIST}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    name="clientType"
                    label="Тип Клиента"
                    component={UniversalStaticSelectField}
                    list={CLIENT_LIST}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    name="ageType"
                    label="Тип возраста"
                    component={UniversalStaticSelectField}
                    list={AGE_LIST}
                  />
                </Col>
              </Row>

              <Label>Информация о документа</Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="clientDocument.documentType"
                    label="Тип документа"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientDocument.series"
                    label="Серия паспорта"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientDocument.number"
                    label="Номер паспорта"
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="clientDocument.issuedBy"
                    label="Орган выдачи"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientDocument.issuedDate"
                    label="Дата выдачи"
                    component={DateField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientDocument.validUntil"
                    label="Действителен до"
                    component={DateField}
                  />
                </Col>
              </Row>
              <Label>Дополнительная информация </Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="clientArrival.checkInDate"
                    label="arrivedFrom"
                    component={DateField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientArrival.arrivalDate"
                    label="дата рождения"
                    component={DateField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientArrival.checkpoint"
                    label="checkpoint"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientArrival.arrivedFrom"
                    label="страна рождения"
                    component={UniversalSearchField}
                    api={API.COUNTRY_LIST}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="clientArrival.visitType"
                    label="Тип визита"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientArrival.visaType"
                    label="Тип визы"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientArrival.visaNumber"
                    label="Номер визы"
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="clientArrival.visaIssuedBy"
                    label="Кем выдан виза"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientArrival.visaDateFrom"
                    label="Срок визы с"
                    component={DateField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="clientArrival.visaDateTo"
                    label="Срок визы по"
                    component={DateField}
                  />
                </Col>
              </Row>
              <div style={{ textAlign: 'right' }}>
                <MediumButton>Сохранить</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>
  )
}

export default ReservationCreate