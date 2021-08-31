import { pipe, map, values, fromPairs } from 'ramda'

export const arrayObjToObj = pipe(
  map(values),
  fromPairs
)

const getFormattedListData = list => ({
  list,
  object: arrayObjToObj(list)
})
export const standardList = getFormattedListData([
  { id: '17020', name: '(O‘z DSt ISO/IEC 17020:2019) Inspeksiya organi' },
  { id: '17021', name: '(O‘z DSt ISO/IEC 17021:2015) Menejment tizimlarini sertifikatlashtirish organi' },
  { id: '17024', name: '(O‘z DSt ISO/IEC 17024:2009) Xodimlarni sertifikatlashtirish ' },
  { id: '17065', name: '(O‘z DSt ISO/IEC 17065:2015 ) Mahsulot va xizmatlarni sertifikatlashtirish organi' },
  { id: '17025SL', name: '(O‘z DSt ISO/IEC 17025:2019) Sinov laboratoriyalari' },
  { id: '3444', name: '(O‘z DSt 3444:2020) Oʻlchash vositalarni qiyoslash metrologiya xizmati/laboratoriyasi' },
])

export const STANDART_LIST = [

  { id: '17020', name: '(O‘z DSt ISO/IEC 17020:2019) Inspeksiya organi' },
  { id: '17021', name: '(O‘z DSt ISO/IEC 17021:2015) Menejment tizimlarini sertifikatlashtirish organi' },
  { id: '17024', name: '(O‘z DSt ISO/IEC 17024:2009) Xodimlarni sertifikatlashtirish ' },
  { id: '17065', name: '(O‘z DSt ISO/IEC 17065:2015 ) Mahsulot va xizmatlarni sertifikatlashtirish organi' },
  { id: '17025SL', name: '(O‘z DSt ISO/IEC 17025:2019) Sinov laboratoriyalari' },
  { id: '3444', name: '(O‘z DSt 3444:2020) Oʻlchash vositalarni qiyoslash metrologiya xizmati/laboratoriyasi' },
  // { id: '17024', name: '(O‘z DSt ISO/IEC 17024:2009) Xodimlarni sertifikatlashtirish organlari' },
  // { id: '17025', name: '(O‘z DSt ISO/IEC 17025:2019) Putur yetkazmasdan tekshirish laboratoriyasini' },
  // { id: '17043', name: '(O‘z DSt ISO/IEC 17043:2015) Malakani tekshirish provayderi' },
  // { id: '3444', name: '(O‘z DSt 3444:2020) Oʻlchash vositalarni qiyoslash metrologiya xizmati/laboratoriyasini' },
]

export const applicationList = getFormattedListData([
  { id: 'accreditation', name: 'Akkreditatsiya' },
  { id: 'reaccreditation', name: 'Takroriy  akkreditatsiya' },
  { id: 'actualization', name: 'Akkreditatsiya sohasini dolzarblashtirish' },
  { id: 'expansion', name: 'Akkreditatsiya sohasini kengaytirish' },
  { id: 'abbreviations', name: 'Akkreditatsiya sohasini qisqartirish' },
])

export const answerMonthList = getFormattedListData([
  { id: 'LESS_THREE', name: '0-3 oy' },
  { id: 'LESS_SIX', name: '3-6 oy' },
  { id: 'MORE_SIX', name: '6 oydan ortiq' }
])

export const answerList = getFormattedListData([
  { id: 'yes', name: 'Ha' },
  { id: 'no', name: 'Yo’q' }
])

export const answerYearList = getFormattedListData([
  { id: 'require', name: 'talablarga binoan' },
  { id: 'once', name: 'yiliga 1marta' },
  { id: 'two_times', name: 'yiliga 2 marta' },
  { id: 'three_times', name: 'yiliga 3 marta' },
  { id: 'four_times', name: 'yiliga 4 marta' },
  { id: 'more_four_times', name: '4 martadan ortiq' },
])

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

export const answerTypeList = getFormattedListData([
  { id: 'approved', name: 'Rozi ' },
  { id: 'reject', name: 'Rozi emas' },
  { id: 'partial_approved', name: 'Qisman rozi' },
  { id: 'wait', name: 'Jarayonda' },
])

export const EXPERT_ANSWER_TYPE_LIST = [
  { id: 'approved', name: 'Rozi ' },
  { id: 'reject', name: 'Rozi emas' },
]

