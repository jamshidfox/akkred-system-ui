import { groupBy, pipe, path, curry, reduce, keys, mapObjIndexed, map, prop, flatten } from 'ramda'

const mapKeys = curry(function mapKeys (fn, obj) {
  return reduce(function (acc, key) {
    acc[fn(key)] = obj[key]
    return acc
  }, {}, keys(obj))
})

export default attractions => pipe(
  groupBy(path(['parent', 'id'])),
  mapKeys(key => `attraction_${key}`),
  mapObjIndexed(pipe(
    map(prop('children')),
    flatten
  ))
)(attractions)
