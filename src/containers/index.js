import React from 'react'
import Layouts, { LoginLayout } from '../components/Layouts'
import { LOGIN } from '../constants/routes'
import UIs from './UIs'
import Example from './example'
import Login from './Login'

const tester = store => [
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
    path: LOGIN,
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
