import React from 'react'
import PropTypes from 'prop-types'
import {
  equals, filter, includes,
  length, map, not, pipe, propOr,
  prop, find, propEq, isNil
} from 'ramda'
import { components } from 'react-select'
import styled from 'styled-components'
import Checkbox from '~/components/UI/Checkbox'

const StyledCheckbox = styled(Checkbox)`
  pointer-events: none;
  margin-left: ${props => props.isChild ? '16px' : 'unset'};
`

const getParentCheckboxState = (parentValue, selectedOptions, parentOptions) => {
  const selectedOptionsIds = map(prop('id'), selectedOptions)
  const parentOptionsCount = length(parentOptions)
  const checkedParentOptionsCount = pipe(
    map(child => {
      const childId = prop('id', child)
      return includes(childId, selectedOptionsIds)
    }),
    filter(Boolean),
    length
  )(parentOptions)

  const checked = equals(parentOptionsCount, checkedParentOptionsCount)
  const indeterminate = checkedParentOptionsCount > 0 && not(checked)

  return {
    [parentValue]: { checked, indeterminate }
  }
}

const Option = props => {
  const {
    data,
    value,
    label,
    isSelected,
    selectProps,
    getValue,
    setValue,
    selectOption,
    getStyles,
    ...restProps
  } = props

  const { isNested } = selectProps

  if (isNested) {
    const selectedOptions = getValue()
    const child = propOr([], 'child', data)
    const parentCheckboxState = getParentCheckboxState(value, selectedOptions, child)[value]

    return (
      <div className={'parent'}>
        <div
          style={getStyles('option', {
            theme: restProps.theme,
            isSelected: parentCheckboxState.checked
          })}
          onClick={() => {
            if (parentCheckboxState.checked) {
              const childIds = map(prop('id'), child)
              const filteredOptions = pipe(
                filter(item => pipe(
                  includes(prop('id', item)),
                  not
                )(childIds)),
              )(selectedOptions)
              setValue(filteredOptions)
            } else {
              setValue([...selectedOptions, ...child])
            }
          }}>
          <StyledCheckbox
            value={value}
            label={label}
            {...parentCheckboxState}
          />
        </div>
        {child.map(item => {
          const id = prop('id', item)
          const name = prop('name', item)
          const isChecked = pipe(
            find(propEq('id', id)),
            isNil,
            not
          )(selectedOptions)

          return (
            <div
              key={id}
              onClick={() => selectOption(item)}
              style={getStyles('option', {
                theme: restProps.theme,
                isSelected: isChecked
              })}>
              <StyledCheckbox
                value={id}
                label={name}
                checked={isChecked}
                isChild={true}
              />
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
  selectOption: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
}

export default Option
