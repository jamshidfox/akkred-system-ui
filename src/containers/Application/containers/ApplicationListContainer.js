import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import ApplicationList from '../components/ApplicationList'
import { fields } from '../components/CommentListFilterForm'
import { applicationFetchListAll, applicationDeleteAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'

// Enhance
const enhance = compose(connect())

// Component
const ApplicationListContainer = props => {
  // FetchList
  const list = useFetchList({
    action: applicationFetchListAll,
    stateName: STATE.APPLICATION_LIST_ALL,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })

  // Handlers
  const deleteAction = useDelete({
    action: applicationDeleteAction,
    stateName: STATE.APPLICATION_DELETE,
    successAction: applicationFetchListAll
  })

  // FilterActions
  const filterActions = useFilterActions({ fields })

  // Render
  return (
    <ApplicationList
      my={'all'}
      list={list}
      filterActions={filterActions}
      onDelete={deleteAction.onSubmit}
      {...props}
    />
  )
}

export default enhance(ApplicationListContainer)
