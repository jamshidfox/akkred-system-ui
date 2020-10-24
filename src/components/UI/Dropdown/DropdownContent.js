import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Portal from '../Portal'
import AnimationWrapper from '../AnimationWrapper'
import Trigger from './Trigger'

const MenuList = styled('div')`
  background: #fff;
  border: 1px solid ${({ theme }) => theme.borderColor.input};
  border-radius: ${props => props.theme.input.borderRadius};
  box-shadow: ${props => props.theme.cube.boxShadow};
  padding: 7px;
  opacity: ${props => (props.fadeType === 'in' ? '1' : '0')};
  visibility: ${props => (props.fadeType === 'in' ? 'visible' : 'hidden')};
  position: fixed;
  width: 260px;
  z-index: 1100;
  transition: opacity 300ms, visibility 300ms;
`

const DropdownContent = props => {
  const {
    open,
    triggerBounds,
    toggleMenu,
    children,
    trigger: TriggerComponent = Trigger,
    triggerRef,
    fadeType,
    isRendered,
    backgroundColor,
    dotColor,
    ...rest
  } = props

  const menuListStyles = {
    top: triggerBounds.top + triggerBounds.height + 7,
    left: triggerBounds.left + triggerBounds.width - 260
  }

  return (
    <React.Fragment>
      <TriggerComponent
        data-cy="dropdown-trigger"
        isOpen={open}
        innerRef={triggerRef}
        onClick={toggleMenu}
        mode={rest.mode}
        backgroundColor={backgroundColor}
        dotColor={dotColor}
        defaultTrigger={Trigger}
      />
      {isRendered && (
        <Portal>
          <MenuList fadeType={fadeType} style={menuListStyles}>
            {React.Children.map(children, (child, key) => {
              return React.cloneElement(child, { key, toggleMenu, ...child.props })
            })}
          </MenuList>
        </Portal>
      )}
    </React.Fragment>
  )
}

DropdownContent.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  triggerBounds: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  trigger: PropTypes.func,
  triggerRef: PropTypes.object.isRequired,
  fadeType: PropTypes.oneOf([null, 'in', 'out']),
  isRendered: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  dotColor: PropTypes.string,
}

export default AnimationWrapper(DropdownContent)
