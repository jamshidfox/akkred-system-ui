import React from 'react'
import PropTypes from 'prop-types'
import { find, propEq } from 'ramda'
import SearchField, { defaultGetText, defaultGetValue } from '../Basic/MultiSearchField'

const getOptions = (search, list) => Promise.resolve(list)
const getOption = (id, list) => Promise.resolve(find(propEq('id', id))(list))

const UniversalStaticMultiSelect = props => {
  const { list, itemText } = props

  return (
    <SearchField
      getText={defaultGetText(itemText || ['name'])}
      getValue={defaultGetValue(['id'])}
      getOptions={search => getOptions(search, list)}
      getOption={id => getOption(id, list)}
      isMulti={true}
      {...props}
    />
  )
}

UniversalStaticMultiSelect.propTypes = {
  list: PropTypes.array.isRequired,
  itemText: PropTypes.array
}

export default UniversalStaticMultiSelect
