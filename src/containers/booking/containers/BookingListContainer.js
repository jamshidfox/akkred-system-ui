import React from 'react'
import { path } from 'ramda'
import { useDispatch } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal } from '../../../hooks'
import { bookingFetchList, bookingCreateAction } from '../actions'
import { roomFetchList } from '../../Rooms/actions'
import BookingList from '../components/BookingList'
import { getSerializedData } from '../../../utils/get'
import toSnakeCase from '../../../utils/toSnakeCase'

const getListParams = () => ({
  stateName: STATE.ROOM_LIST,
  action: roomFetchList
})

const getBookingListParams = () => ({
  stateName: STATE.BOOKING_LIST,
  action: bookingFetchList
})

const createSerializer = values => {
  const client = values.client
  const citizenship = path(['citizenship', 'id'], values)
  return toSnakeCase({
    ...values,
    ...getSerializedData(['paymentType', 'bookingType', 'room'], values),
    client: toSnakeCase({ ...client, citizenship })
  })
}

export default props => {
  const list = useFetchList(getListParams())
  const bookingList = useFetchList(getBookingListParams())
  const dispatch = useDispatch()

  const onBookSuccess = () => {
    dispatch(bookingFetchList())
  }
  const getCreateParams = () => ({
    stateName: STATE.RESERVATION_CREATE,
    action: bookingCreateAction,
    serializer: createSerializer,
    onSuccess: onBookSuccess
  })

  const createModal = useCreateModal(getCreateParams())

  return (
    <BookingList
      list={list}
      bookingList={bookingList}
      createModal={createModal}
    />
  )
}
