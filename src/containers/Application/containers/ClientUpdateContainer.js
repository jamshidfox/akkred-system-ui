import React, { useState } from 'react'
import {
  flatten,
  fromPairs,
  map,
  path,
  pipe,
  prop,
  toPairs,
  union,
  values
} from 'ramda'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import toSnakeCase from '../../../utils/toSnakeCase'

import * as STATE from '../../../constants/stateNames'
import * as ROUTES from '../../../constants/routes'
import {
  useFetchList,
  useUpdate,
  useFetchItem,
  useModal
} from '../../../hooks'
import { getSerializedData, getIdForInitValues } from '../../../utils/get'
import RoomCreate, { fields } from '../components/ClientCreate'
import {
  clientFetchList,
  clientFetchItem,
  clientUpdateAction
} from '../actions'
import { mapResponseToFormError } from '../../../utils/form'

const getClientItemParams = () => ({
  action: clientFetchItem,
  stateName: STATE.APPLICATION_ITEM
})

const serializer = val => {
  return {
    ...getSerializedData(fields, val)
  }
}
const EMPTY_ARR = []

const getInitialValues = data => {
  return {
    client: path(['client', 'id'], data),
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
    typeStandard: prop('typeStandard', data)
  }
}

const getClientUpdateParams = () => ({
  stateName: STATE.APPLICATION_UPDATE,
  action: clientUpdateAction,
  serializer: serializer,
  redirectUrl: ROUTES.APPLICATION_LIST_URL
})
const ClientUpdateContainer = props => {
  const dispatch = useDispatch()
  const serviceModal = useModal({ key: 'serviceModal' })
  const [serviceList, setServiceList] = useState(EMPTY_ARR)
  const { data } = useFetchItem(getClientItemParams())
  const onAddService = service => {
    setServiceList([...serviceList, service])
    serviceModal.onClose()
  }
  const params = useParams()
  const initialValues = getInitialValues(data)

  const onCreateApplication = values => {
    const client = path(['client', 'id'], values)
    const data = toSnakeCase({
      branchs: serviceList,
      ...values,
      client:client
    })
    dispatch(clientUpdateAction(params.id, data))
      .then(() => props.history.push(ROUTES.APPLICATION_LIST_URL))
      .catch(mapResponseToFormError)
  }

  return (
    <RoomCreate
      onSubmit={() => null}
      initialValues={initialValues}
      serviceList={serviceList}
      serviceModal={{ ...serviceModal, onSubmit: onAddService }}
      onCreateApplication={onCreateApplication}
    />
  )
}

export default ClientUpdateContainer
