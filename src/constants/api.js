export const DOMAIN_URL = 'http://142.93.232.44'
export const API_URL = `${DOMAIN_URL}`

const MAIN = 'main'
export const CHECK_TOKEN = '/main/check_token/'
export const LOGIN = `${MAIN}/login/`
export const LOGOUT = `${MAIN}/logout/`
export const FILE_UPLOAD = '/main/file/'
export const AUTH = 'auth'
export const AUTH_ACCESS_TOKEN = `/${AUTH}/access-token/`
export const AUTH_REFRESH_TOKEN = `/${AUTH}/refresh-token/`
export const AUTH_ME = `/${AUTH}/me/`

export const HOTEL = 'hotels/hotel'
export const HOTEL_LIST = `/${HOTEL}/`
export const HOTEL_CREATE = `/${HOTEL}/`
export const HOTEL_UPDATE = `/${HOTEL}/%d/`

export const ROOM = 'hotels/rooms'
export const ROOM_LIST = `/${ROOM}/`
export const ROOM_CREATE = `/${ROOM}/`
export const ROOM_UPDATE = `/${ROOM}/%d/`
export const ROOM_ITEM = `/${ROOM}/%d/`

export const ROOM_CREATE_BULK = `/${ROOM}/bulk_create/`

export const ROOM_TYPE = 'hotels/rooms_category'
export const ROOM_TYPE_LIST = `/${ROOM_TYPE}/`
export const ROOM_TYPE_CREATE = `/${ROOM_TYPE}/`

export const ROOM_FACILITY_TYPE = 'hotels/room_facility_type'
export const ROOM_FACILITY_TYPE_LIST = `/${ROOM_FACILITY_TYPE}/`

export const COUNTRY_LIST = 'hotels/country/'
export const FACILITIES = 'hotels/facilities'
export const FACILITIES_LIST = `/${FACILITIES}/`

export const HOTEL_TYPE = 'hotels/hotel_type'
export const HOTEL_TYPE_LIST = `/${HOTEL_TYPE}/`

export const HOTEL_SERVICE_TYPE = 'hotels/hotel_services_type'
export const HOTEL_SERVICE_TYPE_LIST = `/${HOTEL_SERVICE_TYPE}/`

export const HOTEL_SERVICE = 'hotels/hotel_services'
export const HOTEL_SERVICE_LIST = `/${HOTEL_SERVICE}/`

const CLIENTS = 'clients'

export const RESERVATION = `${CLIENTS}/reservation`
export const RESERVATION_CREATE = `/${RESERVATION}/`
export const PLACING_LIST = `/${RESERVATION}/`
export const PLACING_ITEM = `/${RESERVATION}/%d/`
export const PLACING_UPDATE = `/${RESERVATION}/%d/`

export const CLIENT = 'clients/client'
export const CLIENT_LIST = `/${CLIENT}/`
export const CLIENT_CREATE = `/${CLIENT}/`
export const CLIENT_UPDATE = `/${CLIENT}/%d/`
export const CLIENT_ITEM = `/${CLIENT}/%d/`
export const CLIENT_ITEM_DOCS = `/${CLIENT}/%d/docs/`

const FINANCE = 'finance'
const RATES = `${FINANCE}/rates`
export const RATES_LIST = `/${RATES}/`
export const RATES_ITEM = `/${RATES}/%d`
export const RATES_CREATE = `/${RATES}/`
export const RATES_UPDATE = `/${RATES}/%d`
