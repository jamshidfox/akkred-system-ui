import React from 'react'
import ClientList from '../../../Application/components/ClientList'
import { useDelete, useFetchList, useFilterActions } from '../../../../hooks'
import { clientDeleteAction, clientFetchList } from '../../../Application/actions'
import * as STATE from '../../../../constants/stateNames'
import { DEFAULT_PICK_PARAMS } from '../../../../utils/isEquals'
import { fields } from '../../../Application/components/CommentListFilterForm'
import MyOrdersGrid from './grid'

// Component
const MyOrdersContainer = () => {
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
    <MyOrdersGrid
      list={list}
      filterActions={filterActions}
      onDelete={deleteAction.onSubmit}
    />
  )
}

export default MyOrdersContainer
