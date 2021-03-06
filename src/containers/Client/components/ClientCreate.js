import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { PageTitle, MediumButton } from '../../../components/UI'

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
  'title',
  'titleObject',
  'documentDate',
  'address',
  'fax',
  'site',
  'email',
  'legalName',
  'paymentAccount',
  'mfo',
  'inn',
  'oked',
  'ndsRegId',
  'swift',
  'fullName',
  'fullNameOrgan',
  'phoneNumber',
  'password',
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
                <Col span={24}>
                  <Field
                    label="Полное название объекта аккредитации"
                    name={'titleObject'}
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    label="Ф.И.О. руководителя лаборатории "
                    name={'fullNameOrgan'}
                    component={InputField}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    label="Полное название юридического лица"
                    name={'title'}
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>

                <Col span={12}>
                  <Field
                    label="Ф.И.О. руководителя лаборатории "
                    name={'fullName'}
                    component={InputField}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    name={'paymentAccount'}
                    label="Банковские реквизиты "
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    label={'legal_name'}
                    name={'legalName'}
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    label={'documentDate'}
                    name={'documentDate'}
                    component={DateField}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    label={'inn'}
                    name={'inn'}
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    label={'phoneNumber'}
                    name={'phoneNumber'}
                    component={InputField}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    label={'address'}
                    name={'address'}
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    label={'ndsRegId'}
                    name={'ndsRegId'}
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    label={'fax'}
                    name={'fax'}
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    label={'oked'}
                    name={'oked'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    label={'КОД ПЛАТЕЛЬЩИКА НДС'}
                    name={'nds_reg_id'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    label={'SWIFT'}
                    name={'swift'}
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={6}>
                  <Field
                    label={'email'}
                    name={'email'}
                    component={InputField}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    label={'МФО'}
                    name={'mfo'}
                    component={InputField}
                  />
                </Col>
                <Col span={6}>
                  <Field
                    label={'site'}
                    name={'site'}
                    component={InputField}
                  />
                </Col>

                <Col span={6}>
                  <Field
                    label={'password'}
                    name={'password'}
                    component={InputField}
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
