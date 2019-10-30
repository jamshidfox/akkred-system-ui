import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

const Menu = props => {
  const { list } = props
  return list.map(item => {
    return (
      <MenuItem {...item} />
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
