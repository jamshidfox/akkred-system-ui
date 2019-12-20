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
  console.warn(val)
  const clientDocument = {
    id: prop('docId', val),
    document_type: path(['clientDocument', 'documentType'], val),
    series: path(['clientDocument', 'series'], val),
    number: path(['clientDocument', 'number'], val),
    issued_by: path(['clientDocument', 'issuedBy'], val),
    issued_date: path(['clientDocument', 'issuedDate'], val),
    valid_until: path(['clientDocument', 'validUntil'], val),
  }
  const clientArrival = {
    id: prop('arrId', val),
    arrived_from: path(['clientArrival', 'arrivedFrom', 'id'], val),
    arrival_date: path(['clientArrival', 'arrivalDate'], val),
    checkpoint: path(['clientArrival', 'checkpoint'], val),
    check_in_date: path(['clientArrival', 'checkInDate'], val),
    visit_type: path(['clientArrival', 'visitType'], val),
    visa_type: path(['clientArrival', 'visaType'], val),
    visa_number: path(['clientArrival', 'visaNumber'], val),
    visa_issued_by: path(['clientArrival', 'visaIssuedBy'], val),
    visa_date_from: path(['clientArrival', 'visaDateFrom'], val),
    visa_date_to: path(['clientArrival', 'visaDateTo'], val),
  }
  return {
    ...getSerializedData(fields, val),
    client_document: clientDocument,
    client_arrival: clientArrival,
  }
}

const getInitialValues = (data) => {
  const clientDocumentS = prop('clientDocument', data)
  const clientArrivalS = prop('clientArrival', data)
  const docId = prop('id', clientDocumentS)
  const arrId = prop('id', clientArrivalS)

  const clientDocument = {
    documentType: prop('documentType', clientDocumentS),
    series: prop('series', clientDocumentS),
    number: prop('number', clientDocumentS),
    issuedBy: prop('issuedBy', clientDocumentS),
    issuedDate: prop('issuedDate', clientDocumentS),
    validUntil: prop('validUntil', clientDocumentS),
  }

  const clientArrival = {
    arrived_from: path(['arrivedFrom', 'id'], clientArrivalS),
    arrivalDate: prop('arrivalDate', clientArrivalS),
    checkpoint: prop('checkpoint', clientArrivalS),
    checkInDate: prop('checkInDate', clientArrivalS),
    visitType: prop('visitType', clientArrivalS),
    visaType: prop('visaType', clientArrivalS),
    visaNumber: prop('visaNumber', clientArrivalS),
    visaIssuedBy: prop('visaIssuedBy', clientArrivalS),
    visaDateFrom: prop('visaDateFrom', clientArrivalS),
    visaDateTo: prop('visaDateTo', clientArrivalS),
  }

  return ({
    surname: prop('surname', data),
    name: prop('name', data),
    fatherName: prop('fatherName', data),
    fromCountry: path(['fromCountry', 'id'], data),
    birthDate: prop('birthDate', data),
    gender: prop('gender', data),
    citizenship: path(['citizenship', 'id'], data),
    phoneNumber: prop('phoneNumber', data),
    email: prop('email', data),
    clientType: prop('clientType', data),
    ageType: prop('ageType', data),

    docId: docId,
    arrId: arrId,
    clientDocument :clientDocument,
    clientArrival:clientArrival,

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
