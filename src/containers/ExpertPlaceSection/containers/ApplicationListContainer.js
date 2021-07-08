import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import ExpertAuditList from '../components/ExpertAuditList'
import { fields } from '../components/CommentListFilterForm'
import { applicationFetchList, applicationDeleteAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'

// Enhance
const enhance = compose(connect())

// Component
const ApplicationListContainer = props => {
  // FetchList
  const list = useFetchList({
    action: applicationFetchList,
    stateName: STATE.EXPERT_PLACE_LIST,
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
    <ExpertAuditList
      list={list}
      filterActions={filterActions}
      onDelete={deleteAction.onSubmit}
      {...props}
    />
  )
}

export default enhance(ApplicationListContainer)
