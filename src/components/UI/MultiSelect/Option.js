import React from 'react'
import PropTypes from 'prop-types'
import { __, equals, filter, includes, length, map, not, pipe, propOr } from 'ramda'
import { components } from 'react-select'
import styled from 'styled-components'
import Checkbox from '~/components/UI/Checkbox'

const StyledCheckbox = styled(Checkbox)`
  pointer-events: none;
`

const getParentCheckboxState = (selectedOptions, parentOptions) => {
  const parentOptionsCount = length(parentOptions)
  const checkedParentOptionsCount = pipe(
    map(includes(__, selectedOptions)),
    filter(Boolean),
    length
  )(parentOptions)

  const checked = equals(parentOptionsCount, checkedParentOptionsCount)
  const indeterminate = checkedParentOptionsCount > 0 && not(checked)

  return { checked, indeterminate }
}

const Option = props => {
  const {
    data,
    value,
    label,
    isSelected,
    selectProps,
    getValue,
    setValue
  } = props
  const { isNested } = selectProps

  if (isNested) {
    const selectedOptions = getValue()
    const child = propOr([], 'child', data)
    const parentCheckboxState = getParentCheckboxState(selectedOptions, child)

    return (
      <div
        className={'parent'}
        style={{ marginBottom: 30 }}>
        <Checkbox
          value={value}
          label={label}
          onChange={checked => {
            if (checked) {
              setValue(child)
            }
          }}
          {...parentCheckboxState}
        />
        {child.map(item => {
          return (
            <div
              key={item.value}
              style={{ marginBottom: 10 }}>
              {item.label} - {item.value}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <components.Option {...props}>
      <StyledCheckbox
        value={value}
        label={label}
        checked={isSelected}
      />
    </components.Option>
  )
}

Option.propTypes = {
  value: PropTypes.any,
  label: PropTypes.any,
  data: PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.any,
    children: PropTypes.array,
  }),
  isSelected: PropTypes.bool.isRequired,
  selectProps: PropTypes.object.isRequired,
  getValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default Option
