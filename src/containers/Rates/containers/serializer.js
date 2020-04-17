import {
  curry,
  equals,
  find,
  flatten,
  isEmpty,
  map,
  path,
  pipe,
  prop,
  propOr,
  range,
  when
} from 'ramda'
import toSnakeCase from '~/utils/toSnakeCase'
import { getSerializedData } from '~/utils/get'

const ONE = 1
export const capCatergoryEq = curry((data, item) => {
  const capacity = item.capacity
  const hotelRoomCategory = path(['hotelRoomCategory', 'id'], item)
  return equals(data, { capacity, hotelRoomCategory })
})

export const formulateRates = (categoryList, rates) => categoryList.map(category => {
  const capacity = path(['capacity'], category)
  const id = path(['id'], category)
  const TO = capacity + ONE

  return range(ONE, TO).map(cap => {
    const rateFeatures = { capacity: cap, hotelRoomCategory: id }
    const rate = find(capCatergoryEq(rateFeatures))(rates)
    return {
      ...rate,
      id: undefined,
      capacity: cap,
      hotelRoomCategory: id,

    }
  })
})
const EMPTY_ARR = []
export const formulatePartnerRates = (partnerList, categoryList) =>
  partnerList.map(item => ({
    ...item,
    individualRates: formulateRates(categoryList, propOr(EMPTY_ARR, 'individualRates', item))
  }))

// const a = (b) => {console.warn(b); return b}
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

const PARTNER_FIELDS = ['discountType', 'partners', 'discountPrice', 'rates', 'partnerType', 'id']
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

export const getFirstProp = (name, values) => path([0, name], values)
export const isEmptyAddObject = when(isEmpty, () => [{}])
