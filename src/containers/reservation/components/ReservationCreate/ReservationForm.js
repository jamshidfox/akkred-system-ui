import React from 'react'
import styled from 'styled-components'
import { path } from 'ramda'
import PropTypes from 'prop-types'
import {
  DateField,
  Field,
  DurationField,
  UniversalSearchField,
  DateTimeField
} from '../../../../components/FormField'
import * as API from '../../../../constants/api'
import { Row as RowUI, Col } from '../../../../components/Grid'

const Row = styled(RowUI)`
    margin-bottom: 20px
`

const ReservationForm = props => {
  const { values } = props

  const parent = path(['parentCategory', 'id'], values)
  const roomCategory = path(['roomCategory', 'id'], values)
  return (
    <div>
      <Row gutter={20} align={'flex-end'}>
        <Col span={12}>
          <Field label="заезд" name="enterDatetime" component={DateTimeField} />
        </Col>
        <Col span={12}>
          <Field label="выезд" name="leaveDatetime" component={DateTimeField} />
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
            params={{ roomCategory, numberActive: true }}
            parent={roomCategory}
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
