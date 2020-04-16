import React from 'react'
import * as API from '../../../constants/api'
import * as CONST from '../../../constants/backend'
import { Col, Row } from '../../../components/Grid'
import {
  Field,
  UniversalSearchField,
  UniversalStaticSelectField
} from '../../../components/FormField'

export const fields = ['type']
const TransactionListFilterForm = props => {
  return (
    <Row gutter={20}>
      <Col span={12}>
        <Field
          component={UniversalStaticSelectField}
          list={CONST.PARTNERS_TYPES}
          name="type"
          label="Тип партнера"
        />
      </Col>
    </Row>
  )
}

export default TransactionListFilterForm