export const TEMPLATE_DOCUMENT_TYPE_LIST = [
  { id: 'client', name: 'Buyurtmachi ' },
  { id: 'center', name: 'Center' },
]

export const templateDocument = getFormattedListData([
  { id: 'client', name: 'Buyurtmachi ' },
  { id: 'center', name: 'Center' },

])

export const AUDIT_RESULT_ANSWER_LIST = [
  { id: 'approved', name: 'Rozi ' },
  { id: 'partial_approved', name: 'Qisman rozi' },
]

export const AUDIT_RESULT_LIST = [

  { id: 'positive', name: 'Qabul qilish' },
  { id: 'negative', name: 'Qabul qilmaslik' },
]

export const answerTypeTextList = getFormattedListData([
  { id: 'reject', name: 'Rozi emas' },
  { id: 'approved', name: 'Rozi' }
])

export const roleTypeTextList = getFormattedListData([
  { id: 'lead', name: 'Guruh rahbari' },
  { id: 'member', name: 'Guruh a’zosi' },
  { id: 'ekspert', name: 'Texnik ekspert' },
  { id: 'watcher', name: 'Kuzatuvchi' },
])

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

export const addressTypeList = getFormattedListData([
  { id: 'fact_address', name: 'MBO faktik mazili' },
  { id: 'address', name: 'Markaz' },
])

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
    name:'30/70',
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
  { id: 'registry', title: 'Reestrda ro’yhatga olish' },
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

