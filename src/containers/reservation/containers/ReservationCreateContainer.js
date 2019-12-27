import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import { useCreateModal, useCompareEffect } from '../../../hooks'
import { ReservationCreate } from '../components'

import { serializer } from '../../Client/containers/ClientCreateContainer'
import { clientCreateAction, clientFetchList } from '../../Client/actions'

import { getDataFromState } from '../../../utils/get'

const EMPTY_ARR = []

export const getClientCreateParams = (onClientAppend) => ({
  stateName: STATE.CLIENT_CREATE,
  action: clientCreateAction,
  serializer: serializer,
  onSuccess: ({ value }) => onClientAppend(value.id)
})
const ClientListContainer = props => {
  const dispatch = useDispatch()
  const [clients, setClients] = useState(EMPTY_ARR)
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
  return (
    <ReservationCreate
      onSubmit={() => null}
      clientCreateModal={clientCreateModal}
      clientList={clientList}
    />
  )
}

export default ClientListContainer
