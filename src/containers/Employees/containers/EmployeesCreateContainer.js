import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { EmployeesCreate, fields } from '../components'
import { employeesCreateAction } from '../actions'

const getRatesCreateParams = () => ({
  stateName: STATE.EMPLOYEES_CREATE,
  action: employeesCreateAction,
  serializer: getSerializedData(fields)
})
const EmployeesCreateContainer = props => {
  const create = useCreate(getRatesCreateParams())
  return (
    <EmployeesCreate
      {...create}
    />
  )
}

export default EmployeesCreateContainer
