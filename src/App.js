import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import NormalizedStyles from 'components/StyledElems/NormalizedStyles'
import RoutesWithSubRoutes from './components/RouteWithSubRoutes'
import theme from './constants/theme'
import AuthLayout from './components/Layouts/AuthLayout'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const App = ({ routes, store }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthLayout>
          <NormalizedStyles />
          <Router>
            <Switch>
              {routes.map((route, i) => (
                <RoutesWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Router>
        </AuthLayout>
      </ThemeProvider>
    </Provider>

  )
}

export default App
