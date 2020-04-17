import React from 'react'
import { Col, Row } from '~/components/Grid'
import { Field, DateField } from '~/components/FormField'

export const fields = ['beginDate', 'endDate']
const TransactionListFilterForm = props => {
  return (
    <Row gutter={20}>
      <Col span={8}>
        <Field
          component={DateField}
          name="beginDate"
          label="Период (начало)"
        />
      </Col>
      <Col span={8}>
        <Field
          component={DateField}
          name="endDate"
          label="Период (конец)"
        />
      </Col>
      <Col span={8} />
    </Row>
  )
}

export default TransactionListFilterForm
