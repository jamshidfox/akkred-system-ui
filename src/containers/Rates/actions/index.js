import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const ratesCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.RATES_CREATE, data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.RATES_CREATE
    })
  }
}

export const ratesUpdateAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .put(sprintf(API.RATES_UPDATE, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.RATES_UPDATE
    })
  }
}

export const ratesFetchList = data => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.RATES_LIST)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.RATES_LIST
    })
  }
}

export const ratesFetchItem = id => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.RATES_ITEM, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.RATES_ITEM
    })
  }
}
