import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { ReservationCreate, fields } from '../components'
import { reservationCreateAction } from '../actions'

const serializer = (values) => {
  return {
    ...getSerializedData(fields, values),
    facilities: [],
  }
}

const getRoomCreateParams = () => ({
  stateName: STATE.ROOM_CREATE,
  action: reservationCreateAction,
  serializer: serializer
})
const RoomTypeListContainer = props => {
  const create = useCreate(getRoomCreateParams())
  return (
    <ReservationCreate
      {...create}
    />
  )
}

export default RoomTypeListContainer
