// export const DOMAIN_URL = 'http://localhost:8000'
export const DOMAIN_URL = 'https://e.akkred.uz:8081'
export const API_URL = `${DOMAIN_URL}`

const MAIN = 'main'
export const CHECK_TOKEN = '/main/check_token/'
export const LOGIN = `${MAIN}/login/`
export const LOGOUT = `${MAIN}/logout/`
export const FILE_UPLOAD = '/main/file/'

export const EMPLOYEES_LIST = `${MAIN}/users/`
export const EMPLOYEES_CREATE = `${EMPLOYEES_LIST}`
export const EMPLOYEES_UPDATE = `${EMPLOYEES_LIST}%d/`
export const EMPLOYEES_ITEM = `${EMPLOYEES_LIST}%d/`
export const EMPLOYEES_DELETE = `${EMPLOYEES_LIST}%d/`

export const TECHNICAL_EXPERT_LIST = `${MAIN}/technical_experts/`
export const TECHNICAL_EXPERT_CREATE = `${TECHNICAL_EXPERT_LIST}`
export const TECHNICAL_EXPERT_UPDATE = `${TECHNICAL_EXPERT_LIST}%d/`
export const TECHNICAL_EXPERT_ITEM = `${TECHNICAL_EXPERT_LIST}%d/`
export const TECHNICAL_EXPERT_DELETE = `${TECHNICAL_EXPERT_LIST}%d/`

export const AUTH = 'auth'
export const AUTH_ACCESS_TOKEN = `/${AUTH}/access-token/`
export const AUTH_REFRESH_TOKEN = `/${AUTH}/refresh-token/`
export const AUTH_ME = `/${AUTH}/me/`

export const HOTEL = 'hotels/hotel'
export const HOTEL_LIST = `/${HOTEL}/`
export const HOTEL_CREATE = `/${HOTEL}/`
export const HOTEL_UPDATE = `/${HOTEL}/%d/`

export const CLIENT_INFO = 'main/clients'
export const CLIENT_INFO_LIST = `/${CLIENT_INFO}/`
export const CLIENT_INFO_CREATE = `/${CLIENT_INFO}/`
export const CLIENT_INFO_UPDATE = `/${CLIENT_INFO}/%d/`

export const ROLE = `${MAIN}/role`
export const ROLE_LIST = `/${ROLE}/`
export const ROLE_CREATE = `/${ROLE}/`
export const ROLE_UPDATE = `/${ROLE}/%d/`
export const ROLE_ITEM = `/${ROLE}/%d/`
export const ROLE_DELETE = `/${ROLE}/%d/`

export const TYPE_STANDARD = `${MAIN}/type_standards`
export const TYPE_STANDARD_LIST = `/${TYPE_STANDARD}/`

export const GROUP = `${MAIN}/group`
export const GROUP_LIST = `/${GROUP}/`
export const GROUP_CREATE = `/${GROUP}/`
export const GROUP_UPDATE = `/${GROUP}/%d/`
export const GROUP_ITEM = `/${GROUP}/%d/`
export const GROUP_DELETE = `/${GROUP}/%d/`

export const PERMISSION = `${MAIN}/permission`
export const PERMISSION_LIST = `/${PERMISSION}/`

export const HOTEL_ATTRACTION_TYPE = `hotels/attractions_type`
export const HOTEL_ATTRACTION_TYPE_LIST = `/${HOTEL_ATTRACTION_TYPE}/`

export const CLIENT = `${MAIN}/clients`
export const CLIENT_LIST = `/${CLIENT}/`
export const CLIENT_CREATE = `/${CLIENT}/`
export const CLIENT_UPDATE = `/${CLIENT}/%d/`
export const CLIENT_DELETE = `/${CLIENT}/%d/`
export const CLIENT_ITEM = `/${CLIENT}/%d/`
export const CLIENT_ITEM_DOCS = `/${CLIENT}/%d/docs/`

export const DOC_LIST = `/${MAIN}/documents`

export const APPLICATION = 'main/applications'
export const APPLICATION_LIST = `/${APPLICATION}/`
export const APPLICATION_LIST_ALL = `/${APPLICATION}/all`
export const APPLICATION_CREATE = `/${APPLICATION}/`
export const APPLICATION_UPDATE = `/${APPLICATION}/%d/`
export const APPLICATION_DELETE = `/${APPLICATION}/%d/`
export const APPLICATION_CONFIRM = `/${APPLICATION}/%d/confirm/`
export const APPLICATION_REJECT = `/${APPLICATION}/%d/reject/`
export const APPLICATION_REJECT_EXPERT = `/${APPLICATION}/%d/rejected_expert/`
export const APPLICATION_ITEM = `/${APPLICATION}/%d/`
export const APPLICATION_ITEM_DOCS = `/${APPLICATION}/%d/docs/`

export const EXPERT_EXPERTISE = 'main/expert_expertise'
export const EXPERT_EXPERTISE_LIST = `/${EXPERT_EXPERTISE}/`
export const EXPERT_EXPERTISE_CREATE = `/${EXPERT_EXPERTISE}/`
export const EXPERT_EXPERTISE_UPDATE = `/${EXPERT_EXPERTISE}/%d/`
export const EXPERT_EXPERTISE_DELETE = `/${EXPERT_EXPERTISE}/%d/`
export const EXPERT_EXPERTISE_CONFIRM = `/${EXPERT_EXPERTISE}/%d/confirm/`
export const EXPERT_EXPERTISE_ANSWER = `/${EXPERT_EXPERTISE}/%d/answer/`
export const EXPERT_EXPERTISE_REJECT = `/${EXPERT_EXPERTISE}/%d/reject/`
export const EXPERT_EXPERTISE_ITEM = `/${EXPERT_EXPERTISE}/%d/`

