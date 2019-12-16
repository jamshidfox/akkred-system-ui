import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const reservationCreateAction = data => {
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
