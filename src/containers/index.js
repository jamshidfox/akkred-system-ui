import React from 'react'
import Layouts from '../components/Layouts'
import UIs from './UIs'

const tester = store => [
  {
    exact: true,
    path: '/',
    layout: Layouts,
    component: UIs
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
