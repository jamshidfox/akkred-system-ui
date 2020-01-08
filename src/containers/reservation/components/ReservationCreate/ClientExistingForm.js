import React, { useEffect } from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { path, prop } from 'ramda'
import { DateField, InputField, NoopFields, UniversalSearchField } from '../../../../components/FormField'
import * as API from '../../../../constants/api'
import { Col, Row as RowUI } from '../../../../components/Grid'
import { MediumButton } from '../../../../components/UI/Buttons'

const Row = styled(RowUI)`
  margin-bottom: 40px;
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
const ClientExistingForm = props => {
  const { handleSubmit, form, values, loading } = props
  const client = prop('client', values)
  const clientId = prop('id', client)

  useEffect(() => {
    if (clientId) {
      form.change('clientDocument', client.clientDocument)
      form.change('clientArrival', client.clientArrival)
    }
  }, [clientId])
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col span={24}>
          <Field
            name="client"
            label="Клиент"
            component={UniversalSearchField}
            api={API.CLIENT_LIST}
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
            label="Страна откуда прибыл"
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
        <MediumButton type="submit" disabled={loading}>Сохранить</MediumButton>
      </div>
    </form>
  )
}

ClientExistingForm.propTypes = {
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  form: PropTypes.object
}
export default ClientExistingForm
