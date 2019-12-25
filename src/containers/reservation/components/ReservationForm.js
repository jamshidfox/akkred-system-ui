import React from 'react'
import styled from 'styled-components'
import { path } from 'ramda'
import {
  DateField,
  Field,
  UniversalSearchField
} from '../../../components/FormField'
import * as API from '../../../constants/api'
import { Row as RowUI, Col } from '../../../components/Grid'
import PropTypes from 'prop-types'
const Row = styled(RowUI)`
    margin-bottom: 20px
`

const ReservationForm = props => {
  const { values } = props
  const parent = path(['parentCategory', 'id'], values)
  const roomCategory = path(['roomCategory', 'id'], values)
  return (
    <div>
      <Row gutter={20}>
        <Col span={12}>
          <Field name="enterDatetime" component={DateField} />
        </Col>
        <Col span={12}>
          <Field name="leaveDatetime" component={DateField} />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={8}>
          <Field
            name="parentCategory"
            label="тип номера"
            params={{ children_only: false }}
            api={API.ROOM_TYPE_LIST}
            component={UniversalSearchField}
          />
        </Col>
        <Col span={8}>
          <Field
            name="roomCategory"
            label="Подкатегория"
            params={{ parent }}
            parent={parent}
            disabled={!parent}
            api={API.ROOM_TYPE_LIST}
            component={UniversalSearchField}
          />
        </Col>
        <Col span={8}>
          <Field
            name="room"
            api={API.ROOM_LIST}
            label={'номер'}
            disabled={!roomCategory}
            itemText={['roomNumber']}
            params={{ roomCategory }}
            parent={{ roomCategory }}
            component={UniversalSearchField}
          />
        </Col>
      </Row>
    </div>
  )
}

ReservationForm.propTypes = {
  values: PropTypes.object
}
export default ReservationForm
