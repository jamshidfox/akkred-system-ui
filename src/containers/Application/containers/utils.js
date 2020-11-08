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
