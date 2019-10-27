import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { SwitchContainer, SwitchInput, CheckMark } from '../Switches'

const RadioCheckMark = styled(CheckMark)`
  border-radius: 50%;
  background-color: #fff !important;
  :after {
  ${SwitchContainer}:hover & {
    background-color: ${props => props.theme.color.primary.hover};
  }
    background: ${props => props.theme.color.primary.default};
    border-radius: 50%;
    transform: scale(0);
    top: 2px;
    left: 2px;
    height: 75%;
    width: 75%;
    ${props =>
    props.error &&
      css`
        background: ${props => props.theme.color.danger.default};
      `}
  }
`

const StyledInput = styled(SwitchInput)`
  :checked + ${RadioCheckMark}:after {
    transform: scale(1);
  }
`

const RadioButton = ({ label, ...props }) => {
  return (
    <SwitchContainer disabled={props.disabled}>
      {label}
      <StyledInput {...props} type={'radio'} />
      <RadioCheckMark />
    </SwitchContainer>
  )
}

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  disabled: PropTypes.bool
}

export default RadioButton
