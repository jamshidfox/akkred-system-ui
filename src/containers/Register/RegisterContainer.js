import React from 'react'
import { useDispatch } from 'react-redux'
import Register from './components/Register'
import { loginAction } from './actions'

const RegisterContainer = props => {
  const dispatch = useDispatch()
  const onLogin = (data) => {
    console.warn(data)
    return dispatch(loginAction(data))
  }
  return (
    <Register onLogin={onLogin} />
  )
}

export default RegisterContainer
