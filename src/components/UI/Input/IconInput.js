import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputLabel from '../InputLabel'
import InputError from '../InputError'
import InputBase from './InputBase'
import InputWrapper from './InputWrapper'

const StyledWrapper = styled(InputWrapper)`
  position: unset;
`
const InputIcon = icon => styled(icon)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #b2b7bf;
`
const StyledInput = styled(InputBase)`
  & + svg{
    transition: ${({ theme }) => theme.transition.primary};
  }
  &:focus + svg{
    color: ${({ theme }) => theme.palette.primary};
    transition: ${({ theme }) => theme.transition.primary};
  }
`

const IconInput = ({ prefix, label, ...props }) => {
  // Icon
  const Icon = InputIcon(prefix)

  // Render
  return (
    <StyledWrapper error={props.error}>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <StyledInput {...props} />
        <Icon />
      </InputWrapper>
      <InputError>{props.error}</InputError>
    </StyledWrapper>
  )
}

IconInput.propTypes = {
  prefix: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any
}

export default IconInput
