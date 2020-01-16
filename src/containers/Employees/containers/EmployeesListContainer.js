import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList } from '../../../hooks'
import { employeesFetchList } from '../actions'
import EmployeesList from '../components/EmployeesList'

const getRoomListParams = () => ({
  action: employeesFetchList,
  stateName: STATE.EMPLOYEES_LIST,
})

const EmployeesListContainer = props => {
  const list = useFetchList(getRoomListParams())
  return (
    <EmployeesList
      list={list}
    />
  )
}

export default EmployeesListContainer
