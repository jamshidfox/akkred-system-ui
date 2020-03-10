import React from 'react'
import { CheckboxGroup, default as Checkbox } from '~/components/UI/Checkbox'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCheckbox = styled(Checkbox)`
  width: ${props => props.width};
  vertical-align: top;
  display: inline-block;
`

const CheckboxGroupField = props => {
  const {
    items,
    label,
    mode,
    width,
    input: { value, checked, ...input }
  } = props

  return (
    <CheckboxGroup
      label={label}
      mode={mode}
      value={value}
      onChange={input.onChange}
    >
      {items.map(checkbox => (
        <StyledCheckbox
          width={width}
          onChange={() => null}
          key={checkbox.id}
          value={checkbox.id}
          label={checkbox.name}
          checked={value.includes(checkbox.id)}
        />
      ))}
    </CheckboxGroup>
  )
}

CheckboxGroupField.defaultProps = {
  items: [],
  mode: 'inline',
  width: '100%'
}
CheckboxGroupField.propTypes = {
  input: PropTypes.object,
  items: PropTypes.shape([{
    id: PropTypes.any,
    name: PropTypes.string
  }]).isRequired,
  label: PropTypes.string,
  mode: PropTypes.string,
  width: PropTypes.string
}
export default CheckboxGroupField
