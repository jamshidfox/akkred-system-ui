import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { components } from 'react-select'
import { head } from 'ramda'

const RSValueContainer = components.ValueContainer

const StyledContainer = styled(RSValueContainer)`
  padding: 10px 20px !important;
`

const More = styled('span')`
  font-size: 14px;
  margin-left: 5px;
`

const ValueContainer = props => {
  const { hasValue, children, ...restProps } = props

  const [values, input] = children

  const firstValue = head(values)
  const valuesCount = values.length
  const valuesLeftCount = valuesCount - 1

  if (hasValue) {
    return (
      <StyledContainer hasValue={hasValue} {...restProps}>
        {firstValue}
        {valuesLeftCount > 0 && (
          <More>еще {valuesLeftCount}...</More>
        )}
        {input}
      </StyledContainer>
    )
  }

  return (
    <StyledContainer {...props} />
  )
}

ValueContainer.propTypes = {
  hasValue: PropTypes.bool,
  getStyles: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default ValueContainer
