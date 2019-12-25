import React from 'react'
import { useDispatch } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import { RoomTypeList, fields } from '../components'
import { roomCreateAction, roomTypeFetchList } from '../actions'

const getRoomListParams = () => ({
  action: roomTypeFetchList,
  stateName: STATE.ROOM_TYPE_LIST,
})

const getRoomCreateParams = (onSuccess) => ({
  stateName: STATE.ROOM_CREATE,
  action: roomCreateAction,
  serializer: getSerializedData(fields),
  onSuccess
})
const RoomTypeListContainer = props => {
  const dispatch = useDispatch()
  const onSuccess = () => dispatch(roomTypeFetchList())
  const list = useFetchList(getRoomListParams())
  const createModal = useCreateModal(getRoomCreateParams(onSuccess))

  return (
    <RoomTypeList
      list={list}
      createModal={createModal}
    />
  )
}

export default RoomTypeListContainer
