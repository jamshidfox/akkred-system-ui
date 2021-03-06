import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { path } from 'ramda'
import { CheckboxGroup, default as Checkbox } from '~/components/UI/Checkbox'

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
    labelPath,
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
          label={path(labelPath, checkbox)}
          checked={value.includes(checkbox.id)}
        />
      ))}
    </CheckboxGroup>
  )
}

CheckboxGroupField.defaultProps = {
  items: [],
  labelPath: ['name'],
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
