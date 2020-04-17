import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import hexToRgb from '~/utils/hexToRgb'

const Switch = styled('label')`
  pointer-events: ${props => props.disabled ? 'none' : 'unset'};
  position: relative;
  display: inline-block;
  width: 52px;
  height: 32px;
`

const Checkbox = styled('input')`
  opacity: 0;
  width: 0;
  height: 0;
`

const Slider = styled('span')`
  border: 1px solid #C5CEE0;
  border-radius: 50px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => hexToRgb(props.theme.color.basic.default, '0.16')};
  transition: 400ms;
  &:before {
    border-radius: 50%;
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    top: 2px;
    left: 2px;
    background-color: white;
    transition: 400ms;
  }
  
  ${Checkbox}:checked + & {
    background-color: ${props => props.theme.color.primary.default};
    &:before {
      transform: translateX(20px);
    }
  }
`

const Toggle = props => {
  const { onChange, disabled, checked, ...restProps } = props

  const onChecked = event => {
    if (typeof onChange === 'function' && !disabled) {
      onChange(event.target.checked, event)
    }
  }

  return (
    <div>
      <Switch disabled={disabled}>
        <Checkbox
          {...restProps}
          onChange={onChecked}
          checked={checked}
          type="checkbox"
        />
        <Slider />
      </Switch>
    </div>
  )
}

Toggle.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
}

export default Toggle
