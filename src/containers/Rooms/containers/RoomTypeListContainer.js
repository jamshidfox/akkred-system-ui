import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { RoomTypeList, fields } from '../components'
import { roomFetchList, roomCreateAction } from '../actions'

const getRoomListParams = () => ({
  action: roomFetchList,
  stateName: STATE.ROOM_LIST,
})

const getRoomCreateParams = () => ({
  stateName: STATE.ROOM_CREATE,
  action: roomCreateAction,
  serializer: getSerializedData(fields),
  onSuccess: roomFetchList()
})
const RoomTypeListContainer = props => {
  const list = useFetchList(getRoomListParams())
  const createModal = useCreateModal(getRoomCreateParams())

  return (
    <RoomTypeList
      list={list}
      createModal={createModal}
    />
  )
}

export default RoomTypeListContainer
