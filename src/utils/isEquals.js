import {
  compose,
  pick,
  equals,
  curry,
  either,
  not,
  isEmpty,
  filter,
  isNil
} from 'ramda'
import { parseParams } from './urls'

export const DEFAULT_PICK_PARAMS = ['search', 'page', 'ordering']

const getPickParamsFromSearch = (pickParams, search) =>
  compose(
    filter(
      compose(
        not,
        either(isNil, isEmpty)
      )
    ),
    pick(pickParams),
    parseParams
  )(search)

export const isEqualSearch = curry((pickParams, prev, current) =>
  equals(
    getPickParamsFromSearch(pickParams, prev),
    getPickParamsFromSearch(pickParams, current)
  )
)
