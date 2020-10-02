import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowDown from '../../../icons/ArrowDown'

const Text = styled('span')`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
  width: ${({ smart }) => smart && '0'};
  opacity: ${({ smart }) => smart && '0'};
  padding-left: ${({ smart }) => smart && '25px'};
  color: ${({ theme, isActive }) => isActive && theme.palette.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: ${({ theme }) => theme.transition.primary};
`
const Item = styled(Link)`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${({ smart }) => smart ? 'center' : 'flex-start'};
  align-items: center;
  padding: ${({ icon, smart }) => smart ? 0 : !icon ? '10px 14px' : '10px 14px 10px 52px'};
  margin: ${({ isSub, withChildren, smart }) => `20px 0 ${withChildren ? '0' : '20px'} ${(isSub && !smart) ? '17px' : '0'}`};
  user-select: none;
  cursor: pointer;
  background: ${({ theme, isActive }) => isActive && theme.palette.secondary};
  border-radius: 8px;
  min-height: 40px;
  height: 40px;
  transition: ${({ theme }) => theme.transition.primary};
  & svg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    transition: ${({ theme }) => theme.transition.primary};
    &:first-child{
      left: ${({ smart }) => smart ? '10px' : '18px'};
      & * {
        fill: ${({ theme, isActive }) => isActive ? theme.palette.primary : '#7d8893'};
      }
    }
    &:last-child{
      display: ${({ smart }) => smart && 'none'};
      right: 9px;
      stroke-width: 2px;
      stroke: ${({ theme, isActive }) => isActive ? theme.palette.primary : '#7d8893'};
      transform: ${({ isActive }) => isActive && 'translateY(-50%) rotate(-180deg)'};
    }
  }
  &:hover {
    background: ${({ theme, isActive }) => !isActive && theme.background.linkHover};
    transition: ${({ theme }) => theme.transition.primary};
    & span{
      color: ${({ theme, isActive }) => !isActive && theme.palette.primary};
      transition: ${({ theme }) => theme.transition.primary};
    }
    & svg:first-child * {
      fill: ${({ theme }) => theme.palette.primary}
      transition: ${({ theme }) => theme.transition.primary};
    }
    & svg:last-child * {
      stroke: ${({ theme }) => theme.palette.primary}
      transition: ${({ theme }) => theme.transition.primary};
    }
  }
  &:active {
    opacity: 0.7;
    transition: ${({ theme }) => theme.transition.primary};
  }
`

const MenuItem = props => {
  const {
    name,
    icon,
    url,
    pathname,
    withChildren,
    isSub,
    isActive,
    smart,
    ...rest
  } = props

  // Icon
  const Icon = icon

  // Render
  return (
    <Item
      to={url}
      isActive={isActive || (url === pathname)}
      isSub={isSub}
      withChildren={withChildren}
      icon={icon}
      smart={smart}
      {...rest}
    >
      {icon && <Icon />}
      <Text
        smart={smart}
      >
        {name}
      </Text>
      {withChildren && !smart &&
      <ArrowDown />}
    </Item>
  )
}

export default MenuItem
