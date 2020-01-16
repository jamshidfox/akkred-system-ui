import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const employeesCreateAction = data => {
  return (dispatch, getState) => {
    console.warn(data)
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

// export const ratesUpdateAction = (id, data) => {
//   return (dispatch, getState) => {
//     const payload = axios({ dispatch, getState })
//       .put(sprintf(API.EMPLOYEES_UPDATE, id), data)
//       .then(getPayloadFromSuccess)
//       .catch(getPayloadFromError)
//
//     return dispatch({
//       payload,
//       type: actionTypes.EMPLOYEES_UPDATE
//     })
//   }
// }

export const employeesFetchList = data => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.EMPLOYEES_LIST)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.EMPLOYEES_LIST
    })
  }
}

// export const ratesFetchItem = id => {
//   return (dispatch, getState) => {
//     const payload = axios({ getState, dispatch })
//       .get(sprintf(API.EMPLOYEES_ITEM, id))
//       .then(getPayloadFromSuccess)
//       .catch(getPayloadFromError)
//
//     return dispatch({
//       payload,
//       type: actionTypes.EMPLOYEES_ITEM
//     })
//   }
// }
