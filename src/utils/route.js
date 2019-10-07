import {
  curry,
  compose,
  defaultTo,
  path,
  assoc,
  __,
  prop,
  filter,
  join,
  append,
  not,
  split,
  endsWith,
  isEmpty
} from 'ramda'

import { appendParamsToUrl, parseParams } from './urls'

export const redirect = curry(({ pathname, params }, history) =>
  compose(
    history.push,
    appendParamsToUrl(params),
    defaultTo(path(['location', 'pathname'], history))
  )(pathname)
)

export const addParamsRoute = curry((params, history) =>
  compose(
    redirect(__, history),
    assoc('pathname', __, {}),
    appendParamsToUrl(params),
    path(['location', 'search'])
  )(history)
)

export const replace = curry(({ pathname, params }, history) =>
  compose(
    history.replace,
    appendParamsToUrl(params),
    defaultTo(path(['location', 'pathname'], history))
  )(pathname)
)

export const replaceParamsRoute = curry((params, history) =>
  compose(
    replace(__, history),
    assoc('pathname', __, {}),
    appendParamsToUrl(params),
    path(['location', 'search'])
  )(history)
)

export const nextOrderingParams = (url, keyValue, key = 'ordering') => {
  const params = parseParams(url)
  const sortValues = prop(key, params) || ''

  const value = prop('key', keyValue)
  const state = prop('state', keyValue)
  const possibleValue = { null: value, asc: `-${value}`, desc: '' }
  const newValue = compose(
    join(','),
    filter(
      compose(
        not,
        isEmpty
      )
    ),
    append(prop(state, possibleValue)),
    filter(
      compose(
        not,
        endsWith(value)
      )
    ),
    split(',')
  )(sortValues)

  return { [key]: newValue }
}
