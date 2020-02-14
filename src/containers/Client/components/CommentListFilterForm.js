import React from 'react'
import * as API from '../../../constants/api'
import { Col, Row } from '../../../components/Grid'
import {
  Field,
  UniversalSearchField
} from '../../../components/FormField'

export const fields = ['client', 'product']
const ClientListFilterForm = props => {
  return (
    <Row gutter={20}>
      <Col span={6}>
        <Field
          component={UniversalSearchField}
          api={API.CLIENT_LIST}
          name="client"
          label="Клиент"
        />
      </Col>
      <Col span={6}>
        <Field
          component={UniversalSearchField}
          api={API.CLIENT_LIST}
          name="product"
          label="Продукт"
        />
      </Col>
    </Row>
  )
}

export default ClientListFilterForm
