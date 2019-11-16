import React from 'react'
import styled from 'styled-components'
import BoxUI from '../StyledElems/Box'
import Menu from '../UI/Menu'
import MenuIcon from '../../icons/Menu'
import Notify from '../../icons/Notify'
import constants from './constants'

const Box = styled(BoxUI)`
  width: 296px;
  border: ${props => props.theme.border};
  height: fit-content;
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
`
const Title = styled.span`
  font-size: 22px;
`
const SideMenu = props => {
  return (
    <Box >
      <MenuWrapper>
        <div>
          <MenuIcon style={{ verticalAlign: 'text-bottom' }} /> <Title>Hotelier</Title>
        </div>
        <Notify />
      </MenuWrapper>
      <Menu list={constants} />
    </Box>
  )
}

export default SideMenu
