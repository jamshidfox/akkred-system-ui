import React from 'react'
import { flatten, map, pipe, prop, values } from 'ramda'
import { useParams } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import * as STATE from '../../../constants/stateNames'
import * as ROUTE from '../../../constants/routes'
import { useCreate, useModal } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import { RoomCreate, createField } from '../components'
import { roomSingleCreateAction } from '../actions'

const serializer = (val, id) => {
  const facilities = pipe(
    values,
    flatten,
    map(prop('id'))
  )(val.facilities)
  return {
    ...getSerializedData(createField, val),
    facilities: facilities,
    room_category: id,
  }
}

const getRoomCreateParams = (id) => ({
  stateName: STATE.ROOM_CREATE,
  action: roomSingleCreateAction,
  serializer: (val) => serializer(val, id),
  redirectUrl: sprintf(ROUTE.SETTING_ROOMS_LIST_URL, id)
})
const RoomTypeListContainer = props => {
  const { id } = useParams()

  const create = useCreate(getRoomCreateParams(id))
  const serviceModal = useModal({})
  return (
    <RoomCreate
      parent={id}
      {...create}
      serviceModal={serviceModal}
    />
  )
}

export default RoomTypeListContainer
