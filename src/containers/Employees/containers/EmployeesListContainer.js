import React from 'react'
import { compose } from 'redux'
import { connect, useDispatch } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import { employeesFetchList, employeesDeleteAction } from '../actions'
import EmployeesList from '../components/EmployeesList'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import { fields } from '../../Employees/components/EmployeesListFilterForm'
import ApplicationList from "../../Application/components/ApplicationList";
// Enhance
const enhance = compose(connect())
const getRoomListParams = () => ({
  action: employeesFetchList,
  stateName: STATE.EMPLOYEES_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

// const getBuildingDeleteParams = (onSuccess) => ({
//   stateName: STATE.BUILDING_DELETE,
//   action: employeesDeleteAction,
//   onSuccess
// })

const EmployeesListContainer = props => {
  const dispatch = useDispatch()
  const list = useFetchList(getRoomListParams())
  const filterActions = useFilterActions({ fields })
  const onSuccess = () => dispatch(employeesFetchList())
  // const deleteModal = useDelete(getBuildingDeleteParams(onSuccess))
  return (
    <EmployeesList
      list={list}
      filterActions={filterActions}
      {...props}
      // deleteModal={deleteModal}
    />
  )
}

export default enhance(EmployeesListContainer)
