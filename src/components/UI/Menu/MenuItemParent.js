import React from 'react'
import styled, { css } from 'styled-components'
import hexToRgb from 'hex-to-rgba'
import { Link } from 'react-router-dom'

const Text = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding-left: 16px;
 
`

const Item = styled.div`
  display: block;
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
  text-decoration: unset;
  :visited {
    text-decoration: initial;
    text-decoration: unset !important;
    color: inherit;
  }
`
const MenuItem = props => {
  const { name, icon, url, pathname, children, onClick } = props
  const Icon = icon
  return (
    <Item onClick={children && onClick} isActive={url === pathname} isSub={!icon}>
      {icon && <Icon />}<Text className="rootMenuItem">{name}</Text>
      {children}
    </Item>
  )
}

export default MenuItem
