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
  stateName: STATE.CLIENT_ITEM,
})

const serializer = (val) => {
  return {
    ...getSerializedData(fields, val),
  }
}

const getInitialValues = (data) => {
  return ({
    title : prop('title', data),
    documentDate : prop('documentDate', data),
    titleObject : prop('titleObject', data),
    address: prop('address', data),
    fullNameOrgan: prop('fullNameOrgan', data),
    email: prop('email', data),
    mfo: prop('mfo', data),
    site: prop('site', data),
    fax: prop('fax', data),
    oked: prop('oked', data),
    ndsRegId : prop('ndsRegId', data),
    swift : prop('swift', data),
    phoneNumber : prop('phoneNumber', data),
    fullName : prop('fullName', data),
    inn : prop('inn', data),
    legalName : prop('legalName', data),
    paymentAccount : prop('paymentAccount', data),

  })
}

const getClientUpdateParams = () => ({
  stateName: STATE.CLIENT_UPDATE,
  action: clientUpdateAction,
  serializer: serializer,
  redirectUrl: ROUTES.CLIENT_LIST_URL
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
