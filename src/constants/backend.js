import { pipe, map, values, fromPairs } from 'ramda'

export const arrayObjToObj = pipe(
  map(values),
  fromPairs
)

export const GENDER_LIST = [
  { id: 'male', name: 'мужчина' },
  { id: 'female', name: 'женщина' }
]

export const GENDER = arrayObjToObj(GENDER_LIST)
