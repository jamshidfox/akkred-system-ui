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

    [STATE.USER_INFO]: createThunkReducer(actionTypes.USER_INFO),

    [STATE.CLIENT_LIST]: createThunkReducer(actionTypes.CLIENT_LIST),
    [STATE.CLIENT_CREATE]: createThunkReducer(actionTypes.CLIENT_CREATE),
    [STATE.CLIENT_UPDATE]: createThunkReducer(actionTypes.CLIENT_UPDATE),
    [STATE.CLIENT_ITEM]: createThunkReducer(actionTypes.CLIENT_ITEM),
    [STATE.CLIENT_DELETE]: createThunkReducer(actionTypes.CLIENT_DELETE),

    [STATE.EMPLOYEES_LIST]: createThunkReducer(actionTypes.EMPLOYEES_LIST),
    [STATE.EMPLOYEES_CREATE]: createThunkReducer(actionTypes.EMPLOYEES_CREATE),
    [STATE.EMPLOYEES_UPDATE]: createThunkReducer(actionTypes.EMPLOYEES_UPDATE),
    [STATE.EMPLOYEES_ITEM]: createThunkReducer(actionTypes.EMPLOYEES_ITEM),

    [STATE.ROLE_LIST]: createThunkReducer(actionTypes.ROLE_LIST),
    [STATE.ROLE_CREATE]: createThunkReducer(actionTypes.ROLE_CREATE),
    [STATE.ROLE_UPDATE]: createThunkReducer(actionTypes.ROLE_UPDATE),
    [STATE.ROLE_ITEM]: createThunkReducer(actionTypes.ROLE_ITEM),

    [STATE.GROUP_LIST]: createThunkReducer(actionTypes.GROUP_LIST),
    [STATE.GROUP_CREATE]: createThunkReducer(actionTypes.GROUP_CREATE),
    [STATE.GROUP_UPDATE]: createThunkReducer(actionTypes.GROUP_UPDATE),
    [STATE.GROUP_ITEM]: createThunkReducer(actionTypes.GROUP_ITEM),

    [STATE.PERMISSION_LIST]: createThunkReducer(actionTypes.PERMISSION_LIST),

    [STATE.APPLICATION_LIST]: createThunkReducer(actionTypes.APPLICATION_LIST),
    [STATE.APPLICATION_CREATE]: createThunkReducer(actionTypes.APPLICATION_CREATE),
    [STATE.APPLICATION_UPDATE]: createThunkReducer(actionTypes.APPLICATION_UPDATE),
    [STATE.APPLICATION_ITEM]: createThunkReducer(actionTypes.APPLICATION_ITEM),
    [STATE.APPLICATION_CONFIRM]: createThunkReducer(actionTypes.APPLICATION_CONFIRM),
    [STATE.APPLICATION_REJECT]: createThunkReducer(actionTypes.APPLICATION_REJECT),

    [STATE.CLIENT_INFO_LIST]: createThunkReducer(actionTypes.CLIENT_INFO_LIST),
    [STATE.CLIENT_INFO_CREATE]: createThunkReducer(actionTypes.CLIENT_INFO_CREATE),
    [STATE.CLIENT_INFO_UPDATE]: createThunkReducer(actionTypes.CLIENT_INFO_UPDATE),
    [STATE.CLIENT_INFO_ITEM]: createThunkReducer(actionTypes.CLIENT_INFO_ITEM),

    [STATE.EXPERT_EXPERTISE_LIST]: createThunkReducer(actionTypes.EXPERT_EXPERTISE_LIST),
    [STATE.EXPERT_EXPERTISE_CREATE]: createThunkReducer(actionTypes.EXPERT_EXPERTISE_CREATE),
    [STATE.EXPERT_EXPERTISE_UPDATE]: createThunkReducer(actionTypes.EXPERT_EXPERTISE_UPDATE),
    [STATE.EXPERT_EXPERTISE_ITEM]: createThunkReducer(actionTypes.EXPERT_EXPERTISE_ITEM),

    [STATE.EXPERT_PLACE_LIST]: createThunkReducer(actionTypes.EXPERT_PLACE_LIST),
    [STATE.EXPERT_PLACE_CREATE]: createThunkReducer(actionTypes.EXPERT_PLACE_CREATE),
    [STATE.EXPERT_PLACE_UPDATE]: createThunkReducer(actionTypes.EXPERT_PLACE_UPDATE),
    [STATE.EXPERT_PLACE_ITEM]: createThunkReducer(actionTypes.EXPERT_PLACE_ITEM),

    [STATE.COMMISSION_LIST]: createThunkReducer(actionTypes.COMMISSION_LIST),
    [STATE.COMMISSION_CREATE]: createThunkReducer(actionTypes.COMMISSION_CREATE),
    [STATE.COMMISSION_UPDATE]: createThunkReducer(actionTypes.COMMISSION_UPDATE),
    [STATE.COMMISSION_ITEM]: createThunkReducer(actionTypes.COMMISSION_ITEM),
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
