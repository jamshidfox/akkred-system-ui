import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import { fields } from '../components/CommentListFilterForm'
import { applicationExpertiseFetchList, applicationDeleteAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import * as ROUTES from '../../../constants/routes'
import ApplicationList from "../components/ApplicationList";

// Enhance
const enhance = compose(connect())

// Component
const ApplicationMyListContainer = props => {
  // FetchList
  const list = useFetchList({
    action: applicationExpertiseFetchList,
    stateName: STATE.APPLICATION_LIST,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })

  // Handlers
  const deleteAction = useDelete({
    action: applicationDeleteAction,
    stateName: STATE.APPLICATION_DELETE,
    successAction: applicationExpertiseFetchList
  })

  // FilterActions
  const filterActions = useFilterActions({ fields })
  const tabsList = [
    {
      name: 'Ko`rib chiqish uchun',
      url: ROUTES.APPLICATION_EXPERTISE_URL
    },
    {
      name: 'Barcha arizalar',
      url: ROUTES.APPLICATION_ALL_EXPERTISE_URL
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
