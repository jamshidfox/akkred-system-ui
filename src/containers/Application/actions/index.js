import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const applicationCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.APPLICATION_CREATE, data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_CREATE
    })
  }
}

export const clientExistingAction = ({ id, ...data }) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(sprintf(API.CLIENT_ITEM_DOCS, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.CLIENT_CREATE
    })
  }
}

export const applicationUpdateAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .put(sprintf(API.APPLICATION_UPDATE, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_UPDATE
    })
  }
}

export const applicationConfirmRejectAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(sprintf(API.APPLICATION_REJECT_EXPERT, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_REJECT_EXPERT
    })
  }
}

export const applicationDeleteAction = (id) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .delete(sprintf(API.APPLICATION_DELETE, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_DELETE
    })
  }
}

export const applicationConfirmAction = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(sprintf(API.APPLICATION_CONFIRM, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_CONFIRM
    })
  }
}

export const applicationRejectAction = (id) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(sprintf(API.APPLICATION_REJECT, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_REJECT
    })
  }
}

export const applicationFetchList = params => {
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

export const applicationExpertiseFetchList = params => {
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

export const applicationAuditFetchList = params => {
  params = {
    status_stage: '2'
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

export const applicationCommissionsFetchList = params => {
  params = {
    status_stage: '3'
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

export const applicationFetchListAll = params => {
  params = { ...params, all: 'true', status_stage: '0' }
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

export const applicationExpertiseFetchListAll = params => {
  params = { ...params, all: 'true', status_stage: '1' }
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

export const applicationAuditFetchListAll = params => {
  params = { ...params, all: 'true', status_stage: '2' }
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
export const applicationCommissionFetchListAll = params => {
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
export const clientFetchItem = id => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.APPLICATION_ITEM, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.APPLICATION_ITEM
    })
  }
}
