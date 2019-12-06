import React from 'react'
import Layouts, { LoginLayout } from '../components/Layouts'
import * as ROUTES from '../constants/routes'
import UIs from './UIs'
import Example from './example'
import Login from './Login'
import Register from './Register'
import rooms from './Rooms'
import reservation from './reservation'

const tester = store => [
  ...reservation(),
  ...rooms(),
  {
    exact: true,
    path: ROUTES.SETTINGS_HOTEL_URL,
    layout: Layouts,
    component: Register
  },
  {
    exact: true,
    path: '/',
    layout: Layouts,
    component: Example
  },
  {
    exact: true,
    path: '/ui',
    layout: Layouts,
    component: UIs
  },
  {
    path: ROUTES.LOGIN_PATH,
    layout: LoginLayout,
    component: Login
  },
  {
    exact: true,
    path: '/src',
    component: () => <div>SRC COMPONENT</div>
  }
]
const Routes = store => [
  ...tester(store)
]

export default Routes
