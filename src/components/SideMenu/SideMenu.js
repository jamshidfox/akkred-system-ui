import * as STATES from 'constants/stateNames'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { isNil, prop, propOr } from 'ramda'
import Menu from '../UI/Menu'
import MenuIcon from '../../icons/Menu'
import Notify from '../../icons/Notify'
import Exit from '../../icons/Exit'
import constants from './constants'
import { storageData } from '../../utils/storage'

const Box = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: ${({ open }) => open ? '296px' : '60px'};
  padding: 15px 8px;
  background: #ffffff;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  transition: ${({ theme }) => theme.transition.primary};
`
const TopSide = styled('div')``
const MenuWrapper = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  margin-bottom: 38px;
`
const MenuMainSide = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
`
const IconButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.primary};
  &:active{
    opacity: 0.7;
    transition: ${({ theme }) => theme.transition.primary};
  }
`
const MenuButton = styled(IconButton)`
  padding: 7px 16px;
  margin-right: 3px;
  & > svg{
    width: 35px;
    height: 35px;
  }
`
const NotifyButton = styled(IconButton)`
  position: relative;
  padding: 5px 7px;
  margin-left: auto;
  & > svg{
    width: 26px;
    height: 26px;
    stroke: #2c3a50;
  }
`
const Circle = styled('span')`
  display: ${({ open }) => open ? 'block' : 'none'};
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.palette.orange};
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-17px);
  right: 5px;
  border: 2px solid #fff;
  border-radius: 100%;
`
const Title = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  letter-spacing: 0.5px;
  margin-right: 5px;
  user-select: none;
  & > *{
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h2{
    font-size: ${({ withSubtitle }) => withSubtitle ? '14px' : '18px'};
    line-height: ${({ withSubtitle }) => withSubtitle ? '16px' : '20px'};
    font-weight: 600;
    color: ${({ theme }) => theme.text.primary};
  }
  h3{
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text.secondary};
  }
`
const LogOut = styled('div')``
const LogOutBtn = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  margin-top: 20px;
  min-width: 140px;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  color: ${({ theme }) => theme.palette.primary};
  background: #f1f3f5;
  border: none;
  min-height: 36px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.button};
  cursor: pointer;
  outline: none;
  transition: ${({ theme }) => theme.transition.primary};
  user-select: none;
  &:active{
    opacity: 0.9;
    transition: ${({ theme }) => theme.transition.primary};
  }
  svg{
    margin-right: 6px;
    width: 16px;
    height: 16px;
    stroke: transparent;
  }
`

const SideMenu = () => {
  // Storage
  const isOpenMenuStorage = storageData('isOpenMenu').getValue()
  const isOpenMenuInitial = isOpenMenuStorage === null || isOpenMenuStorage === true

  // States
  const [isOpenMenu, setIsOpenMenu] = useState(isOpenMenuInitial)

  // Data
  const userInfo = useSelector(prop(STATES.USER_INFO))
  const userInfoData = prop('data', userInfo)

  // Const
  const fullName = propOr('E-accreditation', 'fullName', userInfoData)
  const email = propOr('Email не указан', 'email', userInfoData)

  // Handlers
  const handleToggleMenu = () => {
    const value = !isOpenMenu

    setIsOpenMenu(value)
    storageData('isOpenMenu').setValue(value)
  }

  // Render
  return (
    <Box
      open={isOpenMenu}
    >
      <TopSide>
        <MenuWrapper>
          <MenuMainSide>
            <MenuButton
              onClick={handleToggleMenu}
            >
              <MenuIcon style={{ verticalAlign: 'text-bottom' }} />
            </MenuButton>
            <Title
              withSubtitle={!!email}
            >
              <h2>{fullName}</h2>
              {email && <h3>{email}</h3>}
            </Title>
          </MenuMainSide>
          <NotifyButton>
            <Notify />
            <Circle
              open={true}
            />
          </NotifyButton>
        </MenuWrapper>
        <Menu
          list={constants}
          isOpenMenu={isOpenMenu}
        />
      </TopSide>
      <LogOut>
        <LogOutBtn>
          <Exit />
          Выйти
        </LogOutBtn>
      </LogOut>
    </Box>
  )
}

export default SideMenu
