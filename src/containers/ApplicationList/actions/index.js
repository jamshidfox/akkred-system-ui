import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const applicationFetchMyList = params => {
  params = { ...params, status_stage: '0' }
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.APPLICATION_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_LIST
    })
  }
}

export const applicationFetchAllList = params => {
  params = { ...params, all: 'true', status_stage: '0' }
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.APPLICATION_LIST_ALL, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_LIST
    })
  }
}

export const applicationExpertiseMyFetchList = params => {
  params = { ...params, status_stage: '1' }
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.APPLICATION_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_LIST
    })
  }
}

export const applicationExpertiseAllFetchList = params => {
  params = { ...params, all: 'true', status_stage: '1' }
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.APPLICATION_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_LIST
    })
  }
}

export const applicationAuditMyFetchList = params => {
  params = { ...params, status_stage: '2' }
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.APPLICATION_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_LIST
    })
  }
}

export const applicationAuditAllFetchList = params => {
  params = { ...params, all: 'true', status_stage: '2' }
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.APPLICATION_LIST_ALL, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_LIST
    })
  }
}

export const applicationCommissionMyFetchList = params => {
  params = { ...params, status_stage: '3'
  }
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.APPLICATION_LIST, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_LIST
    })
  }
}

export const applicationCommissionAllFetchList = params => {
  params = { ...params, all: 'true', status_stage: '3' }
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.APPLICATION_LIST_ALL, { params })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_LIST_ALL
    })
  }
}
