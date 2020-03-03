import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Value = styled('span')`
  font-size: 14px;
  &:not(:last-of-type) {
    position: relative;
    margin-right: 5px;
    &:after {
      content: ",";
    }
  }
`

const MultiValue = props => {
  const { children } = props

  return (
    <Value>
      {children}
    </Value>
  )
}

MultiValue.propTypes = {
  children: PropTypes.node,
}

export default MultiValue
