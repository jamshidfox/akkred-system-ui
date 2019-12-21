import React from 'react'
import { prop, path } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { ClientCreate, fields } from '../components'
import { clientCreateAction } from '../actions'
import * as ROUTES from '../../../constants/routes'

const serializer = (val) => {
  const clientDocument = {
    document_type: path(['clientDocument', 'documentType'], val),
    series: path(['clientDocument', 'series'], val),
    number: path(['clientDocument', 'number'], val),
    issued_by: path(['clientDocument', 'issuedBy'], val),
    issued_date: path(['clientDocument', 'issuedDate'], val),
    valid_until: path(['clientDocument', 'validUntil'], val),
  }
  const clientArrival = {
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

const getRoomCreateParams = () => ({
  stateName: STATE.CLIENT_CREATE,
  action: clientCreateAction,
  serializer: serializer,
  redirectUrl: ROUTES.CLIENT_LIST_URL
})
const ClientCreateContainer = props => {
  const create = useCreate(getRoomCreateParams())
  return (
    <ClientCreate
      {...create}
    />
  )
}

export default ClientCreateContainer
