import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import InputLabel from '../InputLabel'
import InputError from '../InputError'

const Container = styled('div')`
  position: relative;
  ${props =>
    props.error &&
    css`
      & ${InputLabel} {
        color: ${props => props.theme.cube.colorRed};
      }
    `}
`

const TextArea = styled('textarea')`
  background: white;
  border-radius: 50px;
  border: 1px solid transparent;
  color: inherit;
  display: block;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  padding: 20px;
  min-height: 160px;
  resize: none;
  width: 100%;

  ::placeholder {
    color: black;
  }

  :hover {
    background: #bab1b1;
  }

  :focus {
    background: white;
    border-color: #bab1b1;
  }
`

const TextAreaCUI = ({ children, label, error, ...rest }) => {
  const onChange = event => {
    if (typeof rest.onChange === 'function') {
      rest.onChange(event)
    }
  }
  return (
    <Container error={error}>
      <InputLabel>{label}</InputLabel>
      <TextArea {...rest} error={error} onChange={onChange} />
      <InputError>{error}</InputError>
    </Container>
  )
}

TextAreaCUI.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string
}

export default TextAreaCUI
