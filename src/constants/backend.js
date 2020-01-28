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

export const AGE_LIST = [
  { id: 'young', name: 'ребенок' },
  { id: 'grown', name: 'взрослый' }
]

export const CLIENT_LIST = [
  { id: 'local', name: 'местный' },
  { id: 'foreigner', name: 'иностранец' }
]
export const SERVICE_FREQ = [
  { id: 'vip', name: 'VIP' },
  { id: 'simple', name: 'SIMPLE' }
]

export const USER_TYPES = [
  { id: 'hole_registrar', name: 'регистратор' },
  { id: 'hotel_manager', name: 'менеджер' },
]

export const TRANSACTION_TYPES = [
  { id: 'income', name: 'Доход' },
  { id: 'outcome', name: 'Расход' },
]
