import { path, prop } from 'ramda'
import toSnakeCase from '../../../utils/toSnakeCase'

export const mapBranches = (item) => toSnakeCase({
  phoneNumber: prop('phoneNumber', item),
  fullName: prop('fullName', item),
  address: prop('address', item),
  id: prop('id', item),
})

export const mapDocument = (item) => toSnakeCase({
  file:path(['file', 'id'], item),
  name: prop('name', item),
})

export const mapTravelData = (item) => toSnakeCase({
  type:path(['type', 'id'], item),
  name: prop('name', item),
  count: prop('count', item),
  price: prop('price', item),
})

export const mapExperts = (item) => toSnakeCase({
  expert:path(['expert', 'id'], item),
  assignment:path(['assignment', 'id'], item),
  type:path(['type', 'id'], item),
  direction:prop('direction', item),
  standard:prop('standard', item),
})

export const mapExpertsPlace = (item) => toSnakeCase({
  date: prop('date', item),
  to_date: prop('toDate', item),
  // type: prop('type', item),
  // address_type: prop('address_type', item),
  expert:path(['expert', 'id'], item),
  assignment:path(['assignment', 'id'], item),
  type:path(['type', 'id'], item),
  address_type:path(['address', 'id'], item),
})
