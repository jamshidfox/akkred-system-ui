import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions } from '../../../hooks'
import ClientList from '../components/ClientList'
import { fields } from '../components/CommentListFilterForm'
import { clientFetchList } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'

const getRoomListParams = () => ({
  action: clientFetchList,
  stateName: STATE.CLIENT_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

const ClientListContainer = props => {
  const list = useFetchList(getRoomListParams())

  const filterActions = useFilterActions({ fields })
  return (
    <ClientList
      list={list}
      filterActions={filterActions}
    />
  )
}

export default ClientListContainer
