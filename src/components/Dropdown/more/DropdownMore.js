import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import MoreVertical from 'icons/MoreVertical'
import PropTypes from 'prop-types'

// Styles
const MoreButton = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Dropdown = styled('ul')`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  opacity: ${({ open }) => open ? 1 : 0};
  padding: 5px;
  transform: translateY(100%);
  min-width: 180px;
  background: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  z-index: ${({ open }) => open ? 1000 : -1000};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  overflow: hidden;
`
const DropdownItem = styled('li')`
  list-style: none;
  padding: 12px 16px;
  user-select: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  &:hover{
    background: ${({ theme }) => theme.background.linkHover};
  }
  &:not(:last-child){
    margin-bottom: 3px;
  }
`

// Component
const DropdownMore = props => {
  const {
    element = 'td',
    moreList = [],
    styles
  } = props

  // useState
  const [open, setOpen] = useState(false)

  // WrapStyle
  const MainWrap = styled(element)`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50px;
    margin-left: auto;
    & > div:first-child > svg{
      width: 20px;
      height: 20px;
      color: ${({ theme, open }) => open ? theme.palette.primary : theme.text.secondary};
      transition: ${({ theme }) => theme.transition.primary};
      stroke-width: 2px;
    }
    &:active{
      & > div:first-child > svg {
        color: ${({ theme }) => theme.palette.primary};
        transition: ${({ theme }) => theme.transition.primary};
      }
    }
    ${({ styles }) => styles};
  `

  // Ref
  const buttonRef = useRef(null)
  const dropdownRef = useRef(null)

  // Handlers
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // useEffect
  useEffect(() => {
    const listener = event => {
      if (
        open &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        handleClose()
      } else if (
        dropdownRef.current.contains(event.target) ||
        buttonRef.current.contains(event.target)
      ) {
        handleClose()
      }
    }
    window.addEventListener('click', listener)
    return () => window.removeEventListener('click', listener)
    // eslint-disable-next-line
  }, [open])

  // Button
  const button =
    <MoreButton
      onClick={handleOpen}
      ref={buttonRef}
    >
      <MoreVertical />
    </MoreButton>

  // Dropdown
  const dropdown =
    <Dropdown
      open={open}
      ref={dropdownRef}
    >
      {moreList.map((item, index) => {
        const {
          name,
          onClick
        } = item

        return (
          <DropdownItem
            onClick={onClick}
            key={index}
          >
            {name}
          </DropdownItem>
        )
      })}
    </Dropdown>

  // Render
  return (
    <MainWrap
      open={open}
      styles={styles}
    >
      {button}
      {dropdown}
    </MainWrap>
  )
}

// PropTypes
DropdownMore.propTypes = {
  moreList: PropTypes.array.isRequired,
  element: PropTypes.string,
  styles: PropTypes.object
}

export default DropdownMore
