import React from 'react'
import * as API from '../../../constants/api'
import { Col, Row } from '../../../components/Grid'
import {
  Field, UniversalStaticSelectField,
} from '../../../components/FormField'
import UniversalMultiSelectField from '../../../components/FormField/Select/UniversalMultiSelectField'
import * as CONST from '../../../constants/backend'

export const fields = ['client', 'clientType']

const CommentListFilterForm = props => {
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

export default CommentListFilterForm
