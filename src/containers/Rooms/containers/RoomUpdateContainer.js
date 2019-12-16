import React from 'react'
import { prop } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import * as ROUTES from '../../../constants/routes'
import { useFetchList, useUpdate, useFetchItem } from '../../../hooks'
import { getSerializedData, getIdForInitValues } from '../../../utils/get'
import RoomCreate, { fields } from '../../RoomCreate/components/RoomCreate'
import { roomFetchList, roomFetchItem, roomUpdateAction } from '../actions'

const getRoomItemParams = () => ({
  action: roomFetchItem,
  stateName: STATE.ROOM_ITEM,
})

const serializer = (values) => {
  return {
    ...getSerializedData(fields, values),
    facilities: [],
  }
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

  const initialValues = { ...data, ...getIdForInitValues(data, itemFields) }
  const updateData = useUpdate(getRoomUpdateParams())

  return (
    <RoomCreate {...updateData} initialValues={initialValues} />
  )
}

export default RoomUpdateContainer
