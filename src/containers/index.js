import React from 'react'
import Layouts, { LoginLayout } from '../components/Layouts'
import * as ROUTES from '../constants/routes'
import UIs from './UIs'
import Example from './example'
import Login from './Login'
import Register from './Register'
import Requisites from './Requisites'
import rooms from './Rooms'
import reservation from './reservation'
import client from './Client'
import rates from './Rates'
import services from './Services'
import employees from './Employees'
import booking from './booking'
import Buildings from './Buildings'
import transaction from './Transaction'
import roomsRules from './RoomsRules'
import partners from './Partners'
import roles from './Role'

const tester = store => [
  ...reservation(),
  ...rooms(),
  ...Buildings(),
  ...client(),
  ...rates(),
  ...services(),
  ...employees(),
  ...booking(),
  ...transaction(),
  ...roomsRules(),
  ...partners(),
  ...roles(),
  {
    exact: true,
    path: ROUTES.SETTINGS_HOTEL_URL,
    layout: Layouts,
    component: Register
  },
  {
    exact: true,
    path: ROUTES.SETTING_REQUISITES,
    layout: Layouts,
    component: Requisites
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
