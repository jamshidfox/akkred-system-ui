import React from 'react'
import styled from 'styled-components'
import BoxUI from '../StyledElems/Box'

const Box = styled(BoxUI)`
  height: 72px;
  border: ${props => props.theme.border.primary};
  margin-bottom: 24px;
`
const Header = props => {
  return (
    <Box>dasda</Box>
  )
}

export default Header
