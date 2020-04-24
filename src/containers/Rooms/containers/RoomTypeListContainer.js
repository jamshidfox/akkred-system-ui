import React from 'react'
import { useDispatch } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal, useDelete } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import { RoomTypeList, fields } from '../components'
import { roomCreateAction, roomTypeFetchList, roomDeleteAction } from '../actions'

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

const getRoomDeleteParams = (onSuccess) => ({
  stateName: STATE.ROOM_DELETE,
  action: roomDeleteAction,
  onSuccess
})

const RoomTypeListContainer = props => {
  const dispatch = useDispatch()
  const onSuccess = () => dispatch(roomTypeFetchList())
  const list = useFetchList(getRoomListParams())
  const deleteModal = useDelete(getRoomDeleteParams(onSuccess))
  const createModal = useCreateModal(getRoomCreateParams(onSuccess))

  return (
    <RoomTypeList
      list={list}
      createModal={createModal}
      deleteModal={deleteModal}
    />
  )
}

export default RoomTypeListContainer
