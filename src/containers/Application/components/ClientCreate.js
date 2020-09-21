import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { PageTitle, MediumButton } from '../../../components/UI'

import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalStaticSelectField,
  DateField,
  NoopFields
} from '../../../components/FormField'
import { ANSWER_LIST, APPLICATION_LIST, STANDART_LIST } from '../../../constants/backend'
import { Box } from '../../../components/StyledElems'

export const fields = [
  'address',
  'documentDate',
  'email',
  'fax',
  'fullName',
  'fullNameOrgan',
  'hasPartAnotherOrgan',
  'inn',
  'internalAudit',
  'legalName',
  'managementAnalysis',
  'managementSystem',
  'mfo',
  'ndsRegId',
  'oked',
  'paymentAccount',
  'phoneNumber',
  'proficiencyTestingProvider',
  'site',
  'swift',
  'title',
  'titleObject',
  'typeApplication',
  'typeStandard',
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
      <PageTitle name="Заявка" />
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

                <Col span={12}>
                  <Field
                    name="typeApplication"
                    label="Тип заявки"
                    component={UniversalStaticSelectField}
                    list={APPLICATION_LIST}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="typeStandard"
                    label="тип стандарта"
                    component={UniversalStaticSelectField}
                    list={STANDART_LIST}
                  />
                </Col>
              </Row>

              <Row gutter={24}>

                <Col span={6}>
                  <Field
                    name="title"
                    label="Полное название юридического лица"
                    component={InputField}
                  />
                </Col>
                <Col span={6}>
                  <Field name="titleObject" label="Полное название объекта аккредитации" component={InputField} />
                </Col>
                <Col span={6}>
                  <Field
                    name="documentDate"
                    label="Докумен.дата"
                    component={DateField}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    name="address"
                    label="Юридический адрес"
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={6}>
                  <Field
                    name="fax"
                    label="fax"
                    component={InputField}
                  />
                </Col>

                <Col span={6}>
                  <Field
                    name="site"
                    label="Веб-сайт организации"
                    component={InputField}
                  />
                </Col>

                <Col span={6}>
                  <Field
                    name="legalName"
                    label="legal_name"
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
                    name="paymentAccount"
                    label="Банковские реквизиты "
                    component={InputField}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    name="mfo"
                    label="MФО"
                    component={InputField}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    name="inn"
                    label="ИНН"
                    component={InputField}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    name="oked"
                    label="oked"
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={6}>
                  <Field
                    name="ndsRegId"
                    label="КОД ПЛАТЕЛЬЩИКА НДС "
                    component={InputField}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    name="swift"
                    label="SWIFT"
                    component={InputField}
                  />
                </Col>

                <Col span={6}>
                  <Field
                    name="fullNameOrgan"
                    label="Ф.И.О. руководителя лаборатории "
                    component={InputField}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    name="phoneNumber"
                    label="Номер телефона"
                    component={InputField}
                  />
                </Col>
              </Row>

              <Label>Информация о документа</Label>

              <Row gutter={24}>
                <Col span={24}>
                  <Field
                    name="fullName"
                    label="Ф.И.О. руководителя юридического лица.  "
                    component={InputField}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={24}>
                  <Field
                    name="proficiencyTestingProvider"
                    label="Принимала ли лаборатория участие в Проверке Квалификации/Межлабораторных сличительных испытаниях?"
                    component={InputField}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="managementAnalysis"
                    label="Был ли проведен анализ со стороны руководства? "
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="managementSystem"
                    label="Как давно в лаборатории внедрена система менеджмента?"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="hasPartAnotherOrgan"
                    label="hasPartAnotherOrgan"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="internalAudit"
                    label="Был ли проведен внутренний аудит?"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
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

export default ReservationCreate
