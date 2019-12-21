import React from 'react'
import { useParams } from 'react-router-dom'
import * as STATE from '../../../constants/stateNames'
import { useFetchList } from '../../../hooks'
import RoomList from '../components/RoomList'
import { roomFetchList } from '../actions'

const getRoomListParams = ({ id }) => ({
  mapper: () => ({ id }),
  action: roomFetchList,
  stateName: STATE.ROOM_LIST,
})

const RoomListContainer = props => {
  const params = useParams()
  const list = useFetchList(getRoomListParams(params))

  return (
    <RoomList
      list={list}
    />
  )
}

export default RoomListContainer
