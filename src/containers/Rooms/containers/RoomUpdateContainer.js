import React from 'react'
import { flatten, fromPairs, map, path, pipe, prop, toPairs, union, values } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import * as ROUTES from '../../../constants/routes'
import { useFetchList, useUpdate, useFetchItem, useModal } from '../../../hooks'
import { getSerializedData, getIdForInitValues } from '../../../utils/get'
import RoomCreate, { fields } from '../components/RoomCreate'
import { roomFetchList, roomFetchItem, roomUpdateAction } from '../actions'

const getRoomItemParams = () => ({
  action: roomFetchItem,
  stateName: STATE.ROOM_ITEM,
})
const KEY = 0
const VALUE = 1
const mapIndexKey = (arr) => {
  const key = '_' + arr[KEY]
  return [key, arr[VALUE]]
}

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

const getInitialValues = (data) => {
  const facilities = pipe(prop('facilities'), toPairs, map(mapIndexKey), fromPairs)(data)

  return ({
    roomCategory: path(['roomCategory', 'id'], data),
    detail: prop('detail', data),
    floor: prop('floor', data),
    area: prop('area', data),
    capacity: prop('capacity', data),
    additionalCapacity: prop('additionalCapacity', data),
    roomNumber: prop('roomNumber', data),
    facilities
  })
}

const getRoomUpdateParams = () => ({
  stateName: STATE.ROOM_UPDATE,
  action: roomUpdateAction,
  serializer: serializer,
  redirectUrl: ROUTES.ROOM_LIST_URL
})
const itemFields = ['roomCategory']
const RoomUpdateContainer = props => {
  const { data } = useFetchItem(getRoomItemParams())
  const serviceModal = useModal({})

  // const initialValues = { ...data, ...getIdForInitValues(data, itemFields) }
  const initialValues = getInitialValues(data)
  const updateData = useUpdate(getRoomUpdateParams())

  return (
    <RoomCreate
      {...updateData}
      initialValues={initialValues}
      serviceModal={serviceModal}
    />
  )
}

export default RoomUpdateContainer
