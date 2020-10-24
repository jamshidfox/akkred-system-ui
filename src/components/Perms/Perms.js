import React from 'react'
import PropTypes from 'prop-types'
import { map, omit, path, pathOr, pipe, prop } from 'ramda'
import { connect } from 'react-redux'
import checkPermissions from 'utils/checkPermissions'

const enhance = connect(state => ({
  userPerms: pipe(pathOr([], ['userInfo', 'data', 'user', 'permissions']), map(prop('codename')))(state),
  isAdmin: path(['userInfo', 'data', 'isSuperuser'], state)
}))

const Perms = props => {
  const {
    perms,
    children,
    userPerms,
    isAdmin,
    onClick,
    ...defaultProps
  } = props

  const hasPerms = checkPermissions(perms, userPerms)
  const onClickActive = (hasPerms || isAdmin) ? onClick : undefined
  const filteredProps = omit(['dispatch'], defaultProps)
  const finalProps = { ...filteredProps, onClick: onClickActive }

  if (!hasPerms && !isAdmin) {
    return null
  } else {
    return React.cloneElement(children, finalProps)
  }
}

Perms.propTypes = {
  perms: PropTypes.array.isRequired
}
Perms.defaultProps = {
  perms: []
}

export default enhance(Perms)
