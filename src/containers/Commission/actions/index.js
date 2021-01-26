import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const applicationUpdateAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .put(sprintf(API.COMMISSION_UPDATE, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.COMMISSION_UPDATE
    })
  }
}
export const applicationDeleteAction = (id) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .delete(sprintf(API.COMMISSION_DELETE, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.COMMISSION_DELETE
    })
  }
}

export const applicationConfirmAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(sprintf(API.COMMISSION_CONFIRM, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.COMMISSION_CONFIRM
    })
  }
}

export const applicationFetchList = params => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.COMMISSION_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.COMMISSION_LIST
    })
  }
}

export const clientFetchItem = id => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.COMMISSION_ITEM, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.COMMISSION_ITEM
    })
  }
}
