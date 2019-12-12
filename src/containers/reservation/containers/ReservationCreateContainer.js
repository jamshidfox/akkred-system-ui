import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { ReservationCreate, fields } from '../components'
import { reservationCreateAction } from '../actions'

const getRoomCreateParams = () => ({
  stateName: STATE.RESERVATION_CREATE,
  action: reservationCreateAction,
  serializer: getSerializedData(fields),
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
