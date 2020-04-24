import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const reservationCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.RESERVATION_CREATE, data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.RESERVATION_CREATE
    })
  }
}

export const reservationUpdateAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .put(sprintf(API.PLACING_UPDATE, Number(id)), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.PLACING_UPDATE
    })
  }
}

export const placingItemFetch = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.PLACING_ITEM, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.PLACING_ITEM
    })
  }
}
export const placingFetchList = params => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.PLACING_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.PLACING_LIST
    })
  }
}

export const placingDeleteAction = id => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .delete(sprintf(API.PLACING_DELETE, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)
    return dispatch({
      payload,
      type: actionTypes.PLACING_DELETE
    })
  }
}
