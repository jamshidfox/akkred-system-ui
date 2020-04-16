import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions } from '../../../hooks'
import { servicesFetchList } from '../actions'
import ServicesList from '../components/ServicesList'
import { fields } from '../components/ServicesListFilterForm'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'

const getRoomListParams = () => ({
  action: servicesFetchList,
  stateName: STATE.SERVICES_PRICE_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

const ServicesListContainer = props => {
  const list = useFetchList(getRoomListParams())
  const filterActions = useFilterActions({ fields })
  return (
    <ServicesList
      list={list}
      filterActions={filterActions}
    />
  )
}

export default ServicesListContainer
