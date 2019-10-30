import React from 'react'
import { useDispatch } from 'react-redux'
import Login from './components/Login'
import { loginAction } from './actions'

const LoginContainer = props => {
  const dispatch = useDispatch()
  const onLogin = (data) => {
    console.warn(data)
    return dispatch(loginAction(data))
  }
  return (
    <Login onLogin={onLogin} />
  )
}

export default LoginContainer
