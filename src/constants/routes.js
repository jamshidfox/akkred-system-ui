export const LOGIN_PATH = '/login'

const ID = ':id(\\d+)'

const SETTINGS = 'settings'

export const HOTEL = 'hotel'
export const SETTINGS_CLIENT_INFO = 'client_info'
export const SETTINGS_HOTEL_URL = `/${SETTINGS}/${HOTEL}/`
export const SETTINGS_CLIENT_INFO_URL = `/${SETTINGS}/${SETTINGS_CLIENT_INFO}/`

export const EMPLOYEES = 'employees'
export const EMPLOYEES_TYPE_LIST = `/${SETTINGS}/${EMPLOYEES}/`
export const EMPLOYEES_LIST_URL = `/${SETTINGS}/${EMPLOYEES}/`
export const EMPLOYEES_CREATE_URL = `/${SETTINGS}/${EMPLOYEES}/create`
export const EMPLOYEES_LIST_PATH = `/${SETTINGS}/${EMPLOYEES}/${ID}`
export const EMPLOYEES_UPDATE_URL = `/${SETTINGS}/${EMPLOYEES}/%d`

export const TECHNICAL_EXPERT = 'technical_experts'
export const TECHNICAL_EXPERT_TYPE_LIST = `/${SETTINGS}/${TECHNICAL_EXPERT}/`
export const TECHNICAL_EXPERT_LIST_URL = `/${SETTINGS}/${TECHNICAL_EXPERT}/`
export const TECHNICAL_EXPERT_CREATE_URL = `/${SETTINGS}/${TECHNICAL_EXPERT}/create`
export const TECHNICAL_EXPERT_LIST_PATH = `/${SETTINGS}/${TECHNICAL_EXPERT}/${ID}`
export const TECHNICAL_EXPERT_UPDATE_URL = `/${SETTINGS}/${TECHNICAL_EXPERT}/%d`

export const ROLE = 'roles'
export const ROLE_LIST_URL = `/${ROLE}/`
export const ROLE_UPDATE_URL = `/${ROLE}/%d`

export const GROUP = 'group'
export const GROUP_LIST_URL = `/${SETTINGS}/${GROUP}/`
export const GROUP_UPDATE_URL = `/${SETTINGS}/${GROUP}/%d`

const CLIENT = 'client'
export const CLIENT_LIST_URL = `/${CLIENT}/`
export const CLIENT_ITEM_URL = `/${CLIENT}/%d`
export const CLIENT_ITEM_PATH = `/${CLIENT}/${ID}/`
export const CLIENT_CREATE_URL = `/${CLIENT}/create`
export const CLIENT_UPDATE_URL = `/${CLIENT}/%d`
export const CLIENT_UPDATE_PATH = `/${CLIENT}/${ID}/`

const DASHBOARD = 'dashboard'
export const DASHBOARD_ = `/${DASHBOARD}`
export const DASHBOARD_APPLICATION = `/${DASHBOARD}/application`
export const DASHBOARD_PAYMENTS = `/${DASHBOARD}/payments`
export const DASHBOARD_LISTS = `/${DASHBOARD}/lists`
export const DASHBOARD_SIGNITURES = `/${DASHBOARD}/signutares`
export const DASHBOARD_AKKREDATIONS = `/${DASHBOARD}/akkredations`



const APPLICATION = 'application'
export const APPLICATION_LIST_URL = `/${APPLICATION}/`
export const APPLICATION_EXPERTISE_URL = `/${APPLICATION}/expertise`
export const APPLICATION_AUDIT_URL = `/${APPLICATION}/audit`
export const APPLICATION_ACCRED_URL = `/${APPLICATION}/accred`

export const APPLICATION_ALL_NEW_LIST_URL = `/${APPLICATION}/news`
export const APPLICATION_ALL_LIST_URL = `/${APPLICATION}/`
export const APPLICATION_ALL_EXPERTISE_URL = `/${APPLICATION}/all/expertise`
export const APPLICATION_ALL_AUDIT_URL = `/${APPLICATION}/all/audit`
export const APPLICATION_ALL_COMMISSION_URL = `/${APPLICATION}/all/accred`

