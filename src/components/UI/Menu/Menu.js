import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import MenuItem from './MenuItem'
import MenuItemParent from './MenuItemParent'

const MenuItemChildren = styled.div`
  transition: 0.3s;
  overflow: hidden;
  margin-top: 20px;
  border-top: 1px solid #E4E9F2;
  min-height: 520px;
  &.menuItemChildrenHidden{
    height: 0px;
    min-height: 0px;
    border-top: none;
    margin-top: 0px;
  }
`

const Menu = props => {
  const { pathname } = useLocation()
  const { list } = props
  const [childrenActive, setChildrenActive] = useState('menuItemChildrenHidden')
  const toggleMenu = () => {
    if (childrenActive === 'menuItemChildrenHidden') {
      setChildrenActive('')
    } else {
      setChildrenActive('menuItemChildrenHidden')
    }
  }
  return list.map(({ children, ...item }, index) => {
    return (
      <Fragment key={index}>
        {children
          ? <MenuItemParent
            {...item}
            key={index}
            pathname={pathname}
            onClick={() => toggleMenu()}
          >
            <MenuItemChildren className={childrenActive}>
              {children && children.map(({ ...item }, index) => (
                <MenuItem {...item} key={index} pathname={pathname} />
              ))}
            </MenuItemChildren>
          </MenuItemParent>
          : <MenuItem {...item} key={index} pathname={pathname} />
        }
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
