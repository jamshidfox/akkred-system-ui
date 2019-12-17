import React from 'react'
import { flatten, map, pipe, prop, values } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import { useCreate, useModal } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { RoomCreate, fields } from '../components'
import { roomSingleCreateAction } from '../actions'

const serializer = (val) => {
  const facilities = pipe(
    values,
    flatten,
    map(prop('id'))
  )(val.facilities)
  return {
    ...getSerializedData(fields, val),
    facilities: facilities,
  }
}

const getRoomCreateParams = () => ({
  stateName: STATE.ROOM_CREATE,
  action: roomSingleCreateAction,
  serializer: serializer
})
const RoomTypeListContainer = props => {
  const create = useCreate(getRoomCreateParams())
  const serviceModal = useModal({})
  return (
    <RoomCreate
      {...create}
      serviceModal={serviceModal}
    />
  )
}

export default RoomTypeListContainer