export const APPLICATION_LIST_EXPERT_URL = `/${APPLICATION}/expert`
export const APPLICATION_ITEM_PATH = `/${APPLICATION}/${ID}/`
export const APPLICATION_ITEM_URL = `/${APPLICATION}/%d`
export const APPLICATION_CREATE_URL = `/${APPLICATION}/create`
export const APPLICATION_UPDATE_URL = `/${APPLICATION}/%d`
export const APPLICATION_UPDATE_PATH = `/${APPLICATION}/${ID}/`
export const APPLICATION_CONFIRM_URL = `/${APPLICATION}/confirm/${ID}`
export const APPLICATION_CONFIRM_PATH = `/${APPLICATION}/confirm/%d`
export const APPLICATION_MY_ORDERS_PATH = `/${APPLICATION}/my-orders`
export const APPLICATION_MY_ORDERS_URL = `/${APPLICATION}/my-orders`
export const APPLICATION_ORDERS_PATH = `/${APPLICATION}/orders`

const EXPERT_EXPERTISE = 'expert_expertise'
export const EXPERT_EXPERTISE_LIST_URL = `/${EXPERT_EXPERTISE}/`
export const EXPERT_EXPERTISE_ITEM_PATH = `/${EXPERT_EXPERTISE}/${ID}/`
export const EXPERT_EXPERTISE_ITEM_URL = `/${EXPERT_EXPERTISE}/%d`
export const EXPERT_EXPERTISE_CREATE_URL = `/${EXPERT_EXPERTISE}/create`
export const EXPERT_EXPERTISE_UPDATE_URL = `/${EXPERT_EXPERTISE}/%d`
export const EXPERT_EXPERTISE_UPDATE_PATH = `/${EXPERT_EXPERTISE}/${ID}/`
export const EXPERT_EXPERTISE_CONFIRM_URL = `/${EXPERT_EXPERTISE}/confirm/${ID}`
export const EXPERT_EXPERTISE_CONFIRM_PATH = `/${EXPERT_EXPERTISE}/confirm/%d`

const COMMISSION = 'commission'
export const COMMISSION_LIST_URL = `/${COMMISSION}/`
export const COMMISSION_ITEM_PATH = `/${COMMISSION}/${ID}/`
export const COMMISSION_ITEM_URL = `/${COMMISSION}/%d`
export const COMMISSION_CREATE_URL = `/${COMMISSION}/create`
export const COMMISSION_UPDATE_URL = `/${COMMISSION}/%d`
export const COMMISSION_UPDATE_PATH = `/${COMMISSION}/${ID}/`
export const COMMISSION_CONFIRM_URL = `/${COMMISSION}/confirm/${ID}`
export const COMMISSION_CONFIRM_PATH = `/${COMMISSION}/confirm/%d`

const EXPERT_PLACE = 'expert_place'
export const EXPERT_PLACE_LIST_URL = `/${EXPERT_PLACE}/`
export const EXPERT_PLACE_ITEM_PATH = `/${EXPERT_PLACE}/${ID}/`
export const EXPERT_PLACE_ITEM_URL = `/${EXPERT_PLACE}/%d`
export const EXPERT_PLACE_CREATE_URL = `/${EXPERT_PLACE}/create`
export const EXPERT_PLACE_UPDATE_URL = `/${EXPERT_PLACE}/%d`
export const EXPERT_PLACE_UPDATE_PATH = `/${EXPERT_PLACE}/${ID}/`
export const EXPERT_PLACE_CONFIRM_URL = `/${EXPERT_PLACE}/confirm/${ID}`
export const EXPERT_PLACE_CONFIRM_PATH = `/${EXPERT_PLACE}/confirm/%d`

