import React from 'react'
import * as API from '../../../constants/api'
import { Col, Row } from '../../../components/Grid'
import {
  Field,
} from '../../../components/FormField'
import UniversalMultiSelectField from '../../../components/FormField/Select/UniversalMultiSelectField'

export const fields = ['client', 'clientType']

const ClientListFilterForm = () => {
  return (
    <Row gutter={20}>
      <Col span={6}>
        <Field
          component={UniversalMultiSelectField}
          api={API.TYPE_STANDARD_LIST}
          name={'clientType'}
          label={'Тип клиента'}
        />
      </Col>
    </Row>
  )
}

export default ClientListFilterForm
