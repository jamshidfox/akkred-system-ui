import React from 'react'
import styled from 'styled-components'
import SideMenu from '../SideMenu'
import { DisplayFlex, Box } from '../StyledElems'

const Container = styled.div`
  padding: 24px;
`
const Content = styled.div`
  width: calc(100% - 298px);
  padding-left: 24px;
`

const BoxUI = styled(Box)`
  padding: 25px;
`
const Layout = props => {
  return (
    <Container>
      <DisplayFlex>
        <SideMenu />
        <Content>
          <BoxUI>
            {props.children}
          </BoxUI>
        </Content>
      </DisplayFlex>
    </Container>
  )
}

export default Layout
