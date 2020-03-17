import { combineReducers } from 'redux'
import { compose, forEach, toPairs } from 'ramda'
import * as actionTypes from '../constants/actionTypes'
import * as STATE from '../constants/stateNames'
import createThunkReducer from '../utils/createThunkReducer'
import confirmDialogReducer from '../components/ConfirmDialog/reducer'

/*
import confirmDialogReducer, {
  CONFIRM_DIALOG_STATE
} from '~/components/ConfirmDialog/reducer'
*/

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    confirmDialog: confirmDialogReducer,
    login: createThunkReducer(actionTypes.LOGIN),
    [STATE.HOTEL_LIST]: createThunkReducer(actionTypes.HOTEL_LIST),
    [STATE.HOTEL_CREATE]: createThunkReducer(actionTypes.HOTEL_CREATE),
    [STATE.HOTEL_UPDATE]: createThunkReducer(actionTypes.HOTEL_UPDATE),
    [STATE.REQUISITES_UPDATE]: createThunkReducer(actionTypes.REQUISITES_UPDATE),
    [STATE.BUILDING_CREATE]: createThunkReducer(actionTypes.BUILDING_CREATE),
    [STATE.BUILDING_LIST]: createThunkReducer(actionTypes.BUILDING_LIST),
    [STATE.BUILDING_DETAIL]: createThunkReducer(actionTypes.BUILDING_DETAIL),
    [STATE.BUILDING_FLOORS_DETAIL]: createThunkReducer(actionTypes.BUILDING_FLOORS_DETAIL),
    [STATE.BUILDING_FLOORS_UPDATE]: createThunkReducer(actionTypes.BUILDING_FLOORS_UPDATE),
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
    [STATE.CLIENT_DELETE]: createThunkReducer(actionTypes.CLIENT_DELETE),
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
    [STATE.PLACING_ITEM]: createThunkReducer(actionTypes.PLACING_ITEM),
    [STATE.PLACING_UPDATE]: createThunkReducer(actionTypes.PLACING_UPDATE),
    [STATE.EMPLOYEES_LIST]: createThunkReducer(actionTypes.EMPLOYEES_LIST),
    [STATE.EMPLOYEES_CREATE]: createThunkReducer(actionTypes.EMPLOYEES_CREATE),
    [STATE.EMPLOYEES_UPDATE]: createThunkReducer(actionTypes.EMPLOYEES_UPDATE),
    [STATE.EMPLOYEES_ITEM]: createThunkReducer(actionTypes.EMPLOYEES_ITEM),

    [STATE.BOOKING_LIST]: createThunkReducer(actionTypes.BOOKING_LIST),
    [STATE.BOOKING_CREATE]: createThunkReducer(actionTypes.BOOKING_CREATE),
    [STATE.BOOKING_UPDATE]: createThunkReducer(actionTypes.BOOKING_UPDATE),
    [STATE.BOOKING_ITEM]: createThunkReducer(actionTypes.BOOKING_ITEM),
    [STATE.TRANSACTION_LIST]: createThunkReducer(actionTypes.TRANSACTION_LIST),
    [STATE.TRANSACTION_CREATE]: createThunkReducer(actionTypes.TRANSACTION_CREATE),
    [STATE.TRANSACTION_UPDATE]: createThunkReducer(actionTypes.TRANSACTION_UPDATE),
    [STATE.TRANSACTION_ITEM]: createThunkReducer(actionTypes.TRANSACTION_ITEM),
    [STATE.RULE_GROUP_LIST]: createThunkReducer(actionTypes.RULE_GROUP_LIST),
    [STATE.RULE_GROUP_CREATE]: createThunkReducer(actionTypes.RULE_GROUP_CREATE),
    [STATE.RULE_GROUP_UPDATE]: createThunkReducer(actionTypes.RULE_GROUP_UPDATE),
    [STATE.RULE_GROUP_ITEM]: createThunkReducer(actionTypes.RULE_GROUP_ITEM),
    [STATE.RULE_PRICE_LIST]: createThunkReducer(actionTypes.RULE_PRICE_LIST),
    [STATE.RULE_PRICE_CREATE]: createThunkReducer(actionTypes.RULE_PRICE_CREATE),
    [STATE.RULE_PRICE_UPDATE]: createThunkReducer(actionTypes.RULE_PRICE_UPDATE),
    [STATE.RULE_PRICE_ITEM]: createThunkReducer(actionTypes.RULE_PRICE_ITEM),
    [STATE.PARTNER_LIST]: createThunkReducer(actionTypes.PARTNER_LIST),
    [STATE.PARTNER_CREATE]: createThunkReducer(actionTypes.PARTNER_CREATE),
    [STATE.PARTNER_UPDATE]: createThunkReducer(actionTypes.PARTNER_UPDATE),
    [STATE.PARTNER_ITEM]: createThunkReducer(actionTypes.PARTNER_ITEM),
    [STATE.ROLE_LIST]: createThunkReducer(actionTypes.ROLE_LIST),
    [STATE.ROLE_CREATE]: createThunkReducer(actionTypes.ROLE_CREATE),
    [STATE.ROLE_UPDATE]: createThunkReducer(actionTypes.ROLE_UPDATE),
    [STATE.ROLE_ITEM]: createThunkReducer(actionTypes.ROLE_ITEM),
    [STATE.GROUP_LIST]: createThunkReducer(actionTypes.GROUP_LIST),
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
