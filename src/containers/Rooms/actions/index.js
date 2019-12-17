import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const roomCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.ROOM_CREATE_BULK, data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.ROOM_CREATE
    })
  }
}

export const roomSingleCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.ROOM_CREATE, data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.ROOM_CREATE
    })
  }
}

export const roomUpdateAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .put(sprintf(API.ROOM_UPDATE, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.ROOM_UPDATE
    })
  }
}

export const roomFetchList = data => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.ROOM_LIST)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.ROOM_LIST
    })
  }
}

export const roomFetchItem = id => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.ROOM_ITEM, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.ROOM_ITEM
    })
  }
}
