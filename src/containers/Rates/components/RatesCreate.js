import React from 'react'
import { path, prop } from 'ramda'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { PageTitle, MediumButton, InputLabel } from '../../../components/UI'
import * as ROUTES from '../../../constants/api'

import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalSearchField,
  DateField,
} from '../../../components/FormField'

export const fields = [
  'name',
  'foreignerYoung',
  'foreignerGrown',
  'localYoung',
  'localGrown',
  'roomCategory',
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
      <PageTitle name="Тарифы и цены номерного фонда" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        onSubmit={onSubmit}
        render={({ handleSubmit, values, ...formikProps }) => {
          const parent = path(['category', 'id'], values)
          return (
            <form onSubmit={handleSubmit}>
              <Label>Основная информация</Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="name" label="Название тарифа" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field
                    name="category"
                    label="тип номера"
                    params={{ children_only: false }}
                    component={UniversalSearchField}
                    api={ROUTES.ROOM_TYPE_LIST}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="roomCategory"
                    label="Подкатегория"
                    params={{ parent }}
                    disabled={!parent}
                    api={ROUTES.ROOM_TYPE_LIST}
                    component={UniversalSearchField} />
                </Col>
              </Row>
              <Label>Цена Иностранцам</Label>
              <Row gutter={24}>
                <Col span={12}>
                  <Field name="foreignerYoung" label="детям" component={InputField} />
                </Col>
                <Col span={12}>
                  <Field name="foreignerGrown" label="взрослым" component={InputField} />
                </Col>
              </Row>
              <Label>Цена Местным</Label>
              <Row gutter={24}>
                <Col span={12}>
                  <Field name="localYoung" label="детям" component={InputField} />
                </Col>
                <Col span={12}>
                  <Field name="localGrown" label="взрослым" component={InputField} />
                </Col>

              </Row>
              <Label>Период</Label>
              <Row gutter={24}>
                <Col span={12}>
                  <Field name="fromDate" label="Дата начало" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field
                    label={'вРЕМЯ'}
                    name={'fromTime'}
                    placeholder={'Например: 08:00'}
                    component={InputField} />
                </Col>

                <Col span={12}>
                  <Field name="toDate" label="Дата окончание" component={DateField} />
                </Col>
                <Col span={8}>
                  <Field
                    label={'Время'}
                    placeholder={'Например: 18:00'}
                    name={'toTime'}
                    component={InputField} />
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
