import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { path, prop, propOr } from 'ramda'
import { useSelector } from 'react-redux'
import { getCookie } from '../utils/cookie'
import * as ROUTES from '../constants/routes'

import * as STATES from '../constants/stateNames'

const NotFoundRedirect = () => <Redirect to={ROUTES.SETTINGS_HOTEL_URL} />
const RouteWithSubRoutes = ({ routes, ...route }) => {
  const tokenExists = getCookie('token')
  const userInfo = useSelector(prop(STATES.USER_INFO))
  const userInfoData = prop('data', userInfo)
  const clientInfo = path(['user', 'type'], userInfoData)
  return (
    <>
      {!tokenExists && <Redirect to={'/login'} />}
      {clientInfo === 'client' && <Redirect to={'/login?code='} />}
      <Route
        exact={true}
        path={route.path}
        render={(props) => (
          <route.layout>
            <route.component {...props} />
          </route.layout>
        )}
      />
      {routes.map((route, index) => (
        <RouteWithSubRoutes key={index} {...route} />
      ))}
    </>
  )
}

RouteWithSubRoutes.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  layout: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  component: PropTypes.any.isRequired,
  routes: PropTypes.array,
}

RouteWithSubRoutes.defaultProps = {
  routes: [],
}

export default RouteWithSubRoutes
