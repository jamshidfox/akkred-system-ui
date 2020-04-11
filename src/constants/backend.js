import { pipe, map, values, fromPairs } from 'ramda'

export const arrayObjToObj = pipe(
  map(values),
  fromPairs
)


export const PERCENTAGE = 'percentage'
export const FIXED = 'fixed'
export const INDIVIDUAL = 'individual'


export const CALCULATION_TYPE_LIST = [
  {
    id: FIXED,
    name: 'Фикс. стоимость'
  },
  {
    id: PERCENTAGE,
    name: 'В процентах'
  },
  {
    id: INDIVIDUAL,
    name: 'Индивидуальные цены'
  },
]

export const CALCULATION_TYPE = arrayObjToObj(CALCULATION_TYPE_LIST)

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

export const PAYMENT_TYPES = [
  { id: 'card', name: 'Card' },
  { id: 'cash', name: 'Cash' },
]

export const BOOKING_TYPES = [
  { id: 'remotely', name: 'Remotely' },
  { id: 'placement', name: 'Placement' },
]

export const TRANSACTION_TYPES = [
  { id: 'income', name: 'Доход' },
  { id: 'outcome', name: 'Расход' },
]

export const PARTNERS_TYPES = [
  { id: 'tour', name: 'Тур.фирма' },
  { id: 'company', name: 'Компания' },
  { id: 'agent', name: 'Агент' },
]

export const RULE_TYPES = [
  { id: 'entrance', name: 'Заезд' },
  { id: 'leave', name: 'Выезд' },
]

export const RULE_AMOUNT_TYPES = [
  { id: 'percentage', name: 'Процент' },
  { id: 'fixed', name: 'Фиксириванный' },
  { id: 'free', name: 'Бесплатно' },
]
