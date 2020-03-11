import React from 'react'
import styled from 'styled-components'
import SideMenu from '../SideMenu'
import { DisplayFlex } from '../StyledElems'
import Toast from '~/components/Toast'
import ConfirmDialog from '~/components/ConfirmDialog'

const Container = styled.div`
  padding: 24px;
`
const Content = styled.div`
  width: calc(100% - 298px);
  padding-left: 24px;
`

const Layout = props => {
  return (
    <Container>
      <Toast />
      <ConfirmDialog />
      <DisplayFlex>
        <SideMenu />
        <Content>
          {props.children}
        </Content>
      </DisplayFlex>
    </Container>
  )
}

export default Layout
