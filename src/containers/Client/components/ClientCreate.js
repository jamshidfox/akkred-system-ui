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
  DateField
} from '../../../components/FormField'
import { GENDER_LIST } from '../../../constants/backend'
import * as API from '../../../constants/api'

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

  'documentType',
  'series',
  'number',
  'issuedBy',
  'issuedDate',
  'validUntil',

  'checkInDate',
  'arrivalDate',
  'arrivedFrom',
  'checkpoint',
  'visitType',
  'visaType',
  'visaNumber',
  'visaIssuedBy',
  'visaDateFrom',
  'visaDateTo'
]

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
  const { onSubmit } = props

  return (
    <>
      <PageTitle name="Номерной фонд" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              {/* {console.warn(formikforms)} */}
              <Label>Основная информация</Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="surname" label="фамилия" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="name" label="имя" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="fatherName" label="отчество" component={InputField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="fromCountry"
                    label="страна прибытие " component={UniversalSearchField} api={API.COUNTRY_LIST} />
                </Col>
                <Col span={8}>
                  <Field name="birthDate" label="дата рождения" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="gender" label="пол" component={UniversalStaticSelectField} list={GENDER_LIST} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="citizenship"
                    label="страна рождения" component={UniversalSearchField} api={API.COUNTRY_LIST} />
                </Col>
                <Col span={8}>
                  <Field name="phoneNumber" label="Телефон номер" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="email" label="Почта" component={InputField} />
                </Col>
              </Row>

              <Label>Информация о документа</Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="documentType" label="Тип документа" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="series" label="Серия паспорта" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="number" label="Номер паспорта" component={InputField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="issuedBy" label="Орган выдачи" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="issuedDate" label="Дата выдачи" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="validUntil" label="Действителен до" component={DateField} />
                </Col>
              </Row>
              <Label>Дополнительная информация </Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="checkInDate" label="arrivedFrom" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="arrivalDate" label="дата рождения" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="checkpoint" label="checkpoint" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="arrivedFrom"
                    label="страна рождения" component={UniversalSearchField} api={API.COUNTRY_LIST} />
                </Col>

              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="visitType" label="Тип визита" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="visaType" label="Тип визы" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="visaNumber" label="Номер визы" component={InputField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="visaIssuedBy" label="Кем выдан виза" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="visaDateFrom" label="Срок визы с" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="visaDateTo" label="Срок визы по" component={DateField} />
                </Col>
              </Row>
              <div style={{ textAlign: 'right' }}>
                <MediumButton>Сохранить</MediumButton>
              </div>

            </form>
          )
        }}
      />
    </>
  )
}

export default ReservationCreate
