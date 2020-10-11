import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SideMenu from '../SideMenu'
import { storageData } from '../../utils/storage'
import Toast from '~/components/Toast'
import ConfirmDialog from '~/components/ConfirmDialog'

const Container = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  max-width: 100%;
  padding: 20px;
`
const Content = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  max-width: ${({ theme, open }) => `calc(100% - 20px - ${open ? theme.width.mainMenu.open : theme.width.mainMenu.close})`};
  background: #fff;
  margin-left: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  transition: ${({ theme }) => theme.transition.primary};
`

const Layout = ({ children }) => {
  // Storage
  const isOpenMenuStorage = storageData('isOpenMenu').getValue()
  const isOpenMenuInitial = isOpenMenuStorage === null || isOpenMenuStorage === true

  // States
  const [isOpenMenu, setIsOpenMenu] = useState(isOpenMenuInitial)

  // Render
  return (
    <>
      <Container>
        <SideMenu
          open={isOpenMenu}
          setOpen={setIsOpenMenu}
        />
        <Content
          open={isOpenMenu}
        >
          {children}
        </Content>
      </Container>
      <Toast />
      <ConfirmDialog />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
