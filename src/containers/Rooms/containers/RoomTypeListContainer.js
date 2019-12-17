import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { RoomTypeList, fields } from '../components'
import { roomCreateAction, roomTypeFetchList } from '../actions'

const getRoomListParams = () => ({
  action: roomTypeFetchList,
  stateName: STATE.ROOM_TYPE_LIST,
})

const getRoomCreateParams = () => ({
  stateName: STATE.ROOM_CREATE,
  action: roomCreateAction,
  serializer: getSerializedData(fields),
  onSuccess: roomTypeFetchList()
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
