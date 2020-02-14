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
  font-size: 20px;
  position: absolute;
  top: 50%;
  right: 15px;
  transition: all 300ms;
  transform: translateY(-50%);
`

const StyledInput = styled(props => <InputBase {...props} />)`
  + svg {
//    fill: ${props => props.theme.color.basic.default};
  }
  :focus + svg {
    path {
      stroke: ${props => props.theme.color.primary.default};
  }
    color: ${props =>
    props.error ? props.theme.color.danger.default : props.theme.color.primary.default};
  }
`

const IconInput = ({ icon, label, ...props }) => {
  const Icon = InputIcon(icon)
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
  icon: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any
}

export default IconInput
