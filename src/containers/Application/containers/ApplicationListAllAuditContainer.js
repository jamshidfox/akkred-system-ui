import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import ApplicationList from '../components/ApplicationList'
import { fields } from '../components/CommentListFilterForm'
import { applicationAuditFetchListAll, applicationDeleteAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import * as ROUTES from '../../../constants/routes'

// Enhance
const enhance = compose(connect())

// Component
const ApplicationListAllAuditContainer = props => {
  // FetchList
  const list = useFetchList({
    action: applicationAuditFetchListAll,
    stateName: STATE.APPLICATION_LIST_ALL,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })

  // Handlers
  const deleteAction = useDelete({
    action: applicationDeleteAction,
    stateName: STATE.APPLICATION_DELETE,
    successAction: applicationAuditFetchListAll
  })

  // FilterActions
  const filterActions = useFilterActions({ fields })

  const tabsList = [
    {
      name: 'Ko`rib chiqish uchun',
      url: ROUTES.APPLICATION_AUDIT_URL
    },
    {
      name: 'Barcha arizalar',
      url: ROUTES.APPLICATION_ALL_AUDIT_URL
    }
  ]

  // Render
  return (
    <ApplicationList
      my={'all'}
      list={list}
      filterActions={filterActions}
      onDelete={deleteAction.onSubmit}
      {...props}
      tabsList={tabsList}
    />
  )
}

export default enhance(ApplicationListAllAuditContainer)
