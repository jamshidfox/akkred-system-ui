import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../../constants/stateNames'
import { useFetchList, useFilterActions } from '../../../../hooks'
import ApplicationList from '../../components/ApplicationList'
import { DEFAULT_PICK_PARAMS } from '../../../../utils/isEquals'
import { fields } from '../../../Employees/components/EmployeesListFilterForm'
import * as ROUTES from '../../../../constants/routes'
import { applicationCommissionMyFetchList } from '../../actions'

// Enhance
const enhance = compose(connect())
const getRoomListParams = () => ({
  action: applicationCommissionMyFetchList,
  stateName: STATE.APPLICATION_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

const ApplicationCommissionMyListContainer = props => {
  const list = useFetchList(getRoomListParams())
  const filterActions = useFilterActions({ fields })

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
  return (
    <ApplicationList
      list={list}
      my={'my'}
      filterActions={filterActions}
      {...props}
      tabsList={tabsList}
    />
  )
}

export default enhance(ApplicationCommissionMyListContainer)
