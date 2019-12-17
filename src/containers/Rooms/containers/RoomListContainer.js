import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList } from '../../../hooks'

import RoomList from '../components/RoomList'
import { roomFetchList } from '../actions'

const getRoomListParams = () => ({
  action: roomFetchList,
  stateName: STATE.ROOM_LIST,
})

const RoomListContainer = props => {
  const list = useFetchList(getRoomListParams())

  return (
    <RoomList
      list={list}
    />
  )
}

export default RoomListContainer
