import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  background: ${props => props.theme.input.background};
  border: ${props => props.theme.input.border};
  border-radius: ${props => props.theme.borderRadius};
  color: inherit;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  outline: none;
  height: 48px;
  line-height: 24px;
  padding: 0 16px;
  transition: all 300ms;
  width: 100%;
  
  :disabled {
    background-color: #fafbfc;
    pointer-events: none;
    color: ${props => props.theme.color.disabled};
  }

  ::placeholder {
    color: ${props => props.theme.input.placeholderColor};
    font-weight: 400;
  }
  ::-ms-input-placeholder {
    color: ${props => props.theme.input.placeholderColor};
    font-weight: 400;
  }

  :hover {
    background: ${props => props.theme.input.backgroundColorHover};
  }

  :focus {
    background: white;
    border-color: ${props => props.theme.color.primary.default};
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
