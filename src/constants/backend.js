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
  { id: 'LESS_THREE', name: '0-3 oy' },
  { id: 'LESS_SIX', name: '3-6 oy' },
  { id: 'MORE_SIX', name: '6 oydan ortiq' }
]

export const ANSWER_LIST = [
  { id: 'yes', name: 'ha' },
  { id: 'no', name: 'yoq' }
]

export const ANSWER_TYPE_LIST = [
  { id: 'approved', name: 'Rozi ' },
  { id: 'reject', name: 'Rozi emas' },
  { id: 'partial_approved', name: 'Qisman rozi' },
]

export const STANDART_LIST = [

  { id: '17020', name: '(O‘z DSt ISO/IEC 17020:2019) Inspeksiya organi' },
  { id: '17021', name: '(O‘z DSt ISO/IEC 17021:2015) Menejment tizimlarini sertifikatlashtirish organi' },
  { id: '17065', name: '(O‘z DSt ISO/IEC 17065:2015 ) Mahsulot va xizmatlarni sertifikatlashtirish organi' },
  { id: '17025SL', name: '(O‘z DSt ISO/IEC 17025:2019) Sinov laboratoriyalari' },
  // { id: '17024', name: '(O‘z DSt ISO/IEC 17024:2009) Xodimlarni sertifikatlashtirish organlari' },
  // { id: '17025', name: '(O‘z DSt ISO/IEC 17025:2019) Putur yetkazmasdan tekshirish laboratoriyasini' },
  // { id: '17043', name: '(O‘z DSt ISO/IEC 17043:2015) Malakani tekshirish provayderi' },
  // { id: '3444', name: '(O‘z DSt 3444:2020) Oʻlchash vositalarni qiyoslash metrologiya xizmati/laboratoriyasini' },
]

export const TYPE_EXPERTS = [
  // { id: 'lead', name: 'Guruh rahbari' },
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
  { id: 'accreditation', name: 'Akkreditatsiya' },
  { id: 'reaccreditation', name: 'Takroriy  akkreditatsiya' },
  { id: 'actualization', name: 'Akkreditatsiya sohasini dolzarblashtirish' },
  { id: 'expansion ', name: 'Akkreditatsiya sohasini kengaytirish' },
  { id: 'abbreviations', name: 'Akkreditatsiya sohasini qisqartirish' },
]

export const GENDER_LIST = [
  { id: 'male', name: 'мужчина' },
  { id: 'female', name: 'женщина' }
]

export const AGE_LIST = [
  { id: 'young', name: 'ребенок' },
  { id: 'grown', name: 'взрослый' }
]

export const CLIENT_LIST = [
  { id: 'local', name: 'местный' },
  { id: 'foreigner', name: 'иностранец' }
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

export const typeContract = [

  {
    id:'travel',
    name:'xizmat safaridan',
  },
  {
    id:'center',
    name:'ish safari holda',
  }

]

export const typeContractCount = [

  {
    id:'person',
    name:'Kishi',
  },
  {
    id:'day',
    name:'Kun',
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
    name:'Rozi',
  },
  {
    id:'reject',
    name:'Rozi emas',
  },
  {
    id:'wait',
    name:'Jarayonda',
  },

  { id: 'partial_approved', name: 'Qisman rozi' },

])

export const documentType = getFormattedListData([
  {
    id:'ACCREDITATION_SCOPE_DRAFT',
    name:'Akkreditatsiya sohasi loyihasi',
  },
  {
    id:'QUALITY_QUIDE',
    name:'Sifat boʻyicha qoʻllanma',
  },
  {
    id:'QUALITY_MANAGEMENT_SYSTEM_DOCUMENTATION',
    name:'Sifat menejmenti tizimlari hujjatlari',
  },
  {
    id:'APPLICANT_DETAILS',
    name:'Ariza beruvchi/akkreditatsiya obyekti haqida \n' +
        'ma’lumot\n',
  }

])

export const historyStatus = getFormattedListData([
  {
    id:'open',
    name:'Ochiq',
  },
  {
    id:'pros',
    name:'Jarayonda',
  },
  {
    id:'closed',
    name:'Yopiq',
  },

])
export const documentPlanOrderType = getFormattedListData([
  {
    id:'process',
    name:'Jarayonda',
  },
  {
    id:'confirm',
    name:'Mijoz tasdiqlangan',
  },
  {
    id:'wait',
    name:'Markaz tasdiqlangan',
  },
  {
    id:'reject',
    name:'Tasdiqlanmagan',
  }

])

export const expertAnswerType = getFormattedListData([
  {
    id:'process',
    name:'Jarayonda',
  },
  {
    id:'confirm',
    name:'Tasdiqlangan',
  },
  {
    id:'wait',
    name:'Kutmoqda ',
  },
  {
    id:'reject',
    name:'Tasdiqlanmagan',
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
    name:"To'langan",
  },
  {
    id:'unpaid',
    name:"To'lanmagan",
  },

])

export const statusAssignments = getFormattedListData([
  {
    id:'given',
    name:'Jarayonda',
  },
  {
    id:'done',
    name:'Tugallangan ish',
  },

])
