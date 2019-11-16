import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { hotelFetchList } from '../Register/actions'
import * as ROUTES from '../../constants/routes'
import Login from './components/Login'
import { loginAction, userInfoFetch } from './actions'

const LoginContainer = props => {
  const dispatch = useDispatch()
  const onLogin = (data) => {
    return dispatch(loginAction(data))
      .then(({ value }) => dispatch(userInfoFetch(value.token)))
      .then(() => props.history.push(ROUTES.HOTEL_PATH))
      .then(() => dispatch(hotelFetchList()))
  }
  return (
    <Login onLogin={onLogin} />
  )
}
LoginContainer.propTypes = {
  history: PropTypes.object
}
export default LoginContainer
