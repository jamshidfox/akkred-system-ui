import React from 'react'
import { compose } from 'redux'
import { connect, useDispatch } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import { employeesFetchList, employeesDeleteAction } from '../actions'
import TechnicalExpertsList from '../components/TechnicalExpertsList'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import { fields } from '../../Employees/components/EmployeesListFilterForm'
// Enhance
const enhance = compose(connect())
const getRoomListParams = () => ({
  action: employeesFetchList,
  stateName: STATE.TECHNICAL_EXPERT_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

const getBuildingDeleteParams = (onSuccess) => ({
  stateName: STATE.TECHNICAL_EXPERT_DELETE,
  action: employeesDeleteAction,
  onSuccess
})

const TechnicalExpertsListContainer = props => {
  const dispatch = useDispatch()
  const list = useFetchList(getRoomListParams())
  const filterActions = useFilterActions({ fields })
  const onSuccess = () => dispatch(employeesFetchList())
  const deleteModal = useDelete(getBuildingDeleteParams(onSuccess))
  return (
    <TechnicalExpertsList
      list={list}
      filterActions={filterActions}
      {...props}
      deleteModal={deleteModal}
    />
  )
}

export default enhance(TechnicalExpertsListContainer)
