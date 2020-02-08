import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList } from '../../../hooks'
import ClientList from '../components/ClientList'
import { clientFetchList } from '../actions'

const getRoomListParams = () => ({
  action: clientFetchList,
  stateName: STATE.CLIENT_LIST,
})

const ClientListContainer = props => {
  const list = useFetchList(getRoomListParams())
  return (
    <ClientList
      list={list}
    />
  )
}

export default ClientListContainer
