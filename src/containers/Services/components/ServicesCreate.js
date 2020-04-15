import React from 'react'
import { path, prop } from 'ramda'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { PageTitle, MediumButton } from '../../../components/UI'
import * as ROUTES from '../../../constants/api'

import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalSearchField,
  UniversalStaticSelectField
} from '../../../components/FormField'
import { Box } from '../../../components/StyledElems'
import { TYPE_SERVICES } from '../../../constants/backend'
import { UniversalMultiSelectField } from '~/components/FormField'

export const fields = [
  'service',
  'price',
  'roomCategories',
  'servicePayment',
  'isActive'
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
      <PageTitle name="Тарифы и цены сервисов" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit, values, ...formikProps }) => {
          const parent = path(['category', 'id'], values)
          const type = path(['type', 'id'], values)

          return (
            <form onSubmit={handleSubmit}>
              <Label>Основная информация</Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="type"
                    label="тип сервиса"
                    component={UniversalSearchField}
                    api={ROUTES.SERVICES_TYPE_LIST}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="service"
                    label="сервис"
                    params={{ type }}
                    parent={type}
                    disabled={!type}
                    api={ROUTES.SERVICES}
                    component={UniversalSearchField} />
                </Col>

                <Col span={8}>
                  <Field name="servicePayment" label="единица измерения "
                    component={UniversalStaticSelectField}
                    list={TYPE_SERVICES}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
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
                    name="roomCategories"
                    label="Подкатегория"
                    params={{ parent }}
                    parent={parent}
                    disabled={!parent}
                    api={ROUTES.ROOM_TYPE_LIST}
                    component={UniversalMultiSelectField}
                  />
                </Col>

                <Col span={8}>
                  <Field name="price" label="цена за день" component={InputField} />
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
