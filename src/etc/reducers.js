import { combineReducers } from 'redux'
import { compose, forEach, toPairs } from 'ramda'
import * as actionTypes from '../constants/actionTypes'
import createThunkReducer from '../utils/createThunkReducer'
// import authReducers from 'modules/auth/reducers'
/*
import confirmDialogReducer, {
  CONFIRM_DIALOG_STATE
} from '~/components/ConfirmDialog/reducer'
*/

export const makeRootReducer = asyncReducers => {
  console.warn(asyncReducers)
  return combineReducers({
    //    auth: combineReducers(authReducers),
    hotelList: createThunkReducer(actionTypes.HOTEL_LIST),
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
