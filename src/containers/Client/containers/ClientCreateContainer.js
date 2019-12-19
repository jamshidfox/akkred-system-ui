import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { ClientCreate, fields } from '../components'
import { clientCreateAction } from '../actions'

const serializer = (val) => {
  const clientDocument = {
    document_type: val.documentType,
    series: val.series,
    number: val.number,
    issued_by: val.issuedBy,
    issued_date: val.issuedDate,
    valid_until: val.validUntil,
  }
  const clientArrival = {
    arrived_from: val.arrivedFrom.id,
    arrival_date: val.arrivalDate,
    checkpoint: val.checkpoint,
    check_in_date: val.checkInDate,
    visit_type: val.visitType,
    visa_type: val.visaType,
    visa_number: val.visaNumber,
    visa_issued_by: val.visaIssuedBy,
    visa_date_from: val.visaDateFrom,
    visa_date_to: val.visaDateTo,
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
  serializer: serializer
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
