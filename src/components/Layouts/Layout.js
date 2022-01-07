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
  min-height: 100vh;
  padding: 20px 20px 20px calc(${({ theme, open }) => open ? theme.width.mainMenu.open : theme.width.mainMenu.close} + 20px);
  transition: ${({ theme }) => theme.transition.primary};
`
const Content = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  max-width: calc(100vw - (${({ theme, open }) => open ? theme.width.mainMenu.open : theme.width.mainMenu.close} + 64px));
  margin-left: 20px;
  background: #fff;
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
      <Container
        open={isOpenMenu}
      >
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
