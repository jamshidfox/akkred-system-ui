import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import ClientList from '../components/ClientList'
import { fields } from '../components/CommentListFilterForm'
import { clientFetchList, clientDeleteAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'

const ClientListContainer = () => {
  // FetchList
  const list = useFetchList({
    action: clientFetchList,
    stateName: STATE.APPLICATION_LIST,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })

  // Handlers
  const deleteAction = useDelete({
    action: clientDeleteAction,
    stateName: STATE.APPLICATION_DELETE,
    successAction: clientFetchList
  })

  // FilterActions
  const filterActions = useFilterActions({ fields })

  // Render
  return (
    <ClientList
      list={list}
      filterActions={filterActions}
      onDelete={deleteAction.onSubmit}
    />
  )
}

export default ClientListContainer
