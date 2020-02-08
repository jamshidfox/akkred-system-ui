import * as actionTypes from 'constants/actionTypes'
import moxios from 'utils/moxios'

export const bookingListAction = () => {
  return (dispatch, getState) => {
    const payload = moxios(['asdasdasd'])

    return dispatch({
      payload,
      type: actionTypes.BOOKING_LIST
    })
  }
}
