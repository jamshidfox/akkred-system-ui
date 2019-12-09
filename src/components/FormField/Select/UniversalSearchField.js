import React from 'react'
import PropTypes from 'prop-types'
import { compose, pure } from 'react-fc'
import { pathOr } from 'ramda'
import { useStore } from 'react-redux'
import SearchField, {
  defaultGetText,
  defaultGetValue
} from '../Basic/SearchField'
import axios, { getPayloadFromSuccess } from '../../../utils/axios'
import toSnakeCase from '../../../utils/toSnakeCase'

const enhance = compose(pure)

const getOptions = (store, { api, search, params, pageSize = 5 }) => {
  const defaultParams = toSnakeCase({ pageSize, search, ...params })
  return axios(store)
    .get(api, { params: defaultParams })
    .then(pathOr([], ['data', 'results']))
}

const getOption = (store, { api }) => id => {
  console.warn(api)
  return axios(store)
    .get(`${api}${id}/`)
    .then(getPayloadFromSuccess)
}

const UniversalSearchField = props => {
  const { api, params, itemText, ...rest } = props
  const store = useStore()
  return (
    <SearchField
      getText={defaultGetText(itemText || ['name'])}
      getValue={defaultGetValue(['id'])}
      getOptions={search => getOptions(store, { api, params, search })}
      getOption={getOption(store, { api, params })}
      {...rest}
    />
  )
}

UniversalSearchField.propTypes = {
  store: PropTypes.object.isRequired,
  api: PropTypes.string.isRequired,
  params: PropTypes.object,
  itemText: PropTypes.array
}

export default enhance(UniversalSearchField)
