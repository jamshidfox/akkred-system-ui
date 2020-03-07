import React from 'react'
import PropTypes from 'prop-types'
import ValueContainer from './ValueContainer'
import MultiValue from './MultiValue'
import Option from './Option'
import Select from '~/components/UI/Select'

const selectComponents = {
  ValueContainer,
  MultiValue,
  Option
}

const MultiSelect = props => {
  const { isNested } = props

  return (
    <Select
      {...props}
      isMulti={true}
      isNested={isNested}
      components={selectComponents}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
    />
  )
}

MultiSelect.propTypes = {
  isNested: PropTypes.bool
}

MultiSelect.defaultProps = {
  isNested: false
}

export default MultiSelect
