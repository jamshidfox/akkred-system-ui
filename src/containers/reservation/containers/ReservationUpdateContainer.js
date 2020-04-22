import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { isEmpty, path, map, prop, pipe, propEq, find } from 'ramda'
import { useParams } from 'react-router-dom'
import * as STATE from '../../../constants/stateNames'
import { SERVICE_FREQ } from '../../../constants/backend'
import * as actionTypes from '../../../constants/actionTypes'
import {
  useCreateModal,
  useCompareEffect,
  useClearStore,
  useModal,
  useFetchItem,
  useClientList
} from '../../../hooks'
import { ReservationCreate, GUEST } from '../components'
import { clientFetchList } from '../../Client/actions'
import toSnakeCase from '../../../utils/toSnakeCase'
import * as ROUTES from '../../../constants/routes'
import {
  reservationUpdateAction,
  placingItemFetch
} from '../actions'
import { mapResponseToFormError } from '../../../utils/form'
import {
  getClientCreateParams,
  getClientExistingParams,
  mapServices
} from './utils'

const EMPTY_ARR = []

const ReservationUpdateContainer = props => {
  useClearStore(actionTypes.CLIENT_LIST)
  const clientList = useClientList()

  const params = useParams()
  const dispatch = useDispatch()
  const [clients, setClients] = useState(EMPTY_ARR)
  const [serviceList, setServiceList] = useState(EMPTY_ARR)
  const [tab, setTab] = useState(GUEST)
  const onClientAppend = (clientId) => {
    setClients([...clients, clientId])
  }

  const onComplete = ({ value }) => {
    pipe(
      prop('clients'),
      map(prop('id')),
      setClients
    )(value)

    pipe(
      prop('clientServices'),
      map(service => ({
        ...service,
        type: find(propEq('id', service.type), SERVICE_FREQ)
      })),
      setServiceList
    )(value)
  }
  const detail = useFetchItem({
    stateName: STATE.PLACING_ITEM,
    action: placingItemFetch,
    onComplete: onComplete
  })

  const onTabChange = (val) => {
    setTab(val)
  }

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
    const data = toSnakeCase({
      clients,
      clientServices,
      ...values,
      reserve_type: 'placement',
      room: path(['room', 'id'], values),
      partner: path(['partner', 'id'], values)

    })
    dispatch(reservationUpdateAction(params.id, data))
      .then(() => props.history.push(ROUTES.PLACING_LIST_URL))
      .catch(mapResponseToFormError)
  }

  const initialValues = {
    enterDatetime: path(['data', 'enterDatetime'], detail),
    parentCategory: path(['data', 'room', 'roomCategory', 'parent'], detail),
    roomCategory: path(['data', 'room', 'roomCategory'], detail),
    leaveDatetime: path(['data', 'leaveDatetime'], detail),
    room: path(['data', 'room'], detail),
    discount: path(['data', 'discount'], detail)
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
      initialValues={initialValues}
      onCreateReservation={onCreateReservation}
    />
  )
}

ReservationUpdateContainer.propTypes = {
  history: PropTypes.object
}
export default ReservationUpdateContainer
