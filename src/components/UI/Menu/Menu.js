import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import MenuItem from './MenuItem'

const Menu = props => {
  const { pathname } = useLocation()
  const { list } = props
  return list.map(({ children, ...item }, index) => {
    return (
      <Fragment key={index}>
        <MenuItem {...item} key={index} pathname={pathname} />
        {children && <Menu list={children} />}
      </Fragment>
    )
  })
}

Menu.defaultProps = {
  list: []
}
Menu.propTypes = {
  list: PropTypes.array
}
export default Menu
