import React from 'react'
import { prop } from 'ramda'
import styled from 'styled-components'
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

export const fields = [

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
  const { list, createModal } = props

  const data = prop('results', list)

  return (
    <>
      <PageTitle name="Номерной фонд" />
      <Form
        onSubmit={() => {}}
        render={() => (
          <>
            <Label>Основная информация</Label>
            <Row gutter={24}>
              <Col span={8}>
                <Field name="surname" label="фамилия" component={InputField} />
              </Col>
              <Col span={8}>
                <Field name="name" label="имя" component={InputField} />
              </Col>
              <Col span={8}>
                <Field name="surname" label="отчество" component={InputField} />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Field name="citizenship" label="страна рождения" component={UniversalSearchField} />
              </Col>
              <Col span={8}>
                <Field name={'birthday'} label="дата рождения" component={DateField} />
              </Col>
              <Col span={8}>
                <Field name="gender" label="пол" component={UniversalStaticSelectField} />
              </Col>
            </Row>
            <Label>Информация о документа</Label>
            <Row gutter={24}>
              <Col span={8}>
                <Field name="documentType" label="тип документа" component={UniversalStaticSelectField} />
              </Col>
              <Col span={8}>
                <Field name="serial" label="Серия паспорта" component={InputField} />
              </Col>
              <Col span={8}>
                <Field name="serialNumber" label="Номер паспорта" component={InputField} />
              </Col>
            </Row>
          </>
        )}
      />
    </>
  )
}

export default ReservationCreate
