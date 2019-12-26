import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList } from '../../../hooks'
import { ratesFetchList } from '../actions'
import RatesList from '../components/RatesList'

const getRoomListParams = () => ({
  action: ratesFetchList,
  stateName: STATE.RATES_LIST,
})

const RatesListContainer = props => {
  const list = useFetchList(getRoomListParams())
  return (
    <RatesList
      list={list}
    />
  )
}

export default RatesListContainer
