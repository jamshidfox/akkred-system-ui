import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const hotelCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.HOTEL_CREATE, {
        ...data
      })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.HOTEL_CREATE
    })
  }
}

export const hotelUpdateAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .put(sprintf(API.HOTEL_UPDATE, id), {
        ...data
      })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.HOTEL_UPDATE
    })
  }
}

export const hotelFetchList = data => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.HOTEL_LIST)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.HOTEL_LIST
    })
  }
}
