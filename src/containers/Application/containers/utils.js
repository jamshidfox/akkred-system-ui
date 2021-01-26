import { path, prop } from 'ramda'
import toSnakeCase from '../../../utils/toSnakeCase'

export const mapBranches = (item) => toSnakeCase({
  phoneNumber: prop('phoneNumber', item),
  fullName: prop('fullName', item),
  address: prop('address', item),
  id: prop('id', item),
})

export const mapDocument = (item) => toSnakeCase({
  type: prop('type', item),
  file:path(['file', 'id'], item),
  id: prop('id', item),
})

export const mapExperts = (item) => toSnakeCase({
  case: prop('cases', item),
  expert:path(['expert', 'id'], item),
  assignment:path(['file', 'id'], item),
})

export const mapExpertsPlace = (item) => toSnakeCase({
  case: prop('cases', item),
  date: prop('date', item),
  // type: prop('type', item),
  // address_type: prop('address_type', item),
  expert:path(['expert', 'id'], item),
  assignment:path(['assignment', 'id'], item),
  type:path(['type', 'id'], item),
  address_type:path(['address', 'id'], item),
})
