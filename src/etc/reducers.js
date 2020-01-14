import { combineReducers } from 'redux'
import { compose, forEach, toPairs } from 'ramda'
import * as actionTypes from '../constants/actionTypes'
import * as STATE from '../constants/stateNames'
import createThunkReducer from '../utils/createThunkReducer'
/*
import confirmDialogReducer, {
  CONFIRM_DIALOG_STATE
} from '~/components/ConfirmDialog/reducer'
*/

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    login: createThunkReducer(actionTypes.LOGIN),
    [STATE.HOTEL_LIST]: createThunkReducer(actionTypes.HOTEL_LIST),
    [STATE.HOTEL_CREATE]: createThunkReducer(actionTypes.HOTEL_CREATE),
    [STATE.HOTEL_UPDATE]: createThunkReducer(actionTypes.HOTEL_UPDATE),
    [STATE.USER_INFO]: createThunkReducer(actionTypes.USER_INFO),
    [STATE.ROOM_LIST]: createThunkReducer(actionTypes.ROOM_LIST),
    [STATE.ROOM_CREATE]: createThunkReducer(actionTypes.ROOM_CREATE),
    [STATE.ROOM_UPDATE]: createThunkReducer(actionTypes.ROOM_UPDATE),
    [STATE.ROOM_ITEM]: createThunkReducer(actionTypes.ROOM_ITEM),
    [STATE.ROOM_TYPE_LIST]: createThunkReducer(actionTypes.ROOM_TYPE_LIST),
    [STATE.CLIENT_LIST]: createThunkReducer(actionTypes.CLIENT_LIST),
    [STATE.CLIENT_CREATE]: createThunkReducer(actionTypes.CLIENT_CREATE),
    [STATE.CLIENT_UPDATE]: createThunkReducer(actionTypes.CLIENT_UPDATE),
    [STATE.CLIENT_ITEM]: createThunkReducer(actionTypes.CLIENT_ITEM),
    [STATE.RATES_LIST]: createThunkReducer(actionTypes.RATES_LIST),
    [STATE.RATES_CREATE]: createThunkReducer(actionTypes.RATES_CREATE),
    [STATE.RATES_UPDATE]: createThunkReducer(actionTypes.RATES_UPDATE),
    [STATE.RATES_ITEM]: createThunkReducer(actionTypes.RATES_ITEM),
    [STATE.SERVICES_PRICE_LIST]: createThunkReducer(actionTypes.SERVICES_PRICE_LIST),
    [STATE.SERVICES_PRICE_CREATE]: createThunkReducer(actionTypes.SERVICES_PRICE_CREATE),
    [STATE.SERVICES_PRICE_UPDATE]: createThunkReducer(actionTypes.SERVICES_PRICE_UPDATE),
    [STATE.SERVICES_PRICE_ITEM]: createThunkReducer(actionTypes.SERVICES_PRICE_ITEM),
    [STATE.RESERVATION_CREATE]: createThunkReducer(actionTypes.RESERVATION_CREATE),
    [STATE.RESERVATION_LIST]: createThunkReducer(actionTypes.RESERVATION_LIST),
    [STATE.RESERVATION_UPDATE]: createThunkReducer(actionTypes.RESERVATION_UPDATE),
    [STATE.PLACING_LIST]: createThunkReducer(actionTypes.PLACING_LIST),
    [STATE.EMPLOYEES_LIST]: createThunkReducer(actionTypes.EMPLOYEES_LIST),
    [STATE.EMPLOYEES_CREATE]: createThunkReducer(actionTypes.EMPLOYEES_CREATE),
    [STATE.EMPLOYEES_UPDATE]: createThunkReducer(actionTypes.EMPLOYEES_UPDATE),
    [STATE.EMPLOYEES_ITEM]: createThunkReducer(actionTypes.EMPLOYEES_ITEM),
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export const injectReducers = (store, reducers) =>
  compose(
    forEach(([key, reducer]) => injectReducer(store, { key, reducer })),
    toPairs
  )(reducers)
