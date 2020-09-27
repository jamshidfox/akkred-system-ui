import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { find } from 'ramda'
import MenuItem from './MenuItem'

const SubMenus = styled('div')`
  max-height: ${({ open }) => open ? '50vh' : '0'};
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.primary};
  margin-bottom: 20px;
  & > a:last-child{
    margin-bottom: 0;
  }
`

const Menu = props => {
  const { list } = props

  // States
  const [openSubmenus, setOpenSubmenus] = useState('')

  // Location
  const { pathname } = useLocation()

  // Render
  return list.map((item, index) => {
    const {
      children,
      url,
      ...rest
    } = item

    // Const
    const isActive = pathname === url
    const isSubActive = children && find(({ url }) => url === pathname)(children)
    const isOpen = (`${openSubmenus}` === `${index}`) || isActive || isSubActive

    // Handlers
    const handleOpenSubMenus = () => !isActive && setOpenSubmenus(`${index}`)

    // MenuItemWithChildren
    const menuItemWithChildren =
      <>
        <MenuItem
          pathname={pathname}
          withChildren={true}
          url={url}
          onMouseEnter={handleOpenSubMenus}
          // isActive={isSubActive}
          {...rest}
        />
        <SubMenus
          open={isOpen}
          onMouseEnter={handleOpenSubMenus}
        >
          {children && children.map(({ ...rest }) => (
            <MenuItem
              pathname={pathname}
              isSub={true}
              url={url}
              {...rest}
            />
          ))}
        </SubMenus>
      </>

    // MenuItem
    const menuItem =
      <MenuItem
        pathname={pathname}
        key={index}
        url={url}
        {...rest}
      />

    // Render
    return (
      <Fragment
        key={index}
      >
        {children
          ? menuItemWithChildren
          : menuItem
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
