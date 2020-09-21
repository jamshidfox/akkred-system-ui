import React from 'react'
import { prop, path } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { ClientCreate, fields } from '../components'
import { clientCreateAction } from '../actions'
import * as ROUTES from '../../../constants/routes'

export const serializer = (val) => {
  return {
    ...getSerializedData(fields, val)
  }
}

export const getRoomCreateParams = () => ({
  stateName: STATE.APPLICATION_CREATE,
  action: clientCreateAction,
  serializer: serializer,
  redirectUrl: ROUTES.APPLICATION_LIST_URL
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
