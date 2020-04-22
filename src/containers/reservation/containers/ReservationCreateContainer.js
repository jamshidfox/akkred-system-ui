import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty, path, map } from 'ramda'
import PropTypes from 'prop-types'
import * as STATE from '../../../constants/stateNames'
import * as actionTypes from '../../../constants/actionTypes'
import {
  useCreateModal,
  useCompareEffect,
  useClearStore,
  useModal,
  useClientList
} from '../../../hooks'
import { ReservationCreate, GUEST } from '../components'
import { clientFetchList } from '../../Client/actions'
import { getDataFromState } from '../../../utils/get'
import toSnakeCase from '../../../utils/toSnakeCase'
import * as ROUTES from '../../../constants/routes'
import { reservationCreateAction } from '../actions'
import { mapResponseToFormError } from '../../../utils/form'
import {
  mapServices,
  getClientCreateParams,
  getClientExistingParams
} from './utils'

const EMPTY_ARR = []

const ReservationCreateContainer = props => {
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

  const clientList = useClientList()

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
ReservationCreateContainer.propTypes = {
  history: PropTypes
}
export default ReservationCreateContainer
