import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions } from '../../../hooks'
import { employeesFetchList } from '../actions'
import EmployeesList from '../components/EmployeesList'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import { fields } from '../../Partners/components/PartnersListFilterForm'

const getRoomListParams = () => ({
  action: employeesFetchList,
  stateName: STATE.EMPLOYEES_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

const EmployeesListContainer = props => {
  const list = useFetchList(getRoomListParams())
  const filterActions = useFilterActions({ fields })
  return (
    <EmployeesList
      list={list}
      filterActions={filterActions}
    />
  )
}

export default EmployeesListContainer
