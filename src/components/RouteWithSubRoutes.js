import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { getCookie } from '../utils/cookie'
import * as ROUTES from '../constants/routes'

const NotFoundRedirect = () => <Redirect to={ROUTES.SETTINGS_HOTEL_URL} />
const RouteWithSubRoutes = ({ routes, ...route }) => {
  const tokenExists = getCookie('token')
  return (
    <>
      {!tokenExists && <Redirect to={'/login'} />}
      <Route
        exact={true}
        path={route.path}
        render={props => (
          <route.layout>
            <route.component {...props} />
          </route.layout>
        )}
      />
      {routes.map((route, index) => (
        <RouteWithSubRoutes
          key={index}
          {...route}
        />
      ))}
    </>
  )
}

RouteWithSubRoutes.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  layout: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  component: PropTypes.any.isRequired,
  routes: PropTypes.array
}

RouteWithSubRoutes.defaultProps = {
  routes: []
}

export default RouteWithSubRoutes
