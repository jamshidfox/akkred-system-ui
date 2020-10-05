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
const IconWrap = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #b2b7bf;
`
const StyledInput = styled(InputBase)`
  & + span > svg{
    transition: ${({ theme }) => theme.transition.primary};
  }
  &:focus + span > svg{
    color: ${({ theme }) => theme.palette.primary};
    transition: ${({ theme }) => theme.transition.primary};
  }
`

const IconInput = ({ prefix, label, ...props }) => {
  // Render
  return (
    <StyledWrapper error={props.error}>
      <InputLabel>{label}</InputLabel>
      <InputWrapper prefix={prefix} >
        <StyledInput {...props} />
        {prefix &&
        <IconWrap>{prefix()}</IconWrap>}
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
