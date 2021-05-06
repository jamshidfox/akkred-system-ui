import { pipe, map, values, fromPairs } from 'ramda'

export const arrayObjToObj = pipe(
  map(values),
  fromPairs
)

const getFormattedListData = list => ({
  list,
  object: arrayObjToObj(list)
})

export const ANSWER_MONTH_LIST = [
  { id: 'LESS_THREE', name: '0-3 oy' },
  { id: 'LESS_SIX', name: '3-6 oy' },
  { id: 'MORE_SIX', name: '6 oydan ortiq' }
]

export const ANSWER_LIST = [
  { id: 'yes', name: 'ha' },
  { id: 'no', name: 'yo`q' }
]

export const ANSWER_TYPE_LIST = [
  { id: 'approved', name: 'Rozi ' },
  { id: 'reject', name: 'Rozi emas' },
  { id: 'partial_approved', name: 'Qisman rozi' },
]

export const AUDIT_RESULT_ANSWER_LIST = [
  { id: 'approved', name: 'Rozi ' },
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
    id:'pros',
    name:'Jarayonda',
  },
  {
    id:'closed',
    name:'Bajarildi',
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
export const expertAuditAnswerType = getFormattedListData([
  { id: 'approved', name: 'Rozi ' },
  { id: 'partial_approved', name: 'Qisman rozi' },
  { id: 'wait', name: 'Jarayonda' },
  { id: 'not_wait', name: 'audit' },

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
  { id: 'archive', title: 'arxiv' },
  { id: 'reject', title: 'rad etilgan' },
  { id: 'new', title: 'Yangi' },
  { id: 'accepted', title: 'Qabul qilindi' },
  { id: 'head_department_review', title: 'Bo’lim boshlig’I rezolyutsiyasida' },
  { id: 'leadership_review', title: 'Rahbar rezolyutsiyasida' },
  { id: 'document_analysis', title: 'Hujjatlar taxlili' },
  { id: 'expertise_contract_formed', title: 'Ekspertiza shartnomasini rasmiylashtirish' },
  { id: 'expertise_contract_accept', title: 'Ekspertiza shartnomasini rasmiylashtirish' },
  { id: 'expertise_payment_process', title: 'Ekspertiza uchun to’lov jarayoni' },
  { id: 'expertise_group_formed', title: 'Ekspertlar guruhini shakllantirish' },
  { id: 'expertise', title: 'Ekspertiza' },
  { id: 'expertise_finish', title: 'Baholash shartnomasini rasmiylashtirish' },
  { id: 'audit_contract_formed', title: 'Baholash shartnomasini rasmiylashtirish' },
  { id: 'audit_contract_accept', title: 'Baholash shartnomasini rasmiylashtirish' },
  { id: 'audit_payment_process', title: 'Baholash uchun to’lov jarayoni' },
  { id: 'audit_plan_formed', title: 'Baholash guruhini shakllantirish' },
  { id: 'audit_plan_agreement', title: 'Baholash rejasini rasmiylashtirish' },
  { id: 'audit_order_formed', title: 'Baholash buyrug’ini rasmiylashtirish' },
  { id: 'audit', title: 'Baholash' },
  { id: 'audit_finish', title: 'Baholash yakuni' },
  { id: 'audit_document_analysis', title: 'Baholash hujjatlari taxlili' },
  { id: 'accreditation_commission', title: 'Akrreditatsiya komissiyasi' },
  { id: 'registry', title: 'Reestrga ro’yhatga olish' },
  { id: 'post_accreditation', title: 'Akkreditatsiyadan keyingi shartnomani rasmiylashtirish' },
  { id: 'finish', title: 'Tugallandi' },

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
