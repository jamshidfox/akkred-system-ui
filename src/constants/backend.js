import { pipe, map, values, fromPairs } from 'ramda'

export const arrayObjToObj = pipe(
  map(values),
  fromPairs
)

const getFormattedListData = list => ({
  list,
  object: arrayObjToObj(list)
})
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
  { id: 'LESS_THREE', name: 'меньше трех месяцев' },
  { id: 'LESS_SIX', name: 'меньше шести месяцев' },
  { id: 'MORE_SIX', name: 'больше шести месяцев' }
]

export const ANSWER_LIST = [
  { id: 'yes', name: 'да' },
  { id: 'no', name: 'нет' }
]

export const ANSWER_TYPE_LIST = [
  { id: 'approved', name: 'Согласен' },
  { id: 'reject', name: 'Несогласен' }
]

export const STANDART_LIST = [
  { id: '17065', name: '17065' },
  { id: '17025', name: '17025' },
  // { id: '3444', name: '3444' },
  { id: '17021', name: '17021' },
  { id: '17020', name: '17020' },
  { id: '17024', name: '17024' },
  { id: '17043', name: '17043' },
  // { id: '15189', name: '15189' },
]

export const TYPE_EXPERTS = [
  { id: 'lead', name: 'Guruh rahbari' },
  { id: 'member', name: 'Guruh a’zosi' },
  { id: 'ekspert', name: 'Texnik ekspert' },
  { id: 'watcher', name: 'Kuzatuvchi' },
]

export const ADDRESS_TYPE = [
  { id: 'fact_address', name: 'MBO faktik mazili' },
  { id: 'address', name: 'Markaz' },
]

export const RESULT_LIST = [
  { id: 'good', name: 'да' },
  { id: 'bad', name: 'нет' },
  { id: 'norm', name: 'норм' }
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

export const paymentTypes = [

  {
    id:'full',
    name:'100',
  },
  {
    id:'part',
    name:'15/85',
  }

]

export const rateTypes = [

  {
    id:'15',
    name:'15%',
  },
  {
    id:'0',
    name:'-',
  }

]

export const answerCommissionType = getFormattedListData([
  {
    id:'approved',
    name:'согласен',
  },
  {
    id:'reject',
    name:'несогласен',
  },
  {
    id:'wait',
    name:'В процессе',
  }

])

export const documentType = getFormattedListData([
  {
    id:'ACCREDITATION_SCOPE_DRAFT',
    name:'Проект области аккредитации',
  },
  {
    id:'QUALITY_QUIDE',
    name:'Руководство по качеству',
  },
  {
    id:'QUALITY_MANAGEMENT_SYSTEM_DOCUMENTATION',
    name:'Документация Системы Менеджмента Качества',
  },
  {
    id:'APPLICANT_DETAILS',
    name:'Сведения о заявителе',
  }

])

export const documentPlanOrderType = getFormattedListData([
  {
    id:'process',
    name:'В процессе',
  },
  {
    id:'confirm',
    name:'Утвержден клиентом',
  },
  {
    id:'wait',
    name:'Утвержден центром',
  },
  {
    id:'reject',
    name:'не утвержден',
  }

])

export const expertAnswerType = getFormattedListData([
  {
    id:'process',
    name:'В процессе',
  },
  {
    id:'confirm',
    name:'Утвержден',
  },
  {
    id:'wait',
    name:'Ждет ',
  },
  {
    id:'reject',
    name:'не утвержден',
  }

])

export const registryStatus = getFormattedListData([
  { id: 'draft', title: 'qoralama' },
  { id: 'active', title: 'faol' },
  { id: 'archive', title: 'arxiv' },
  { id: 'reject', title: 'rad etilgan' },
  { id: 'leadership_review', title: 'rahbariyat ko’rib chiqishida' },
  { id: 'received', title: 'qabul qilingan' },
  { id: 'contract_formed', title: 'shartnoma rasmiylashtirilgan' },
  { id: 'payment_process', title: 'to’lov jarayonida' },
  { id: 'expertise', title: 'ekspertiza' },
  { id: 'audit_contract_formed', title: 'audit uchun shartnoma rasmiylashtirilgan' },
  { id: 'audit_payment_process', title: 'audit uchun to’lov jarayonida' },
  { id: 'plan_order_formed', title: 'reja va buyruq rasmiylashtirilgan' },
  { id: 'place_evaluation', title: 'joyida baholash' },
  { id: 'accreditation_commission', title: 'akkreditatsiya komissiyasiga taqdim etilgan' },
  { id: 'registry', title: 'davlat reestriga kiritilgan va guvohnoma rasmiylashtirilgan' },
  { id: 'post_accreditation', title: 'post akkreditatsiaion hujjatlar rasmiyla shtirilgan' },
  { id: 'paused', title: 'Пауза' },

])

export const statusPayments = getFormattedListData([
  {
    id:'paid',
    name:'Оплачен',
  },
  {
    id:'unpaid',
    name:'Не оплачен',
  },

])

export const statusAssignments = getFormattedListData([
  {
    id:'given',
    name:'Открыто',
  },
  {
    id:'done',
    name:'Сделано',
  },

])
