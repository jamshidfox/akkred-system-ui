import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { ClientCreate, fields } from '../components'
import { clientCreateAction } from '../actions'

const serializer = (val) => {
  const clientDocument = {
    document_type: val.document_type,
    series: val.series,
    number: val.number,
    issuedBy: val.issuedBy,
    issuedDate: val.issuedDate,
    validUntil: val.validUntil,
  }
  const clientArrival = {
    arrivedFrom: val.arrivedFrom,
    arrivalDate: val.arrivalDate,
    checkpoint: val.checkpoint,
    checkInDate: val.checkInDate,
    visitType: val.visitType,
    visaType: val.visaType,
    visaNumber: val.visaNumber,
    visaIssuedBy: val.visaIssuedBy,
    visaDateFrom: val.visaDateFrom,
    visaDateTo: val.visaDateTo,
  }
  return {
    ...getSerializedData(fields, val),
    clientDocument: clientDocument,
    clientArrival: clientArrival,
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
