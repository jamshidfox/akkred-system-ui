import React from 'react'
import PropTypes from 'prop-types'
import * as STATE from '../../../constants/stateNames'
import { useCreate, useFetchList, useModal } from '../../../hooks'
import { getSerializedData, getParamFromHistory } from '../../../utils/get'
import { replaceParamsRoute } from '../../../utils/route'
import { RoomList } from '../components'
import { roomFetchList } from '../actions'

const getRoomListParams = () => ({
  action: roomFetchList,
  stateName: STATE.ROOM_LIST,
})

const getRoomCreateParams = () => ({

})
const RoomListContainer = props => {
  const list = useFetchList(getRoomListParams())
  const createModal = useModal(getRoomCreateParams())
  return (
    <RoomList
      list={list}
      createModal={createModal}
    />
  )
}

export default RoomListContainer
