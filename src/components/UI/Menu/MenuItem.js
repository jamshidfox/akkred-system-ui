import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowDown from '../../../icons/ArrowDown'

const Text = styled('span')`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
`
const Item = styled(Link)`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ icon }) => !icon ? '10px 14px' : '10px 14px 10px 52px'};
  margin: ${({ isSub, withChildren }) => `20px 0 ${withChildren ? '0' : '20px'} ${isSub ? '17px' : '0'}`};
  user-select: none;
  cursor: pointer;
  background: ${({ theme, isActive }) => isActive && theme.palette.secondary};
  border-radius: 8px;
  min-height: 40px;
  transition: ${({ theme }) => theme.transition.primary};
  & svg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    &:first-child{
      left: 18px;
      & * {
        fill: ${({ theme, isActive }) => isActive ? theme.palette.primary : '#7d8893'};
      }
    }
    &:last-child{
      right: 9px;
      stroke-width: 2px;
      stroke: ${({ theme, isActive }) => isActive ? theme.palette.primary : '#7d8893'};
      transform: ${({ isActive }) => isActive && 'translateY(-50%) rotate(-180deg)'};
    }
  }
  & span{
    color: ${({ theme, isActive }) => isActive && theme.palette.primary};
    transition: ${({ theme }) => theme.transition.primary};
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
      {...rest}
    >
      {icon && <Icon />}
      <Text>{name}</Text>
      {withChildren && <ArrowDown />}
    </Item>
  )
}

export default MenuItem
