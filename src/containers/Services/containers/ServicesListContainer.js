import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList } from '../../../hooks'
import { servicesFetchList } from '../actions'
import ServicesList from '../components/ServicesList'

const getRoomListParams = () => ({
  action: servicesFetchList,
  stateName: STATE.SERVICES_PRICE_LIST,
})

const ServicesListContainer = props => {
  const list = useFetchList(getRoomListParams())
  return (
    <ServicesList
      list={list}
    />
  )
}

export default ServicesListContainer
