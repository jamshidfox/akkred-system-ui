import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const roomFetchList = data => {
  const params = {
    ...data,
    page_size: 1000
  }
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.ROOM_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.ROOM_LIST
    })
  }
}

export const bookingFetchList = data => {
  const params = {
    ...data,
    page_size: 1000
  }

  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.BOOKING_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.BOOKING_LIST
    })
  }
}

export const bookingCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.BOOKING_CREATE, data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.BOOKING_CREATE
    })
  }
}

export const bookingUpdateAction = ([id, data]) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .put(sprintf(API.BOOKING_UPDATE, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.BOOKING_UPDATE
    })
  }
}