export const stepName = getFormattedListData([
  {
    id:'new_register_application',
    name:'Ro’yhatga olish',
  },
  {
    id:'new_create_analysis_application',
    name:'Buyurtma tahlili',
  },
  {
    id:'new_choice_executor',
    name:'Ijrochini tanlash',
  },
  {
    id:'new_fill_up_analysis_application',
    name:'Resurslarni tahlili',
  },
  {
    id:'new_confirm_executor',
    name:'Ijrochini tasdiqlash',
  },
  {
    id:'new_create_contract',
    name:'E-shartnomasini rasmiylashtirish',
  },
  {
    id:'new_confirm_by_department',
    name:'Hisobchi bilan kelishish',
  },
  {
    id:'new_confirm_by_account',
    name:'Rahbariyatga kiritish ',
  },
  {
    id:'new_sign_by_center',
    name:'E-shartnomani ro\'yhatga olish',
  },
  {
    id:'new_sign_by_client',
    name:'Buyurtmachini javobini kutish',
  },
  {
    id:'new_confirm_payment',
    name:'E-to’lovni tekshirish',
  },
  {
    id:'expertise_choice_experts',
    name:'E-ekspertlar tanlash',
  },
  {
    id:'expertise_confirm_experts_department',
    name:'Kadrlar bo’limi bilan kelishish',
  },
  {
    id:'expertise_confirm_experts_hr',
    name:'Rahbariyatga kiritish',
  },
  {
    id:'expertise_confirm_experts_center',
    name:'Baholash guruhini imzolash',
  },
  {
    id:'expertise_create_contract_audit',
    name:'Ekspertiza xulosasi va b-shartnomani rasmiylashtirish',
  },
  {
    id:'expertise_confirm_contract_audit_department',
    name:'Hisobchi bilan kelishish',
  },
  {
    id:'expertise_confirm_contract_audit_account',
    name:'Rahbariyatga kiritish',
  },
  {
    id:'expertise_sign_contract_audit_center',
    name:'Shartnoma ro’yhatdan o’tkazish',
  },
  {
    id:'expertise_sign_contract_audit_client',
    name:'Buyurtmachini javobini kutish',
  },
  {
    id:'expertise_confirm_payment_contract_audit',
    name:'B- to’lovni tekshirish',
  },
  {
    id:'audit_choice_experts',
    name:'B-ekspertlarni tanlash',
  },
  {
    id:'audit_confirm_experts_department',
    name:'Kadrlar bo’limi bilan kelishish',
  },
  {
    id:'audit_confirm_experts_hr',
    name:'Rahbariyatga kiritish',
  },
  {
    id:'audit_sign_plan_center',
    name:'B-rejasini rasmiylashtirish',
  },
  {
    id:'audit_send_plan',
    name:'B-rejani buyurtmachiga jo’natish',
  },
  {
    id:'audit_sign_plan_client',
    name:'B-rejani kelishish',
  },
  {
    id:'audit_create_order',
    name:'B-buyruqni ramiylashtirish',
  },
  {
    id:'audit_accept_order',
    name:'Rahbariyatga kiritish',
  },
  {
    id:'audit_sign_order_center',
    name:'Buyruq  imzolanadi',
  },
  {
    id:'audit_approved_audit',
    name:'Hujatlarni ekspertlarga jo’natish',
  },
  {
    id:'audit_start_audit',
    name:'Baholashni tasdiqlash',
  },
  {
    id:'audit_end_audit',
    name:'Baholashni yakunlash',
  },
  {
    id:'audit_accept_audit_result',
    name:'Baholash natijalarini qabul qilish',
  },
  {
    id:'commission_send_participants',
    name:'Hujjatlarni akkreditatsiya komissiyasiga kiritis',
  },
  {
    id:'commission_vote_participants',
    name:'Akkreditatsiya komissiyasi',
  },
  {
    id:'commission_create_protocol',
    name:'Bayon rasmiylashtirish',
  },
  {
    id:'commission_sign_protocol_center',
    name:'Akkreditasiya komissiyasi  bayonni tasdiqlash',
  },
  {
    id:'commission_register_create',
    name:'Davlat reestriga kiritish',
  },
  {
    id:'post_create_post',
    name:'Postakkreditatsion shartnoma rasmiylashtirish',
  },
  {
    id:'post_sign_post_center',
    name:'Postakkreditatsion shartnoma imzolash',
  },
  {
    id:'post_sign_post_client',
    name:'Buyurtmachini javobini kutish',
  },
  {
    id:'finish',
    name:'Yopish',
  },
  {
    id:'re_audit_start_deadline',
    name:'Muddat berish',
  },
  {
    id:'re_audit_create_plan',
    name:'Harakatlar rejasini kutish',
  },
  {
    id:'re_audit_create_proof_plan',
    name:'Hisobotni kutish',
  },
  {
    id:'re_audit_end_deadline',
    name:'Hisobotni qabul qilish',
  },
  {
    id:'re_audit_create_order',
    name:'Takroriy buyruqni rasmiylashtirish',
  },
  {
    id:'re_audit_accept_order',
    name:'Takroriy buyruqni kelishish',
  },
  {
    id:'re_audit_sign_order_center',
    name:'Takroriy buyruqni tasdiqlash',
  },
  {
    id:'re_audit_start_audit',
    name:'O`rganishni boshlash',
  },
  {
    id:'re_audit_end_audit',
    name:'O`rganishni tugallash ',
  },
  {
    id:'re_audit_accept_audit_result',
    name:'O`rganish natijalarini qabul qilish ',
  },
  {
    id:'audit_create_analysis',
    name:'O`rganish natijalari tahlili ',
  },

])

