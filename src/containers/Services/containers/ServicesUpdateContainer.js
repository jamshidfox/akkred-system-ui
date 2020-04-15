import React from 'react'
import { path, prop } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import { useCreate, useFetchItem } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { ServicesCreate, fields } from '../components'
import { serviceCreateAction, serviceFetchItem } from '../actions'

const getRatesCreateParams = () => ({
  stateName: STATE.SERVICES_PRICE_CREATE,
  action: serviceCreateAction,
  serializer: getSerializedData(fields)
})

const getServiceItemParams = () => ({
  action: serviceFetchItem,
  stateName: STATE.SERVICES_PRICE_ITEM,
})
const getInitialValues = (data) => {
  return ({
    // type: path(['service', 'type', 'id'], data),
    service: path(['service', 'id'], data),
    price: prop('price', data),
    servicePayment: prop('servicePayment', data),
    roomCategories: prop('roomCategories', data),
  })
}

const ServicesUpdateContainer = props => {
  const create = useCreate(getRatesCreateParams())
  const { data } = useFetchItem(getServiceItemParams())
  const initialValues = getInitialValues(data)
  return (
    <ServicesCreate
      initialValues={initialValues}
      {...create}
    />
  )
}

export default ServicesUpdateContainer
