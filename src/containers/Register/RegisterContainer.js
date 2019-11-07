import React from 'react'
import { useDispatch } from 'react-redux'
import * as STATE from '../../constants/stateNames'
import useCreate from '../../hooks/useCreate'
import Register from './components/Register'
import { hotelCreateAction } from './actions'

const RegisterContainer = props => {
  const data = useCreate({
    action: hotelCreateAction,
    stateName: STATE.HOTEL_CREATE,
    redirectUrl: '/'
  })

  console.warn(data)
  return (
    <Register
      {...data}
    />
  )
}

export default RegisterContainer
