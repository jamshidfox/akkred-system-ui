export const LOGIN_PATH = '/login'

const ID = ':id(\\d+)'

const SETTINGS = 'settings'

export const HOTEL = 'hotel'
export const SETTINGS_HOTEL_URL = `/${SETTINGS}/${HOTEL}/`

export const SETTING_PRICE_LIST = 'price-list'
export const SETTING_PRICE_LIST_URL = `/${SETTINGS}/${SETTING_PRICE_LIST}/`

export const SETTING_ROOMS = 'rooms'
export const SETTING_ROOMS_TYPE_LIST = `/${SETTINGS}/${SETTING_ROOMS}/`
export const SETTING_ROOMS_LIST_URL = `/${SETTINGS}/${SETTING_ROOMS}/%d`
export const SETTING_ROOMS_LIST_PATH = `/${SETTINGS}/${SETTING_ROOMS}/${ID}`

export const SETTING_RULE_GROUP = 'rule-group'
export const SETTING_RULE_GROUP_LIST = `/${SETTINGS}/${SETTING_RULE_GROUP}/`
export const SETTING_RULE_GROUP_CREATE_URL = `/${SETTINGS}/${SETTING_RULE_GROUP}/create`
export const SETTING_RULE_GROUP_UPDATE_URL = `/${SETTINGS}/${SETTING_RULE_GROUP}/%d`

export const SETTING_RULE_GROUP_UPDATE_PATH = `/${SETTINGS}/${SETTING_RULE_GROUP}/${ID}/`

export const SETTING_RULE_PRICE = 'rule-price'
export const SETTING_RULE_PRICE_LIST = `/${SETTINGS}/${SETTING_RULE_PRICE}/`
export const SETTING_RULE_PRICE_CREATE_URL = `/${SETTINGS}/${SETTING_RULE_PRICE}/create`
export const SETTING_RULE_PRICE_UPDATE_PATH = `/${SETTINGS}/${SETTING_RULE_PRICE}/${ID}/`

export const EMPLOYEES = 'employees'
export const EMPLOYEES_TYPE_LIST = `/${SETTINGS}/${EMPLOYEES}/`
export const EMPLOYEES_LIST_URL = `/${SETTINGS}/${EMPLOYEES}/`
export const EMPLOYEES_CREATE_URL = `/${SETTINGS}/${EMPLOYEES}/create`
export const EMPLOYEES_LIST_PATH = `/${SETTINGS}/${EMPLOYEES}/${ID}`

const RESERVATION = 'reservation'
export const RESERVATION_LIST_URL = `/${RESERVATION}/`
export const RESERVATION_ITEM_URL = `/${RESERVATION}/%d`
export const RESERVATION_ITEM_PATH = `/${RESERVATION}/${ID}/`
export const RESERVATION_CREATE_URL = `/${RESERVATION}/create`
export const RESERVATION_UPDATE_URL = `/${RESERVATION}/`

const ROOM = 'rooms'
export const ROOM_LIST_URL = `/${ROOM}/`
export const ROOM_ITEM_URL = `/${ROOM}/%d`
export const ROOM_ITEM_PATH = `/${ROOM}/${ID}/`
export const ROOM_CREATE_URL = `/${ROOM}/create/${ID}`
export const ROOM_UPDATE_URL = `/${ROOM}/%d`
export const ROOM_UPDATE_PATH = `/${ROOM}/${ID}/`

const CLIENT = 'client'
export const CLIENT_LIST_URL = `/${CLIENT}/`
export const CLIENT_ITEM_URL = `/${CLIENT}/%d`
export const CLIENT_ITEM_PATH = `/${CLIENT}/${ID}/`
export const CLIENT_CREATE_URL = `/${CLIENT}/create`
export const CLIENT_UPDATE_URL = `/${CLIENT}/%d`
export const CLIENT_UPDATE_PATH = `/${CLIENT}/${ID}/`

const FINANCE = 'finance'
const RATES = `${FINANCE}/rates`
export const RATES_LIST_URL = `/${RATES}/`
export const RATES_ITEM_URL = `/${RATES}/%d`
export const RATES_ITEM_PATH = `/${RATES}/${ID}/`
export const RATES_CREATE_URL = `/${RATES}/create`
export const RATES_UPDATE_URL = `/${RATES}/%d`
export const RATES_UPDATE_PATH = `/${RATES}/${ID}/`

const SERVICES_PRICE = `${FINANCE}/price`
export const SERVICES_PRICE_LIST_URL = `/${SERVICES_PRICE}/`
export const SERVICES_PRICE_ITEM_URL = `/${SERVICES_PRICE}/%d`
export const SERVICES_PRICE_ITEM_PATH = `/${SERVICES_PRICE}/${ID}/`
export const SERVICES_PRICE_CREATE_URL = `/${SERVICES_PRICE}/create`
export const SERVICES_PRICE_UPDATE_URL = `/${SERVICES_PRICE}/%d`
export const SERVICES_PRICE_UPDATE_PATH = `/${SERVICES_PRICE}/${ID}/`

const PLACING = 'placing'
export const PLACING_LIST_URL = `/${PLACING}/`
export const PLACING_ITEM_URL = `/${PLACING}/%d`
export const PLACING_UPDATE_URL = `/${PLACING}/%d/update`
export const PLACING_UPDATE_PATH = `/${PLACING}/${ID}/update`

const BOOKING = 'booking'
export const BOOKING_LIST_PATH = `/${BOOKING}/`
export const BOOKING_CREATE_PATH = `/${BOOKING}/create/`

const TRANSACTION = 'transaction'
export const TRANSACTION_LIST_URL = `/${TRANSACTION}/`
export const TRANSACTION_ITEM_URL = `/${TRANSACTION}/%d`
export const TRANSACTION_UPDATE_URL = `/${TRANSACTION}/%d/update`
export const TRANSACTION_UPDATE_PATH = `/${TRANSACTION}/${ID}/update`
