import React from 'react'
import { ReservationList } from '../components'
import { placingFetchList } from '../actions'
import { useFetchList } from '../../../hooks'
import * as STATE from '../../../constants/stateNames'

const ReservationListContainer = props => {
  const data = useFetchList({
    action: placingFetchList,
    stateName: STATE.PLACING_LIST
  })

  return (
    <ReservationList {...data} />
  )
}

export default ReservationListContainer
