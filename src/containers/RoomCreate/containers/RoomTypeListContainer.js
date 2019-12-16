import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList } from '../../../hooks'

import RoomTypeList from '../components/RoomTypeList'
import { roomFetchList } from '../actions'

const getRoomListParams = () => ({
  action: roomFetchList,
  stateName: STATE.ROOM_LIST,
})

const RoomTypeListContainer = props => {
  const list = useFetchList(getRoomListParams())

  return (
    <RoomTypeList
      list={list}
    />
  )
}

export default RoomTypeListContainer
