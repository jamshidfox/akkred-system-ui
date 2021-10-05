import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions } from '../../../hooks'
import ApplicationList from '../components/ApplicationList'
import { fields } from '../components/CommentListFilterForm'
import { applicationExpertiseFetchListAll } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import * as ROUTES from '../../../constants/routes'

// Enhance
const enhance = compose(connect())

const getListParams = () => ({
  action: applicationExpertiseFetchListAll,
  stateName: STATE.APPLICATION_LIST_ALL,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

// Component
const ApplicationListAllExpertiseContainer = props => {
  // Handlers

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

  // FilterActions
  const list = useFetchList(getListParams())
  const filterActions = useFilterActions({ fields })

  // Render
  return (
    <ApplicationList
      my={'all'}
      list={list}
      filterActions={filterActions}
      {...props}
      tabsList={tabsList}
    />
  )
}

export default enhance(ApplicationListAllExpertiseContainer)
