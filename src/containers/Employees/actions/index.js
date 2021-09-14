import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const employeesCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.EMPLOYEES_CREATE, data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.EMPLOYEES_CREATE
    })
  }
}

export const employeesUpdateAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .put(sprintf(API.EMPLOYEES_UPDATE, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.EMPLOYEES_UPDATE
    })
  }
}

export const employeesDeleteAction = id => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .delete(sprintf(API.EMPLOYEES_DELETE, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)
    return dispatch({
      payload,
      type: actionTypes.EMPLOYEES_DELETE
    })
  }
}

export const employeesFetchList = params => {
  params = { ...params, employee: '0' }
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.EMPLOYEES_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.EMPLOYEES_LIST
    })
  }
}

export const employeesFetchItem = id => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.EMPLOYEES_ITEM, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.EMPLOYEES_ITEM
    })
  }
}
