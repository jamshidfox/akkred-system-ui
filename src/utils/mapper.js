import {
  compose,
  map,
  toLower,
  has,
  chain,
  toPairs,
  fromPairs,
  merge,
  reduce,
  filter,
  join,
  prop,
  is,
  split,
  tryCatch,
  always
} from 'ramda'
import { toSnake } from './toSnakeCase'

export const mapStrToBoolean = str => toLower(str) === 'true'

const decodeURLParam = val =>
  compose(
    tryCatch(JSON.parse, always(val)),
    decodeURIComponent
  )(val)
export const decodeURLParams = map(decodeURLParam)
/* eslint-disable-next-line */
const encodeURLParam = compose(
  encodeURIComponent,
  JSON.stringify
)
export const encodeURLParams = compose(
  fromPairs,
  map(([key, value]) => [key, value]),
  toPairs
)

const renameKeys = {
  rowsPerPage: 'page_size',
  ordering: 'ordering'
}

const mapValue = ([key, value]) => {
  // . if (moment.isMoment(value)) return [key, moment(value).format('YYYY-MM-DD')]
  if (is(Array, value)) return [key, map(prop('id'), value)]
  if (is(Object, value) && has('id', value)) return [key, prop('id', value)]

  return [key, value]
}

const mapD2D = ([key, value]) => {
  /* const startDate = prop('startDate', value)
    const endDate = prop('endDate', value)

    if (is(Object, value) &&
      startDate && moment.isMoment(startDate) &&
      endDate && moment.isMoment(endDate)) {
      return [[`${key}_0`, startDate.format('YYYY-MM-DD')], [`${key}_1`, endDate.format('YYYY-MM-DD')]]
    }
  */

  return [[key, value]]
}

const orderingToSnake = ([key, value]) => {
  if (key === 'ordering') {
    const snakeValue = compose(
      join(','),
      map(toSnake),
      split(',')
    )(value)
    return [key, snakeValue]
  }

  return [key, value]
}

const firstIndexToSnakeCase = map(item =>
  has(item[0], renameKeys)
    ? [[renameKeys[item[0]]], item[1]]
    : [[toSnake(item[0])], item[1]]
)

export const objectKeyToSnakeCase = compose(
  fromPairs,
  firstIndexToSnakeCase,
  toPairs
)

export const mapParamsToRequest = (...args) =>
  compose(
    fromPairs,
    firstIndexToSnakeCase,
    map(mapValue),
    chain(mapD2D),
    map(orderingToSnake),
    toPairs,
    filter(Boolean),
    reduce(merge, {})
  )(args)

export const filterParamsToUrl = (...args) =>
  compose(
    fromPairs,
    map(mapValue),
    chain(mapD2D),
    toPairs,
    filter(Boolean),
    reduce(merge, {})
  )(args)
