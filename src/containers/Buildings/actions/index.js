import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const buildingCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.BUILDING_CREATE, data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)
    return dispatch({
      payload,
      type: actionTypes.BUILDING_CREATE
    })
  }
}

export const buildingDeleteAction = id => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .delete(sprintf(API.BUILDING_DELETE, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)
    return dispatch({
      payload,
      type: actionTypes.BUILDING_DELETE
    })
  }
}

export const buildingsFetchList = id => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.BUILDING_LIST, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)
    return dispatch({
      payload,
      type: actionTypes.BUILDING_LIST
    })
  }
}

export const buildingsFetchDetail = id => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.BUILDING_DETAIL, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)
    return dispatch({
      payload,
      type: actionTypes.BUILDING_DETAIL
    })
  }
}
export const roomFetchList = () => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.ROOM_LIST, { params: { page_size: 1000 } })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)
    return dispatch({
      payload,
      type: actionTypes.ROOM_LIST
    })
  }
}
export const buildingsFetchDetailFloors = id => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(sprintf(API.BUILDING_DETAIL_FLOORS, id))
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.BUILDING_DETAIL_FLOORS
    })
  }
}

export const buildingFloorsUpdate = ([id, data]) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .put(sprintf(API.BUILDING_FLOORS_UPDATE, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)
    return dispatch({
      payload,
      type: actionTypes.BUILDING_FLOORS_UPDATE
    })
  }
}
