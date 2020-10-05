import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import ApplicationList from '../components/ApplicationList'
import { fields } from '../components/CommentListFilterForm'
import { applicationFetchList, applicationDeleteAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'

const ApplicationListContainer = () => {
  // FetchList
  const list = useFetchList({
    action: applicationFetchList,
    stateName: STATE.APPLICATION_LIST,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })

  // Handlers
  const deleteAction = useDelete({
    action: applicationDeleteAction,
    stateName: STATE.APPLICATION_DELETE,
    successAction: applicationFetchList
  })

  // FilterActions
  const filterActions = useFilterActions({ fields })

  // Render
  return (
    <ApplicationList
      list={list}
      filterActions={filterActions}
      onDelete={deleteAction.onSubmit}
    />
  )
}

export default ApplicationListContainer
