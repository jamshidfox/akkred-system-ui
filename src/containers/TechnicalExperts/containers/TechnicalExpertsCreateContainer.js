import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { EmployeesCreate, fields } from '../components'
import { employeesCreateAction } from '../actions'
import * as ROUTES from '../../../constants/routes'

const getRatesCreateParams = () => ({
  stateName: STATE.TECHNICAL_EXPERT_CREATE,
  action: employeesCreateAction,
  serializer: getSerializedData(fields),
  redirectUrl: ROUTES.TECHNICAL_EXPERT_LIST_URL
})
const TechnicalExpertsCreateContainer = props => {
  const create = useCreate(getRatesCreateParams())
  return (
    <EmployeesCreate
      {...create}
    />
  )
}

export default TechnicalExpertsCreateContainer