export const EXPERT_PLACE = 'main/expert_place'
export const EXPERT_PLACE_LIST = `/${EXPERT_PLACE}/`
export const EXPERT_PLACE_CREATE = `/${EXPERT_PLACE}/`
export const EXPERT_PLACE_UPDATE = `/${EXPERT_PLACE}/%d/`
export const EXPERT_PLACE_DELETE = `/${EXPERT_PLACE}/%d/`
export const EXPERT_PLACE_CONFIRM = `/${EXPERT_PLACE}/%d/confirm/`
export const EXPERT_PLACE_RESULT_CONFIRM = `/${EXPERT_PLACE}/%d/confirm_result/`
export const EXPERT_PLACE_ANSWER = `/${EXPERT_PLACE}/%d/answer/`
export const EXPERT_PLACE_REJECT = `/${EXPERT_PLACE}/%d/reject/`
export const EXPERT_PLACE_ITEM = `/${EXPERT_PLACE}/%d/`

export const RE_AUDIT_EXPERT = 'main/re_audit_expert'
export const RE_AUDIT_EXPERT_LIST = `/${RE_AUDIT_EXPERT}/`
export const RE_AUDIT_EXPERT_CREATE = `/${RE_AUDIT_EXPERT}/`
export const RE_AUDIT_EXPERT_UPDATE = `/${RE_AUDIT_EXPERT}/%d/`
export const RE_AUDIT_EXPERT_DELETE = `/${RE_AUDIT_EXPERT}/%d/`
export const RE_AUDIT_EXPERT_CONFIRM = `/${RE_AUDIT_EXPERT}/%d/confirm/`
export const RE_AUDIT_EXPERT_RESULT_CONFIRM = `/${RE_AUDIT_EXPERT}/%d/confirm_result/`
export const RE_AUDIT_EXPERT_ANSWER = `/${RE_AUDIT_EXPERT}/%d/answer/`
export const RE_AUDIT_EXPERT_REJECT = `/${RE_AUDIT_EXPERT}/%d/reject/`
export const RE_AUDIT_EXPERT_ITEM = `/${RE_AUDIT_EXPERT}/%d/`

export const COMMISSION = 'main/commissions'
export const COMMISSION_LIST = `/${COMMISSION}/`
export const COMMISSION_CREATE = `/${COMMISSION}/`
export const COMMISSION_UPDATE = `/${COMMISSION}/%d/`
export const COMMISSION_DELETE = `/${COMMISSION}/%d/`
export const COMMISSION_CONFIRM = `/${COMMISSION}/%d/confirm/`
export const COMMISSION_REJECT = `/${COMMISSION}/%d/reject/`
export const COMMISSION_ITEM = `/${COMMISSION}/%d/`

export const CONTRACT = 'main/contract'
export const CONTRACT_LIST = `/${CONTRACT}/`
export const CONTRACT_CREATE = `/${CONTRACT}/`
export const CONTRACT_UPDATE = `/${CONTRACT}/%d/`
export const CONTRACT_DELETE = `/${CONTRACT}/%d/`
export const CONTRACT_CONFIRM = `/${CONTRACT}/%d/paid/`
export const CONTRACT_ITEM = `/${CONTRACT}/%d/`

export const CONTRACT_PLACE = 'main/contract_place'
export const CONTRACT_PLACE_LIST = `/${CONTRACT_PLACE}/`
export const CONTRACT_PLACE_CREATE = `/${CONTRACT_PLACE}/`
export const CONTRACT_PLACE_UPDATE = `/${CONTRACT_PLACE}/%d/`
export const CONTRACT_PLACE_DELETE = `/${CONTRACT_PLACE}/%d/`
export const CONTRACT_PLACE_CONFIRM = `/${CONTRACT_PLACE}/%d/paid/`
export const CONTRACT_PLACE_ITEM = `/${CONTRACT_PLACE}/%d/`

export const REESTR = 'main/register'
export const REESTR_LIST = `/${REESTR}/`
export const REESTR_CREATE = `/${REESTR}/`
export const REESTR_UPDATE = `/${REESTR}/%d/`
export const REESTR_DELETE = `/${REESTR}/%d/`
export const REESTR_CONFIRM = `/${REESTR}/%d/paid/`
export const REESTR_ITEM = `/${REESTR}/%d/`

export const TEMPLATE = `${MAIN}/templates`
export const TEMPLATE_LIST = `/${TEMPLATE}/`

export const TEMPLATE_DOCUMENT_LIST = `${MAIN}/templates/`
export const TEMPLATE_DOCUMENT_CREATE = `${TEMPLATE_DOCUMENT_LIST}`
export const TEMPLATE_DOCUMENT_UPDATE = `${TEMPLATE_DOCUMENT_LIST}%d/`
export const TEMPLATE_DOCUMENT_ITEM = `${TEMPLATE_DOCUMENT_LIST}%d/`
export const TEMPLATE_DOCUMENT_DELETE = `${TEMPLATE_DOCUMENT_LIST}%d/`
