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
    [STATE.RESERVATION_CREATE]: createThunkReducer(actionTypes.RESERVATION_CREATE),
    [STATE.RESERVATION_LIST]: createThunkReducer(actionTypes.RESERVATION_LIST),
    [STATE.RESERVATION_UPDATE]: createThunkReducer(actionTypes.RESERVATION_UPDATE),
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
