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
export const CLIENT_UPDATE_URL = `/${CLIENT}/`
