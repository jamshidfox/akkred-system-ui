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
      .put(sprintf(API.EXPERT_PLACE_UPDATE, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.EXPERT_PLACE_UPDATE
    })
  }
}
export const applicationDeleteAction = (id) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .delete(sprintf(API.EXPERT_PLACE_DELETE, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.EXPERT_PLACE_DELETE
    })
  }
}

export const applicationConfirmAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(sprintf(API.EXPERT_PLACE_CONFIRM, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.EXPERT_PLACE_CONFIRM
    })
  }
}

export const applicationFetchList = params => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.EXPERT_PLACE_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.EXPERT_PLACE_LIST
    })
  }
}

export const clientFetchItem = id => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.EXPERT_PLACE_ITEM, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.EXPERT_PLACE_ITEM
    })
  }
}
