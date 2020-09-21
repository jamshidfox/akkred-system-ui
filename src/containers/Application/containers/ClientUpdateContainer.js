import React from 'react'
import { flatten, fromPairs, map, path, pipe, prop, toPairs, union, values } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import * as ROUTES from '../../../constants/routes'
import { useFetchList, useUpdate, useFetchItem, useModal } from '../../../hooks'
import { getSerializedData, getIdForInitValues } from '../../../utils/get'
import RoomCreate, { fields } from '../components/ClientCreate'
import { clientFetchList, clientFetchItem, clientUpdateAction } from '../actions'

const getClientItemParams = () => ({
  action: clientFetchItem,
  stateName: STATE.APPLICATION_ITEM,
})

const serializer = (val) => {
  return {
    ...getSerializedData(fields, val)
  }
}

const getInitialValues = (data) => {
  return ({
    address: prop('address', data),
    documentDate: prop('documentDate', data),
    email: prop('email', data),
    fax: prop('fax', data),
    fullName: prop('fullName', data),
    fullNameOrgan: prop('fullNameOrgan', data),
    hasPartAnotherOrgan: prop('hasPartAnotherOrgan', data),
    inn: prop('inn', data),
    internalAudit: prop('internalAudit', data),
    legalName: prop('legalName', data),
    managementAnalysis: prop('managementAnalysis', data),
    managementSystem: prop('managementSystem', data),
    mfo: prop('mfo', data),
    ndsRegId: prop('ndsRegId', data),
    oked: prop('oked', data),
    paymentAccount: prop('paymentAccount', data),
    phoneNumber: prop('phoneNumber', data),
    proficiencyTestingProvider: prop('proficiencyTestingProvider', data),
    site: prop('site', data),
    swift: prop('swift', data),
    title: prop('title', data),
    titleObject: prop('titleObject', data),
    typeApplication: prop('typeApplication', data),
    typeStandard: prop('typeStandard', data),

  })
}

const getClientUpdateParams = () => ({
  stateName: STATE.APPLICATION_UPDATE,
  action: clientUpdateAction,
  serializer: serializer,
  redirectUrl: ROUTES.APPLICATION_LIST_URL
})
const ClientUpdateContainer = props => {
  const { data } = useFetchItem(getClientItemParams())

  const initialValues = getInitialValues(data)
  const updateData = useUpdate(getClientUpdateParams())
  return (
    <RoomCreate
      {...updateData}
      initialValues={initialValues}
    />
  )
}

export default ClientUpdateContainer
