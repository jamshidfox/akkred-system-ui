import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled('input')`
  background: ${({ theme }) => theme.input.background};
  border: ${({ theme }) => theme.input.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: inherit;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  outline: none;
  width: 100%;
  height: 48px;
  line-height: 24px;
  padding: ${({ prefix }) => `0 17px 0 ${prefix ? '45px' : '17px'}`};
  transition: ${({ theme }) => theme.transition.primary};
  &:disabled {
    background: #fafbfc;
    pointer-events: none;
    color: ${({ theme }) => theme.color.disabled};
    transition: ${({ theme }) => theme.transition.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.input.placeholderColor};
    font-weight: 400;
    transition: ${({ theme }) => theme.transition.primary};
  }
  &:hover {
    background: ${({ theme }) => theme.background.inputHover};
    transition: ${({ theme }) => theme.transition.primary};
  }
  &:focus {
    background: ${({ theme }) => theme.palette.white};
    border-color: ${({ theme }) => theme.palette.primary};
    transition: ${({ theme }) => theme.transition.primary};
  }
`

const InputBase = ({ onKeyPress, onEnter, ...props }) => {
  const onPress = ev => {
    if (onEnter && ev.key === 'Enter') {
      return onEnter(ev, ev.target.value)
    }
    return onKeyPress && onKeyPress(ev, ev.target.value)
  }
  return <Input {...props} onKeyPress={onPress} />
}

InputBase.propTypes = {
  onKeyPress: PropTypes.func,
  onEnter: PropTypes.func
}

export default InputBase
