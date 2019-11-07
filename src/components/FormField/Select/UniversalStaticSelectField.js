import React from 'react'
import PropTypes from 'prop-types'
import { propEq, find } from 'ramda'
import SearchField, {
  defaultGetText,
  defaultGetValue
} from '../Basic/SearchField'

const getOptions = (search, ITEMS) => Promise.resolve(ITEMS)
const getOption = (id, ITEMS) => Promise.resolve(find(propEq('id', id))(ITEMS))

const UniversalStaticSelectField = props => {
  const { list, itemText } = props
  return (
    <SearchField
      getText={defaultGetText(itemText || ['name'])}
      getValue={defaultGetValue(['id'])}
      getOptions={search => getOptions(search, list)}
      getOption={id => getOption(id, list)}
      {...props}
    />
  )
}

UniversalStaticSelectField.propTypes = {
  list: PropTypes.array.isRequired,
  itemText: PropTypes.array
}

export default UniversalStaticSelectField
