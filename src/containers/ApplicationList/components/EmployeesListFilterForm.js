import React from 'react'
import { Col, Row } from '../../../components/Grid'
import {
  Field, UniversalStaticSelectField,
} from '../../../components/FormField'
import * as CONST from '../../../constants/backend'

export const fields = ['client', 'clientType']

const CommentListFilterForm = props => {
  return (
    <Row gutter={20}>
      <Col span={12}>
        <Field
          component={UniversalStaticSelectField}
          list={CONST.STANDART_LIST}
          name="type"
          label="Turi"
        />
      </Col>
    </Row>
  )
}
export default CommentListFilterForm
