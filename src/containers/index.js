import React from 'react'
const tester = store => [
  {
    exact: true,
    path: '/',
    component: () => <div>  </div>
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
