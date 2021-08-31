import React from 'react'
import { prop, path } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import { useUpdate, useFetchItem } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import { EmployeesCreate, fields } from '../components'
import { employeesUpdateAction, employeesFetchItem } from '../actions'
import * as ROUTES from '../../../constants/routes'

const getEmployerItemParams = () => ({
  action: employeesFetchItem,
  stateName: STATE.TECHNICAL_EXPERT_ITEM,
})

const getInitialValues = (data) => {
  return ({
    middleName: prop('middleName', data),
    email: prop('email', data),
    genderType: prop('genderType', data),
    mail: prop('mail', data),
    dateOfBirth: prop('dateOfBirth', data),
    job: prop('job', data),
    codes: prop('codes', data),
    conflictOfInterests: prop('conflictOfInterests', data),
    phoneNumber: prop('phoneNumber', data),
    lastName: prop('lastName', data),
    firstName: prop('firstName', data),
    typeStandard: prop('typeStandard', data),
  })
}

const getEmployeesUpdateParams = () => ({
  stateName: STATE.TECHNICAL_EXPERT_UPDATE,
  action: employeesUpdateAction,
  serializer: getSerializedData(fields),
  redirectUrl: ROUTES.TECHNICAL_EXPERT_LIST_URL
})

const TechnicalExpertsUpdateContainer = props => {
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

export default TechnicalExpertsUpdateContainer
