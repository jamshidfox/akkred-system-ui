import { path, prop } from 'ramda'
import toSnakeCase from '../../../utils/toSnakeCase'
import * as STATE from '../../../constants/stateNames'
import { clientCreateAction, clientExistingAction } from '../../Client/actions'
import { serializer } from '../../Client/containers/ClientCreateContainer'

export const clientExistingSerializer = (val) => {
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
    id: path(['client', 'id'], val),
    client_document: clientDocument,
    client_arrival: clientArrival,
  }
}

export const mapServices = (item) => toSnakeCase({
  servicedClientsCount: prop('servicedClientsCount', item),
  serviceType: path(['serviceType', 'id'], item),
  type: path(['type', 'id'], item)
})

export const getClientCreateParams = (onClientAppend) => ({
  stateName: STATE.CLIENT_CREATE,
  action: clientCreateAction,
  serializer: serializer,
  onSuccess: ({ value }) => onClientAppend(value.id)
})

export const getClientExistingParams = (onClientAppend) => ({
  stateName: STATE.CLIENT_CREATE,
  action: clientExistingAction,
  serializer: clientExistingSerializer,
  key: 'existingModal',
  onSuccess: ({ value }) => onClientAppend(value.id)

})
