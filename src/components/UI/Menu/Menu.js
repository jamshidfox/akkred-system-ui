import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { find } from 'ramda'
import MenuItem from './MenuItem'

const SubMenus = styled('div')`
  max-height: ${({ open }) => open ? '100vh' : '0'};
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.primary};
  & > a:last-child{
    margin-bottom: 0;
  }
`

const Menu = props => {
  const {
    list,
    isOpenMenu
  } = props

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
    const withCurrentTab = children && !!find(({ tabs = [] }) => {
      return tabs && find(({ url }) => url === pathname)(tabs)
    })(children)
    const isActive = pathname === url
    const isSubActive = (children && find(({ url }) => url === pathname)(children))
    const isOpen = (`${openSubmenus}` === `${index}`) || isActive || isSubActive || withCurrentTab

    // Handlers
    const handleToggleSubMenus = () => !isOpen
      ? setOpenSubmenus(`${index}`)
      : (`${openSubmenus}` === `${index}`) && setOpenSubmenus('')

    // MenuItemWithChildren
    const menuItemWithChildren =
      <>
        <MenuItem
          pathname={pathname}
          // isActive={isOpen}
          withChildren={true}
          url={url}
          smart={!isOpenMenu}
          disabled={isSubActive}
          onClick={handleToggleSubMenus}
          {...rest}
        />
        <SubMenus
          open={isOpen}
        >
          {children && children.map(({ tabs, ...rest }) => {
            const isActiveChild = tabs && find(({ url }) => url === pathname)(tabs)

            return (
              <MenuItem
                pathname={pathname}
                smart={!isOpenMenu}
                isSub={true}
                isActive={isActiveChild}
                url={url}
                {...rest}
              />
            )
          })}
        </SubMenus>
      </>

    // MenuItem
    const menuItem =
      <MenuItem
        pathname={pathname}
        smart={!isOpenMenu}
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
