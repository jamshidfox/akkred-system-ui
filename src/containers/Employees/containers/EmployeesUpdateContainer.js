import React from 'react'
import { prop } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import { useUpdate, useFetchItem } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import { EmployeesCreate, fields } from '../components'
import { employeesUpdateAction, employeesFetchItem } from '../actions'

const getEmployerItemParams = () => ({
  action: employeesFetchItem,
  stateName: STATE.EMPLOYEES_ITEM,
})

const getInitialValues = (data) => {
  return ({
    username: prop('username', data),
    fullName: prop('fullName', data),
    mail: prop('mail', data),
    phoneNumber: prop('phoneNumber', data),
    lastName: prop('lastName', data),
    firstName: prop('firstName', data),
    middleName: prop('middleName', data),
  })
}

const getEmployeesUpdateParams = () => ({
  stateName: STATE.EMPLOYEES_UPDATE,
  action: employeesUpdateAction,
  serializer: getSerializedData(fields),
})

const EmployeesUpdateContainer = props => {
  const { data } = useFetchItem(getEmployerItemParams())
  const initialValues = getInitialValues(data)
  const updateData = useUpdate(getEmployeesUpdateParams())
  return (
    <EmployeesCreate
      {...updateData}
      initialValues={initialValues}
    />
  )
}

export default EmployeesUpdateContainer
