import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, { getPayloadFromError, getPayloadFromSuccess } from '../../../utils/axios'

export const hotelCreateAction = data => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.HOTEL_CREATE, { ...data, hotel_type: data.hotel_type.id, services: [], currencies: [] })
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.HOTEL_CREATE
    })
  }
}
