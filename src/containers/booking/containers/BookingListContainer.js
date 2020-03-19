import React from 'react'
import { path } from 'ramda'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal, useCreate } from '../../../hooks'
import {
  bookingFetchList,
  bookingCreateAction,
  bookingUpdateAction,
  roomFetchList
} from '../actions'
import BookingList from '../components/BookingList'
import { getParamFromHistory, getSerializedData } from '../../../utils/get'
import { replaceParamsRoute } from '../../../utils/route'
import toSnakeCase from '../../../utils/toSnakeCase'
import { DEFAULT_PICK_PARAMS } from '~/utils/isEquals'

const getListParams = () => ({
  stateName: STATE.ROOM_LIST,
  action: roomFetchList,
  pickParams: [...DEFAULT_PICK_PARAMS, 'roomCategory']

})

const getBookingListParams = () => ({
  stateName: STATE.BOOKING_LIST,
  action: bookingFetchList,
  pickParams: [...DEFAULT_PICK_PARAMS, 'roomCategory']
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
const updateSerializer = values => {
  const client = values.client
  return toSnakeCase({
    ...values,
    ...getSerializedData(['paymentType', 'bookingType', 'room'], values),
    client: toSnakeCase({ ...getSerializedData(['name', 'fatherName', 'surname', 'id'], client) })

  })
}

export default props => {
  const list = useFetchList(getListParams())
  const bookingList = useFetchList(getBookingListParams())
  const dispatch = useDispatch()
  const history = useHistory()

  const updateBookId = getParamFromHistory('bookId', history)

  const onBookSuccess = () => {
    return dispatch(bookingFetchList())
  }
  const getCreateParams = () => ({
    stateName: STATE.RESERVATION_CREATE,
    action: bookingCreateAction,
    serializer: createSerializer,
    onSuccess: onBookSuccess
  })

  const createModal = useCreateModal(getCreateParams())

  const onClose = () => {
    createModal.onClose()
    replaceParamsRoute({ bookId: null }, history)
  }
  const updateAction = useCreate({
    action: bookingUpdateAction,
    stateName: STATE.BOOKING_CREATE,
    serializer: (values) => [updateBookId, updateSerializer(values)],
    onSuccess: () => {
      onBookSuccess()
      onClose()
    }
  })

  return (
    <BookingList
      list={list}
      bookingList={bookingList}
      createModal={{ ...createModal, onClose }}
      updateAction={{ ...updateAction, id: updateBookId }}
    />
  )
}
