import React from 'react'
import * as API from '../../../constants/api'
import * as CONST from '../../../constants/backend'
import { Col, Row } from '../../../components/Grid'
import {
  Field,
  UniversalSearchField,
  UniversalStaticSelectField
} from '../../../components/FormField'

export const fields = ['client', 'clientType']
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
          component={UniversalStaticSelectField}
          list={CONST.CLIENT_LIST}
          name="clientType"
          label="Client Type"
        />
      </Col>
    </Row>
  )
}

export default ClientListFilterForm
