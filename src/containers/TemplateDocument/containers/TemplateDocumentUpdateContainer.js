import React from 'react'
import { prop, path } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import { useUpdate, useFetchItem } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import { EmployeesCreate, fields } from '../components'
import { templateDocumentUpdateAction, templateDocumentFetchItem } from '../actions'
import * as ROUTES from '../../../constants/routes'

const getEmployerItemParams = () => ({
  action: templateDocumentFetchItem,
  stateName: STATE.TEMPLATE_DOCUMENT_ITEM,
})

const getInitialValues = (data) => {
  return ({
    name: prop('name', data),
    file: prop('file', data),
    type: prop('type', data),
    // role: path(['role', 'id'], data),
  })
}

const getEmployeesUpdateParams = () => ({
  stateName: STATE.TEMPLATE_DOCUMENT_UPDATE,
  action: templateDocumentUpdateAction,
  serializer: getSerializedData(fields),
  redirectUrl: ROUTES.TEMPLATE_DOCUMENT_LIST_URL
})

const TemplateDocumentUpdateContainer = props => {
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

export default TemplateDocumentUpdateContainer
