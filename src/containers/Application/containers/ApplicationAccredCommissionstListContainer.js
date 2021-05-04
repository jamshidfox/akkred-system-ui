import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import { fields } from '../components/CommentListFilterForm'
import { applicationCommissionsFetchList, applicationDeleteAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import * as ROUTES from '../../../constants/routes'
import ApplicationList from "../components/ApplicationList";

// Enhance
const enhance = compose(connect())

// Component
const ApplicationAuditListContainer = props => {
  // FetchList
  const list = useFetchList({
    action: applicationCommissionsFetchList,
    stateName: STATE.APPLICATION_LIST,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })

  // Handlers
  const deleteAction = useDelete({
    action: applicationDeleteAction,
    stateName: STATE.APPLICATION_DELETE,
    successAction: applicationCommissionsFetchList
  })

  // FilterActions
  const filterActions = useFilterActions({ fields })

  const tabsList = [
    {
      name: 'Mening arizalarim',
      url: ROUTES.APPLICATION_ACCRED_URL
    },
    {
      name: 'Barcha arizalar',
      url: ROUTES.APPLICATION_ALL_COMMISSION_URL
    }
  ]

  // Render
  return (
    <ApplicationList
      my={'my'}
      list={list}
      filterActions={filterActions}
      onDelete={deleteAction.onSubmit}
      {...props}
      tabsList={tabsList}
    />
  )
}

export default enhance(ApplicationAuditListContainer)
