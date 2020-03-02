import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { components } from 'react-select'

const RSValueContainer = components.ValueContainer

const StyledContainer = styled(RSValueContainer)`
  padding: 10px 20px !important;
`

const ValueContainer = props => {
  return (
    <StyledContainer {...props} />
  )
}

ValueContainer.propTypes = {
  getStyles: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default ValueContainer
