import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowDown from '../../../icons/ArrowDown'
import Grid from '../../../icons/Grid'

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
  padding: ${({ smart }) => smart ? 0 : '10px 14px 10px 52px'};
  margin: ${({ isSub, withChildren, smart }) =>
    `${isSub ? '10px' : '20px'} 0 ${withChildren ? '0' : isSub ? '10px' : '20px'} ${(isSub && !smart) ? '17px' : '0'}`};
  user-select: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  background: ${({ theme, isActive }) => isActive && theme.palette.secondary};
  color: ${({ theme, isActive }) => isActive && theme.palette.primary};
  border-radius: 8px;
  min-height: 40px;
  height: 40px;
  transition: ${({ theme }) => theme.transition.primary};
  &:first-child{
    margin-top: ${({ isSub }) => isSub && '20px'};
  }
  & svg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    transition: ${({ theme }) => theme.transition.primary};
    &:first-child{
      left: ${({ smart }) => smart ? '11px' : '18px'};
      color: ${({ theme, isActive }) => isActive ? theme.palette.primary : '#7d8893'};
    }
    &:last-child{
      width: ${({ smart }) => smart && '12px'};
      height: ${({ smart }) => smart && '12px'};
      right: ${({ smart }) => smart ? '3px' : '9px'};
      top: ${({ smart }) => smart && 'unset'}
      bottom: ${({ smart }) => smart && '3px'}
      stroke-width: ${({ smart }) => smart ? '4px' : '2px'};
      color: ${({ theme, isActive }) => isActive ? theme.palette.primary : '#7d8893'};
      transform: ${({ isActive, smart }) => (smart && isActive) ? 'rotate(-180deg)' : (smart && !isActive) ? 'rotate(0)' : isActive &&
      'translateY(-50%) rotate(-180deg)'};
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
      color: ${({ theme }) => theme.palette.primary}
      transition: ${({ theme }) => theme.transition.primary};
    }
    & svg:last-child * {
      color: ${({ theme }) => theme.palette.primary}
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
    onClick,
    disabled,
    ...rest
  } = props

  // Render
  return (
    <Item
      to={withChildren ? '#' : url}
      isActive={isActive || (url === pathname)}
      onClick={onClick}
      isSub={isSub}
      withChildren={withChildren}
      disabled={disabled}
      smart={smart}
      {...rest}
    >
      {icon ? icon() : <Grid />}
      <Text
        smart={smart}
      >
        {name}
      </Text>
      {withChildren &&
      <ArrowDown />}
    </Item>
  )
}

export default MenuItem
