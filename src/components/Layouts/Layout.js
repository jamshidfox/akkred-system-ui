import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SideMenu from '../SideMenu'
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
  background: #fff;
  margin-left: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  transition: ${({ theme }) => theme.transition.primary};
`

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <SideMenu />
        <Content>
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
