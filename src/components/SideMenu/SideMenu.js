import React from 'react'
import styled from 'styled-components'
import BoxUI from '../StyledElems/Box'
import Menu from '../UI/Menu'
import constants from './constants'
const Box = styled(BoxUI)`
  width: 296px;
  border: ${props => props.theme.border};
  height: fit-content;
`
const SideMenu = props => {
  return (
    <Box >
      <Menu list={constants} />
    </Box>
  )
}

export default SideMenu