const RE_AUDIT_EXPERT = 're_audit_expert'
export const RE_AUDIT_EXPERT_LIST_URL = `/${RE_AUDIT_EXPERT}/`
export const RE_AUDIT_EXPERT_ITEM_PATH = `/${RE_AUDIT_EXPERT}/${ID}/`
export const RE_AUDIT_EXPERT_ITEM_URL = `/${RE_AUDIT_EXPERT}/%d`
export const RE_AUDIT_EXPERT_CREATE_URL = `/${RE_AUDIT_EXPERT}/create`
export const RE_AUDIT_EXPERT_UPDATE_URL = `/${RE_AUDIT_EXPERT}/%d`
export const RE_AUDIT_EXPERT_UPDATE_PATH = `/${RE_AUDIT_EXPERT}/${ID}/`
export const RE_AUDIT_EXPERT_CONFIRM_URL = `/${RE_AUDIT_EXPERT}/confirm/${ID}`
export const RE_AUDIT_EXPERT_CONFIRM_PATH = `/${RE_AUDIT_EXPERT}/confirm/%d`

const CLIENT_INFO = 'client_info'
export const CLIENT_INFO_LIST_URL = `/${CLIENT_INFO}/`
export const CLIENT_INFO_ITEM_URL = `/${CLIENT_INFO}/%d`
export const CLIENT_INFO_ITEM_PATH = `/${CLIENT_INFO}/${ID}/`
export const CLIENT_INFO_CREATE_URL = `/${CLIENT_INFO}/create`
export const CLIENT_INFO_UPDATE_URL = `/${CLIENT_INFO}/%d`
export const CLIENT_INFO_UPDATE_PATH = `/${CLIENT_INFO}/${ID}/`

const CONTRACT = 'contract'
export const CONTRACT_LIST_URL = `/${CONTRACT}/`
export const CONTRACT_ITEM_URL = `/${CONTRACT}/%d`
export const CONTRACT_ITEM_PATH = `/${CONTRACT}/${ID}/`
export const CONTRACT_CREATE_URL = `/${CONTRACT}/create`
export const CONTRACT_UPDATE_URL = `/${CONTRACT}/%d`
export const CONTRACT_UPDATE_PATH = `/${CONTRACT}/${ID}/`

const CONTRACT_PLACE = 'contract_place'
export const CONTRACT_PLACE_LIST_URL = `/${CONTRACT_PLACE}/`
export const CONTRACT_PLACE_ITEM_URL = `/${CONTRACT_PLACE}/%d`
export const CONTRACT_PLACE_ITEM_PATH = `/${CONTRACT_PLACE}/${ID}/`
export const CONTRACT_PLACE_CREATE_URL = `/${CONTRACT_PLACE}/create`
export const CONTRACT_PLACE_UPDATE_URL = `/${CONTRACT_PLACE}/%d`
export const CONTRACT_PLACE_UPDATE_PATH = `/${CONTRACT_PLACE}/${ID}/`

const REESTR = 'reestr'
export const REESTR_LIST_URL = `/${REESTR}/`
export const REESTR_ITEM_URL = `/${REESTR}/%d`
export const REESTR_ITEM_PATH = `/${REESTR}/${ID}/`
export const REESTR_CREATE_URL = `/${REESTR}/create`
export const REESTR_UPDATE_URL = `/${REESTR}/%d`
export const REESTR_UPDATE_PATH = `/${REESTR}/${ID}/`

const TEMPLATE_DOCUMENT = 'template'
export const TEMPLATE_DOCUMENT_LIST_URL = `/${TEMPLATE_DOCUMENT}/`
export const TEMPLATE_DOCUMENT_ITEM_URL = `/${TEMPLATE_DOCUMENT}/%d`
export const TEMPLATE_DOCUMENT_ITEM_PATH = `/${TEMPLATE_DOCUMENT}/${ID}/`
export const TEMPLATE_DOCUMENT_CREATE_URL = `/${TEMPLATE_DOCUMENT}/create`
export const TEMPLATE_DOCUMENT_UPDATE_URL = `/${TEMPLATE_DOCUMENT}/%d`
export const TEMPLATE_DOCUMENT_UPDATE_PATH = `/${TEMPLATE_DOCUMENT}/${ID}/`
