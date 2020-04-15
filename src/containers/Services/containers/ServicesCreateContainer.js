import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { ServicesCreate, fields } from '../components'
import { serviceCreateAction } from '../actions'

const getRatesCreateParams = () => ({
  stateName: STATE.SERVICES_PRICE_CREATE,
  action: serviceCreateAction,
  serializer: getSerializedData(fields)
})
const ServicesCreateContainer = props => {
  const create = useCreate(getRatesCreateParams())
  return (
    <ServicesCreate
      {...create}
    />
  )
}

export default ServicesCreateContainer
