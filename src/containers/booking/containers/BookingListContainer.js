import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList } from '../../../hooks'
import { bookingListAction } from '../actions'
import BookingList from '../components/BookingList'

const getListParams = () => ({
  stateName: STATE.BOOKING_LIST,
  action: bookingListAction
})

export default props => {
  const list = useFetchList(getListParams())
  return (
    <BookingList
      list={list}
    />
  )
}
