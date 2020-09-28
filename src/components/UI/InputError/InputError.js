import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Error = styled.div`
  background-color: #ffe2e9;
  border-radius: ${props => props.theme.borderRadius.primary};
  color: ${props => props.theme.color.danger.default};
  font-size: 13px;
  margin-top: 8px;
  padding: 8px 20px;
  &:empty {
    display: none;
  }
`

const InputError = props => {
  const { children, ...rest } = props
  return (
    <Error {...rest} dangerouslySetInnerHTML={{ __html: children }} />
  )
}

InputError.propTypes = {
  children: PropTypes.string
}

export default InputError
