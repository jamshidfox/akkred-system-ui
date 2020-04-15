import {curry, equals, flatten, isEmpty, map, path, pipe, prop, propOr, when} from 'ramda'
import toSnakeCase from '~/utils/toSnakeCase'
import { getSerializedData } from '~/utils/get'

//const a = (b) => {console.warn(b); return b}
const getRates = (name, values) => pipe(
 // a,
  propOr([], name),
  flatten,
 // a,
  map(toSnakeCase)
)(values)

export const serializer = (val) => {
  const rates = getRates('rates', val)
  return {
    ...toSnakeCase(val),
    rates
  }
}

const PARTNER_FIELDS = ['discountType', 'partners', 'discountPrice', 'rates', 'partnerType']
export const partnerSerializer = (values) => {
  const touristTax = prop('touristTax', values)
  const nds = prop('nds', values)
  const data = pipe(
    prop('partnerRates'),
    map(price => toSnakeCase({
      ...getSerializedData(PARTNER_FIELDS, price),
      touristTax,
      nds,
      individualRates: getRates('individualRates', price)
    }))
  )(values)
  return data
}

export const capCatergoryEq = curry((data, item) => {
  const capacity = item.capacity
  const hotelRoomCategory = path(['hotelRoomCategory', 'id'], item)
  return equals(data, { capacity, hotelRoomCategory })
})

export const getFirstProp = (name, values) => path([0, name], values)
export const isEmptyAddObject = when(isEmpty, () => [{}])
