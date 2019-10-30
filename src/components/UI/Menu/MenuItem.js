import React from 'react'
import styled, { css } from 'styled-components'
import hexToRgb from 'hex-to-rgba'

const Text = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding-left: 16px;
 
`

const Item = styled.div`
  border-bottom: ${props => props.theme.border};
  cursor: pointer;
  padding: 20px 18px;
  position:relative;
  transition: background-color 300ms;
  :hover {
      background: ${props => hexToRgb(props.theme.color.primary.default, '0.05')};
  }
  :last-child {
  border-bottom: none;
  }
  svg {
    vertical-align: middle;
  }
  
  ${props => props.isActive && css`
    background: ${props => hexToRgb(props.theme.color.primary.default, '0.08')}!important;
    ${Text} {
    color: ${props => props.theme.color.primary.default};
    }
    svg {
       fill: ${props => props.theme.color.primary.default};
    }
    :after {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0 3px 3px 0 ;
      content: '';
      height: 100%;
      width: 4px;
      background: ${props => props.theme.color.primary.default};
  }
`} 
`
const MenuItem = props => {
  const { name, isActive, icon, url } = props
  const Icon = icon
  return (
    <Item isActive={isActive}>
      <Icon /><Text>{name}</Text>
    </Item>
  )
}

export default MenuItem
