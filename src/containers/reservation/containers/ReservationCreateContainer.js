import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty, path, map, prop } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import * as actionTypes from '../../../constants/actionTypes'
import { useCreateModal, useCompareEffect, useClearStore, useModal } from '../../../hooks'
import { ReservationCreate, GUEST } from '../components'
import { serializer } from '../../Client/containers/ClientCreateContainer'
import { clientCreateAction, clientFetchList, clientExistingAction } from '../../Client/actions'
import { getDataFromState } from '../../../utils/get'
import toSnakeCase from '../../../utils/toSnakeCase'
import * as ROUTES from '../../../constants/routes'
import { reservationCreateAction } from '../actions'
import {mapResponseToFormError} from '../../../utils/form'

const EMPTY_ARR = []
const clientExistingSerializer = (val) => {
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
const mapServices = (item) => toSnakeCase({
  servicedClientsCount: prop('servicedClientsCount', item),
  serviceType: path(['serviceType', 'id'], item),
  type: path(['type', 'id'], item)
})
const ClientListContainer = props => {
  useClearStore(actionTypes.CLIENT_LIST)
  const dispatch = useDispatch()
  const [clients, setClients] = useState(EMPTY_ARR)
  const [serviceList, setServiceList] = useState(EMPTY_ARR)
  const [tab, setTab] = useState(GUEST)

  const onTabChange = (val) => {
    setTab(val)
  }
  const onClientAppend = (clientId) => {
    setClients([...clients, clientId])
  }

  const clientList = useSelector(getDataFromState(STATE.CLIENT_LIST))
  useCompareEffect(() => {
    if (!isEmpty(clients)) {
      const params = {
        clients: clients.join('-')
      }
      dispatch(clientFetchList(params))
    }
  }, [clients])
  const clientCreateModal = useCreateModal(getClientCreateParams(onClientAppend))
  const clientExistingModal = useCreateModal(getClientExistingParams(onClientAppend))
  const serviceModal = useModal({ key: 'serviceModal' })
  const onAddService = (service) => {
    setServiceList([...serviceList, service])
    serviceModal.onClose()
  }

  const onCreateReservation = (values) => {
    const clientServices = map(mapServices, serviceList)
    const fromTime = prop('fromTime', values)
    const toTime = prop('toTime', values)
    const enterDatetime = prop('enterDatetime', values)
    const leaveDatetime = prop('leaveDatetime', values)
    const data = toSnakeCase({
      clients,
      clientServices,
      ...values,
      reserve_type: 'placement',
      room: path(['room', 'id'], values),
      enterDatetime: enterDatetime + 'T' + fromTime,
      leaveDatetime: leaveDatetime + 'T' + toTime
    })
    dispatch(reservationCreateAction(data))
      .then(() => props.history.push(ROUTES.PLACING_LIST_URL))
      .catch(mapResponseToFormError)
  }
  return (
    <ReservationCreate
      onSubmit={() => null}
      clientCreateModal={clientCreateModal}
      clientExistingModal={clientExistingModal}
      serviceModal={{ ...serviceModal, onSubmit: onAddService }}
      serviceList={serviceList}
      clientList={clientList}
      tabData={{ tab, onTabChange }}
      onCreateReservation={onCreateReservation}
    />
  )
}

export default ClientListContainer
