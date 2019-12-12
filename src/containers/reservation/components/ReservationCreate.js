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
  'client.surname',
  'client.name',
  'client.fatherName',
  'client.fromCountry',
  'client.birthDate',
  'client.gender',
  'client.citizenship',
  'client.phoneNumber',
  'client.email',
  'clientArrival.checkInDate',
  'clientArrival.arrivalDate',
  'clientArrival.checkpoint',
  'room',
  'enterDatetime',
  'leaveDatetime',
  'clientDocument.documentType',
  'clientDocument.series',
  'clientDocument.number',
  'clientDocument.issuedBy',
  'clientDocument.issuedDate',
  'clientDocument.validUntil',
  'clientDocument.visitType',
  'clientDocument.visaType',
  'clientDocument.visaNumber',
  'clientDocument.visaIssuedBy',
  'clientDocument.visaDateFrom',
  'clientDocument.visaDateTo'
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
  const { onSubmit, list, createModal } = props

  console.warn(onSubmit)

  const data = prop('results', list)

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
                  <Field name="client.surname" label="фамилия" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="client.name" label="имя" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="client.fatherName" label="отчество" component={InputField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="client.fromCountry"
                    label="страна прибытие " component={UniversalSearchField} api={API.COUNTRY_LIST} />
                </Col>
                <Col span={8}>
                  <Field name="client.birthDate" label="дата рождения" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="client.gender" label="пол" component={UniversalStaticSelectField} list={GENDER_LIST} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="client.citizenship"
                    label="страна рождения" component={UniversalSearchField} api={API.COUNTRY_LIST} />
                </Col>
                <Col span={8}>
                  <Field name="client.phoneNumber" label="Телефон номер" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="client.email" label="Почта" component={InputField} />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field name="clientArrival.checkInDate" label="arrivedFrom" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="clientArrival.arrivalDate" label="дата рождения" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="clientArrival.checkpoint" label="checkpoint" component={InputField} />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field name="room" label="Номер комнаты" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="enterDatetime" label="Дата заезда" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="leaveDatetime" label="Дата выезда" component={DateField} />
                </Col>
              </Row>

              <Label>Информация о документа</Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="clientDocument.documentType" label="Тип документа" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="clientDocument.series" label="Серия паспорта" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="clientDocument.number" label="Номер паспорта" component={InputField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="clientDocument.issuedBy" label="Орган выдачи" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="clientDocument.issuedDate" label="Дата выдачи" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="clientDocument.validUntil" label="Действителен до" component={DateField} />
                </Col>
              </Row>
              <Label>Дополнительная информация </Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="clientDocument.visitType" label="Тип визита" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="clientDocument.visaType" label="Тип визы" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="clientDocument.visaNumber" label="Номер визы" component={InputField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="clientDocument.visaIssuedBy" label="Кем выдан виза" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="clientDocument.visaDateFrom" label="Срок визы с" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field name="clientDocument.visaDateTo" label="Срок визы по" component={DateField} />
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
