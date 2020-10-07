import { prop } from 'ramda'
import toSnakeCase from '../../../utils/toSnakeCase'

export const mapBranches = (item) => toSnakeCase({
  phoneNumber: prop('phoneNumber', item),
  fullName: prop('fullName', item),
  address: prop('address', item),
  id: prop('id', item),
})
