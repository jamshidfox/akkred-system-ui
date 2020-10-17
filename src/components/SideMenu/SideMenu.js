import * as STATES from 'constants/stateNames'
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { prop, propOr } from 'ramda'
import PropTypes from 'prop-types'
import Menu from '../UI/Menu'
import MenuIcon from '../../icons/Menu'
import Exit from '../../icons/Exit'
import { storageData } from '../../utils/storage'
import constants from './constants'

// Styles
const Box = styled('div')`
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: calc(100vh - 40px);
  max-height: calc(100vh - 40px);
  width: ${({ theme, open }) => open ? theme.width.mainMenu.open : theme.width.mainMenu.close};
  min-width: ${({ theme, open }) => open ? theme.width.mainMenu.open : theme.width.mainMenu.close};
  padding: 15px 0;
  background: #ffffff;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  transition: ${({ theme }) => theme.transition.primary};
`
const MenuList = styled('div')`
  max-height: calc(100vh - 40px - 30px - 79px - 82px);
  overflow-y: hidden;
  transition: ${({ theme }) => theme.transition.primary};
  &:hover{
    overflow-y: auto;
    transition: ${({ theme }) => theme.transition.primary};
  }
  ::-webkit-scrollbar{
    width: 2px;
    height: 2px;
  }
`
const MenuWrapper = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 38px;
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
  padding: ${({ smart }) => smart ? '7px 4px' : '7px 16px'};
  margin-left: ${({ smart }) => smart && '8px'};
  margin-right: ${({ smart }) => !smart && '3px'};
  & > svg{
    width: 35px;
    height: 35px;
  }
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
const LogOut = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 8px 10px;
  margin: 35px auto 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  color: ${({ theme }) => theme.palette.primary};
  background: #f1f3f5;
  border: none;
  min-height: 36px;
  width: ${({ smart }) => smart ? '44px' : '140px'};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  cursor: pointer;
  outline: none;
  transition: ${({ theme }) => theme.transition.primary};
  user-select: none;
  svg{
    width: 16px;
    min-width: 16px;
    height: 16px;
    margin: 0 6px;
    stroke-width: 3px;
    transition: ${({ theme }) => theme.transition.primary};
  }
  span{
    opacity: ${({ smart }) => smart && '0'};
    overflow: hidden;
    transition: ${({ theme }) => theme.transition.primary};
  }
  &:active{
    opacity: 0.7;
    transition: ${({ theme }) => theme.transition.primary};
  }
`

const SideMenu = props => {
  const {
    open,
    setOpen
  } = props

  // Data
  const userInfo = useSelector(prop(STATES.USER_INFO))
  const userInfoData = prop('data', userInfo)

  // Const
  const fullName = propOr('E-accreditation', 'fullName', userInfoData)
  const email = propOr('Email не указан', 'email', userInfoData)

  // Handlers
  const handleToggleMenu = () => {
    const value = !open

    setOpen(value)
    storageData('isOpenMenu').setValue(value)
  }

  // Render
  return (
    <Box
      open={open}
    >
      <div>
        <MenuWrapper>
          <MenuButton
            onClick={handleToggleMenu}
            smart={!open}
          >
            <MenuIcon style={{ verticalAlign: 'text-bottom' }} />
          </MenuButton>
          {open &&
          <Title
            withSubtitle={!!email}
          >
            <h2>{fullName}</h2>
            {email && <h3>{email}</h3>}
          </Title>}
        </MenuWrapper>
        <MenuList>
          <Menu
            list={constants}
            open={open}
          />
        </MenuList>
      </div>
      <LogOut
        smart={!open}
      >
        <Exit />
        <span>Выйти</span>
      </LogOut>
    </Box>
  )
}

SideMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default SideMenu
