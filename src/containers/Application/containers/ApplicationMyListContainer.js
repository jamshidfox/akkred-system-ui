import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import ApplicationList from '../components/ApplicationList'
import { fields } from '../components/CommentListFilterForm'
import { applicationFetchList, applicationDeleteAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import * as ROUTES from '../../../constants/routes'

// Enhance
const enhance = compose(connect())

// Component
const ApplicationMyListContainer = props => {
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

  const tabsList = [
    {
      name: 'Mening arizalarim',
      url: ROUTES.APPLICATION_MY_ORDERS_URL
    },
    {
      name: 'Barcha arizalar',
      url: ROUTES.APPLICATION_ALL_LIST_URL
    }
  ]

  // Render
  return (
    <ApplicationList
      my={'my'}
      list={list}
      tabsList={tabsList}
      filterActions={filterActions}
      onDelete={deleteAction.onSubmit}
      {...props}
    />
  )
}

export default enhance(ApplicationMyListContainer)