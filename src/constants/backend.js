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

export const ANSWER_MONTH_LIST = [
  { id: 'LESS_THREE', name: 'LESS_THREE' },
  { id: 'LESS_SIX', name: 'LESS_SIX' },
  { id: 'MORE_SIX', name: 'MORE_SIX' },
]

export const ANSWER_LIST = [
  { id: 'yes', name: 'да' },
  { id: 'no', name: 'нет' }
]

export const APPLICATION_LIST = [
  { id: 'accreditation', name: 'Аккредитация' },
  { id: 'actualization', name: 'Актуализация' },
  { id: 'reaccreditation', name: 'Переаккредитация' },
  { id: 'renewal', name: 'Переоформления' },
  { id: 'termination', name: 'Прекращение' },
  { id: 'suspension', name: 'Приостановление' },
  { id: 'abbreviations', name: 'Сокращения' },
]

export const STANDART_LIST = [
  { id: '17065', name: '17065' },
  { id: '17025', name: '17025' },
  { id: '3444', name: '3444' },
  { id: '17021', name: '17021' },
  { id: '17020', name: '17020' },
  { id: '17024', name: '17024' },
  { id: '17043', name: '17043' },
  { id: '15189', name: '15189' },
]

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

