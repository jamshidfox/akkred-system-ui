import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { hotelFetchList } from '../Register/actions'
import Login from './components/Login'
import { loginAction, userInfoFetch } from './actions'
import * as ROUTES from '~/constants/routes'
import { mapResponseToFormError } from '~/utils/form'

const LoginContainer = props => {
  const dispatch = useDispatch()
  const onLogin = values => {
    return dispatch(loginAction(values))
      .then(({ value }) => dispatch(userInfoFetch(value.token)))
      .then(() => props.history.push(ROUTES.SETTINGS_CLIENT_INFO_URL))
      .then(() => dispatch(hotelFetchList()))
      .catch(mapResponseToFormError)
  }
  return (
    <Login onLogin={onLogin} />
  )
}

LoginContainer.propTypes = {
  history: PropTypes.object
}

export default LoginContainer