export const stageName = getFormattedListData([
  {
    id:'new_register_application',
    name:'Ro’yhatga olish',
  },
  {
    id:'new_create_analysis_application',
    name:'Buyurtma tahlili',
  },
  {
    id:'new_choice_executor',
    name:'Ijrochini tanlash',
  },
  {
    id:'new_fill_up_analysis_application',
    name:'Buyurtma tahlili',
  },
  {
    id:'new_confirm_executor',
    name:'Ijrochini tasdiqlash',
  },
  {
    id:'new_create_contract',
    name:'E-shartnomasini rasmiylashtirish',
  },
  {
    id:'new_confirm_by_department',
    name:'Hisobchi bilan kelishish',
  },
  {
    id:'new_confirm_by_account',
    name:'Rahbariyatga kiritish ',
  },
  {
    id:'new_sign_by_center',
    name:'E-shartnomani ro\'yhatga olish',
  },
  {
    id:'new_sign_by_client',
    name:'Buyurtmachini javobini kutish',
  },
  {
    id:'new_confirm_payment',
    name:'E-to’lovni tekshirish',
  },
  {
    id:'expertise_choice_experts',
    name:'E-ekspertlar tanlash',
  },
  {
    id:'expertise_confirm_experts_department',
    name:'Kadrlar bo’limi bilan kelishish',
  },
  {
    id:'expertise_confirm_experts_hr',
    name:'Rahbariyatga kiritish',
  },
  {
    id:'expertise_confirm_experts_center',
    name:'Ekspertizaga jo’natish',
  },
  {
    id:'expertise_create_contract_audit',
    name:'Ekspertiza xulosasi va b-shartnomani rasmiylashtirish',
  },
  {
    id:'expertise_confirm_contract_audit_department',
    name:'Hisobchi bilan kelishish',
  },
  {
    id:'expertise_confirm_contract_audit_account',
    name:'Rahbariyatga kiritish',
  },
  {
    id:'expertise_sign_contract_audit_center',
    name:'Shartnoma ro’yhatdan o’tkazish',
  },
  {
    id:'expertise_sign_contract_audit_client',
    name:'Buyurtmachini javobini kutish',
  },
  {
    id:'expertise_confirm_payment_contract_audit',
    name:'B- to’lovni tekshirish',
  },
  {
    id:'audit_choice_experts',
    name:'B-ekspertlarni tanlash',
  },
  {
    id:'audit_confirm_experts_department',
    name:'Kadrlar bo’limi bilan kelishish',
  },
  {
    id:'audit_confirm_experts_hr',
    name:'Rahbariyatga kiritish',
  },
  {
    id:'audit_sign_plan_center',
    name:'B-rejasini rasmiylashtirish',
  },
  {
    id:'audit_send_plan',
    name:'B-rejani buyurtmachiga jo’natish',
  },
  {
    id:'audit_sign_plan_client',
    name:'B-rejani kelishish',
  },
  {
    id:'audit_create_order',
    name:'B-buyruqni ramiylashtirish',
  },
  {
    id:'audit_accept_order',
    name:'Rahbariyatga kiritish',
  },
  {
    id:'audit_sign_order_center',
    name:'Buyruq  imzolanadi',
  },
  {
    id:'audit_approved_audit',
    name:'Hujatlarni ekspertlarga jo’natish',
  },
  {
    id:'audit_start_audit',
    name:'Baholashni tasdiqlash',
  },
  {
    id:'audit_end_audit',
    name:'Baholashni yakunlash',
  },
  {
    id:'audit_accept_audit_result',
    name:'Baholash natijalarini qabul qilish',
  },
  {
    id:'commission_send_participants',
    name:'Hujjatlarni akkreditatsiya komissiyasiga kiritis',
  },
  {
    id:'commission_vote_participants',
    name:'Akkreditatsiya komissiyasi',
  },
  {
    id:'commission_create_protocol',
    name:'Bayon rasmiylashtirish',
  },
  {
    id:'commission_sign_protocol_center',
    name:'Akkreditasiya komissiyasi  bayonni tasdiqlash',
  },
  {
    id:'commission_register_create',
    name:'Davlat reestriga kiritish',
  },
  {
    id:'post_create_post',
    name:'Postakkreditatsion shartnoma rasmiylashtirish',
  },
  {
    id:'post_sign_post_center',
    name:'Postakkreditatsion shartnoma imzolash',
  },
  {
    id:'post_sign_post_client',
    name:'Buyurtmachini javobini kutish',
  },
  {
    id:'finish',
    name:'Yopish',
  },
  {
    id:'re_audit_start_deadline',
    name:'Muddat berish',
  },
  {
    id:'re_audit_create_plan',
    name:'Harakatlar rejasini kutish',
  },
  {
    id:'re_audit_create_proof_plan',
    name:'Hisobotni kutish',
  },
  {
    id:'re_audit_end_deadline',
    name:'Hisobotni qabul qilish',
  },
  {
    id:'re_audit_create_order',
    name:'Takroriy buyruqni rasmiylashtirish',
  },
  {
    id:'re_audit_accept_order',
    name:'Takroriy buyruqni kelishish',
  },
  {
    id:'re_audit_sign_order_center',
    name:'Takroriy buyruqni tasdiqlash',
  },
  {
    id:'re_audit_start_audit',
    name:'O`rganishni boshlash',
  },
  {
    id:'re_audit_end_audit',
    name:'O`rganishni tugallash ',
  },
  {
    id:'re_audit_accept_audit_result',
    name:'O`rganish natijalarini qabul qilish ',
  },
  {
    id:'audit_create_analysis',
    name:'O`rganish natijalari tahlili ',
  },

])
