import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const transactionFetchList = params => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.TRANSACTION_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.TRANSACTION_LIST
    })
  }
}

export const transactionCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.TRANSACTION_CREATE, data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.TRANSACTION_CREATE
    })
  }
}
