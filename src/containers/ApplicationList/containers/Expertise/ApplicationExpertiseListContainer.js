import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../../constants/stateNames'
import { useFetchList, useFilterActions } from '../../../../hooks'
import ApplicationList from '../../components/ApplicationList'
import { DEFAULT_PICK_PARAMS } from '../../../../utils/isEquals'
import { fields } from '../../../Employees/components/EmployeesListFilterForm'
import * as ROUTES from '../../../../constants/routes'
import { applicationExpertiseAllFetchList } from '../../actions'

// Enhance
const enhance = compose(connect())
const getRoomListParams = () => ({
  action: applicationExpertiseAllFetchList,
  stateName: STATE.APPLICATION_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

const ApplicationExpertiseListContainer = props => {
  const list = useFetchList(getRoomListParams())
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
  return (
    <ApplicationList
      list={list}
      my={'all'}
      filterActions={filterActions}
      {...props}
      tabsList={tabsList}
    />
  )
}

export default enhance(ApplicationExpertiseListContainer)
