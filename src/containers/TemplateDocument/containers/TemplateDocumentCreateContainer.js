import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { EmployeesCreate, fields } from '../components'
import { templateDocumentCreateAction } from '../actions'
import * as ROUTES from '../../../constants/routes'

const getRatesCreateParams = () => ({
  stateName: STATE.EMPLOYEES_CREATE,
  action: templateDocumentCreateAction,
  serializer: getSerializedData(fields),
  redirectUrl: ROUTES.EMPLOYEES_LIST_URL
})
const TemplateDocumentCreateContainer = props => {
  const create = useCreate(getRatesCreateParams())
  return (
    <EmployeesCreate
      {...create}
    />
  )
}

export default TemplateDocumentCreateContainer
