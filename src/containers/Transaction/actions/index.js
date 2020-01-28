import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess
} from '../../../utils/axios'

export const transactionFetchList = data => {
  return (dispatch, getState) => {
    const payload = axios({ getState, dispatch })
      .get(API.TRANSACTION_LIST)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.TRANSACTION_LIST
    })
  }
}
