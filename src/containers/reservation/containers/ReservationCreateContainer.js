import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useCreate, useCreateModal } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { ReservationCreate, fields } from '../components'
import { reservationCreateAction } from '../actions'
import { getRoomCreateParams, serializer } from '../../Client/containers/ClientCreateContainer'

const ClientListContainer = props => {

  const clientCreateModal = useCreateModal(getRoomCreateParams())
  return (
    <ReservationCreate
      onSubmit={() => null}
      clientCreateModal={clientCreateModal}
    />
  )
}

export default ClientListContainer

