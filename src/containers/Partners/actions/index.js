import { sprintf } from 'sprintf-js'
import { prop, path } from 'ramda'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const partnerFetchList = data => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.PARTNER_LIST)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.PARTNER_LIST
    })
  }
}

export const partnerCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.PARTNER_CREATE, data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.PARTNER_CREATE
    })
  }
}

export const partnerUpdateAction = data => {
  const params = {
    type: prop('type', data),
    title: prop('title', data),
    legal_name: prop('legal_name', data),
    phone_number: prop('phone_number', data),
    email: prop('email', data),
    fax: prop('fax', data),
    contract: prop('contract', data),
    country: path(['country', 'id'], data),
  }
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .put(sprintf(API.PARTNER_UPDATE, data.id), params)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)
    return dispatch({
      payload,
      type: actionTypes.PARTNER_UPDATE
    })
  }
}

export const partnerFetchItem = id => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.PARTNER_ITEM, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.PARTNER_ITEM
    })
  }
}
