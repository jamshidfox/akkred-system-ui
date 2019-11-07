import React from 'react'
import { useDispatch } from 'react-redux'
import Login from './components/Login'
import { loginAction } from './actions'

const LoginContainer = props => {
  const dispatch = useDispatch()
  const onLogin = (data) => {
    return dispatch(loginAction(data)).then(props.history.push('/'))
  }
  return (
    <Login onLogin={onLogin} />
  )
}

export default LoginContainer
