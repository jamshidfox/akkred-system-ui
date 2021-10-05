import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import ApplicationList from '../components/ApplicationList'
import { fields } from '../components/CommentListFilterForm'
import { applicationFetchListAll, applicationDeleteAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import * as ROUTES from '../../../constants/routes'

// Enhance
const enhance = compose(connect())

const getListParams = () => ({
  action: applicationFetchListAll,
  stateName: STATE.APPLICATION_LIST_ALL,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

// Component
const ApplicationListContainer = props => {
  // FetchList

  // Handlers
  const deleteAction = useDelete({
    action: applicationDeleteAction,
    stateName: STATE.APPLICATION_DELETE,
    successAction: applicationFetchListAll
  })

  const list = useFetchList(getListParams())
  const filterActions = useFilterActions({ fields })

  const tabsList = [
    {
      name: 'Ko`rib chiqish uchun',
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
      my={'all'}
      list={list}
      tabsList={tabsList}
      filterActions={filterActions}
      onDelete={deleteAction.onSubmit}
      {...props}
    />
  )
}

export default enhance(ApplicationListContainer)
