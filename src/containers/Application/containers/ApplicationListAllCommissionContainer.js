import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import { fields } from '../components/CommentListFilterForm'
import { applicationCommissionFetchListAll, applicationDeleteAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import * as ROUTES from '../../../constants/routes'
import ApplicationList from '../components/ApplicationList'

// Enhance
const enhance = compose(connect())

// Component
const ApplicationListAllCommissionContainer = props => {
  // FetchList
  const list = useFetchList({
    action: applicationCommissionFetchListAll,
    stateName: STATE.APPLICATION_LIST_ALL,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })

  // Handlers
  const deleteAction = useDelete({
    action: applicationDeleteAction,
    stateName: STATE.APPLICATION_DELETE,
    successAction: applicationCommissionFetchListAll
  })

  // TabsList
  const tabsList = [
    {
      name: 'Ko`rib chiqish uchun',
      url: ROUTES.APPLICATION_ACCRED_URL
    },
    {
      name: 'Barcha arizalar',
      url: ROUTES.APPLICATION_ALL_COMMISSION_URL
    }
  ]

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
      tabsList={tabsList}
    />
  )
}

export default enhance(ApplicationListAllCommissionContainer)
