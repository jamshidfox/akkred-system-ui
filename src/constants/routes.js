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

export const PARTNERS = 'partners'
export const PARTNERS_LIST_URL = `/${SETTINGS}/${PARTNERS}/`
export const PARTNERS_UPDATE_URL = `/${SETTINGS}/${PARTNERS}/%d`

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

const APPLICATION = 'application'
export const APPLICATION_LIST_URL = `/${APPLICATION}/`
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
export const APPLICATION_ORDERS_URL = `/${APPLICATION}/orders`
export const APPLICATION_TESTS_PATH = `/${APPLICATION}/test`
export const APPLICATION_TESTS_URL = `/${APPLICATION}/test`
export const APPLICATION_ORDERS_DETAIL_PATH = `/${APPLICATION}/orders/${ID}`
export const APPLICATION_ORDERS_DETAIL_URL = `/${APPLICATION}/orders/%d`

const EXPERT_EXPERTISE = 'expert_expertise'
export const EXPERT_EXPERTISE_LIST_URL = `/${EXPERT_EXPERTISE}/`
export const EXPERT_EXPERTISE_ITEM_PATH = `/${EXPERT_EXPERTISE}/${ID}/`
export const EXPERT_EXPERTISE_ITEM_URL = `/${EXPERT_EXPERTISE}/%d`
export const EXPERT_EXPERTISE_CREATE_URL = `/${EXPERT_EXPERTISE}/create`
export const EXPERT_EXPERTISE_UPDATE_URL = `/${EXPERT_EXPERTISE}/%d`
export const EXPERT_EXPERTISE_UPDATE_PATH = `/${EXPERT_EXPERTISE}/${ID}/`
export const EXPERT_EXPERTISE_CONFIRM_URL = `/${EXPERT_EXPERTISE}/confirm/${ID}`
export const EXPERT_EXPERTISE_CONFIRM_PATH = `/${EXPERT_EXPERTISE}/confirm/%d`

const CLIENT_INFO = 'client_info'
export const CLIENT_INFO_LIST_URL = `/${CLIENT_INFO}/`
export const CLIENT_INFO_ITEM_URL = `/${CLIENT_INFO}/%d`
export const CLIENT_INFO_ITEM_PATH = `/${CLIENT_INFO}/${ID}/`
export const CLIENT_INFO_CREATE_URL = `/${CLIENT_INFO}/create`
export const CLIENT_INFO_UPDATE_URL = `/${CLIENT_INFO}/%d`
export const CLIENT_INFO_UPDATE_PATH = `/${CLIENT_INFO}/${ID}/`
