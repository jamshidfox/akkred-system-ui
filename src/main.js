import React from 'react'
import ReactDOM from 'react-dom'
import { from } from 'rxjs'
import { setObservableConfig } from 'react-fc'
import createStore from './etc/store'
import './root.css'

setObservableConfig({
  // Converts a plain ES observable to an RxJS 6 observable
  fromESObservable: from
})

// ======================================================
// Store Initialization
// ======================================================
const initialState = window.__INITIAL_STATE__
const store = createStore(initialState)

const MOUNT_NODE = document.getElementById('app')

const render = () => {
  const App = require('./App').default
  const routes = require('./containers').default
  ReactDOM.render(
    <App store={store} routes={routes(store)} />,
    MOUNT_NODE
  )
}

// ======================================================
// Configuration HMR only run when files change
// ======================================================
if (__DEV__) {
  if (module.hot) {
    module.hot.accept(['./App', './containers'], () =>
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// Run app
render()
