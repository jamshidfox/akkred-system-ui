import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SideMenu from '../SideMenu'
import { storageData } from '../../utils/storage'
import Toast from '~/components/Toast'
import ConfirmDialog from '~/components/ConfirmDialog'
import Navbar from '../Navbar'

const Container = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  max-width: 100%;
  min-height: 100vh;
  padding: 20px 20px 20px
    calc(
      ${({ theme, open }) => (open ? theme.width.mainMenu.open : theme.width.mainMenu.close)} + 20px
    );
  transition: ${({ theme }) => theme.transition.primary};
`
const NavbarContainer = styled('div')`
  display: flex;
  justify-content: center;
  height: 64px;
  flex-flow: column nowrap;
  max-width: calc(
    100vw -
      (
        ${({ theme, open }) => (open ? theme.width.mainMenu.open : theme.width.mainMenu.close)} +
          64px
      )
  );
  margin-left: 20px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  transition: ${({ theme }) => theme.transition.primary};
`
const SectionConatiner = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  max-width: calc(
    100vw -
      (
        ${({ theme, open }) => (open ? theme.width.mainMenu.open : theme.width.mainMenu.close)} +
          64px
      )
  );
  margin-left: 20px;
  margin-top: 20px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  transition: ${({ theme }) => theme.transition.primary};
`

const DivConatiner = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  max-width: calc(
    100vw -
      (
        ${({ theme, open }) => (open ? theme.width.mainMenu.open : theme.width.mainMenu.close)} +
          64px
      )
  );
  margin-left: 20px;
`

const Layout = ({ children }) => {
  console.log(children)
  // Storage
  const isOpenMenuStorage = storageData('isOpenMenu').getValue()
  const isOpenMenuInitial = isOpenMenuStorage === null || isOpenMenuStorage === true

  // States
  const [isOpenMenu, setIsOpenMenu] = useState(isOpenMenuInitial)
  // Render
  return (
    <>
      <Container open={isOpenMenu}>
        <SideMenu open={isOpenMenu} setOpen={setIsOpenMenu} />
        <DivConatiner>
          <NavbarContainer open={isOpenMenu}>
            <Navbar />
          </NavbarContainer>
          <SectionConatiner open={isOpenMenu}>{children}</SectionConatiner>
        </DivConatiner>
      </Container>
      <Toast />
      <ConfirmDialog />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
