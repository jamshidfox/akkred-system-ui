export const DOMAIN_URL = 'http://142.93.232.44'
export const API_URL = `${DOMAIN_URL}`

const MAIN = 'main'
export const CHECK_TOKEN = '/main/check_token/'
export const LOGIN = `${MAIN}/login/`
export const LOGOUT = `${MAIN}/logout/`
export const FILE_UPLOAD = '/main/file/'

export const EMPLOYEES_LIST = `${MAIN}/`
export const EMPLOYEES_CREATE = `${MAIN}`
export const EMPLOYEES_UPDATE = `/${MAIN}/%d/`
export const EMPLOYEES_ITEM = `/${MAIN}/%d/`

export const AUTH = 'auth'
export const AUTH_ACCESS_TOKEN = `/${AUTH}/access-token/`
export const AUTH_REFRESH_TOKEN = `/${AUTH}/refresh-token/`
export const AUTH_ME = `/${AUTH}/me/`

export const HOTEL = 'hotels/hotel'
export const HOTEL_LIST = `/${HOTEL}/`
export const HOTEL_CREATE = `/${HOTEL}/`
export const HOTEL_UPDATE = `/${HOTEL}/%d/`

export const REQUISITES_UPDATE = `/${HOTEL}`

export const BUILDING_CREATE = '/hotels/buildings/'
export const BUILDING_LIST = '/hotels/buildings/'
export const BUILDING_UPDATE = '/hotels/buildings/%d/'
export const BUILDING_DELETE = '/hotels/buildings/%d/'
export const BUILDING_DETAIL = '/hotels/buildings/%d/'
export const BUILDING_FLOORS_DETAIL = '/hotels/floors/?building=%d'
export const BUILDING_FLOORS_UPDATE = '/hotels/floors/%d/'
export const BUILDING_FLOORS_DELETE = '/hotels/floors/%d/'

export const ROOM = 'hotels/rooms'
export const ROOM_LIST = `/${ROOM}/`
export const ROOM_CREATE = `/${ROOM}/`
export const ROOM_UPDATE = `/${ROOM}/%d/`
export const ROOM_ITEM = `/${ROOM}/%d/`

export const ROOM_CREATE_BULK = `/${ROOM}/bulk_create/`

export const ROOM_TYPE = 'hotels/rooms_category'
export const ROOM_TYPE_LIST = `/${ROOM_TYPE}/`

export const SERVICES_TYPE = 'hotels/hotel_services_type'
export const SERVICES_TYPE_LIST = `/${SERVICES_TYPE}/`

export const SERVICES = 'hotels/hotel_services'
export const SERVICES_LIST = `/${SERVICES}/`

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

export const HOTEL_ATTRACTION_TYPE = `hotels/attractions_type`
export const HOTEL_ATTRACTION_TYPE_LIST = `/${HOTEL_ATTRACTION_TYPE}/`

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
export const RATES_UPDATE = `/${RATES}/%d/`

const SERVICES_PRICE = `${FINANCE}/service_price`
export const SERVICES_PRICE_LIST = `/${SERVICES_PRICE}/`
export const SERVICES_PRICE_ITEM = `/${SERVICES_PRICE}/%d`
export const SERVICES_PRICE_CREATE = `/${SERVICES_PRICE}/`
export const SERVICES_PRICE_UPDATE = `/${SERVICES_PRICE}/%d`

const BOOKING = `${CLIENTS}/booking`
export const BOOKING_LIST = `/${BOOKING}/`
export const BOOKING_ITEM = `/${BOOKING}/%d`
export const BOOKING_CREATE = `/${BOOKING}/`
export const BOOKING_UPDATE = `/${BOOKING}/%d/`

const TRANSACTION = `${FINANCE}/transaction`
export const TRANSACTION_LIST = `/${TRANSACTION}/`
export const TRANSACTION_ITEM = `/${TRANSACTION}/%d`
export const TRANSACTION_CREATE = `/${TRANSACTION}/`
export const TRANSACTION_UPDATE = `/${TRANSACTION}/%d/`

const RULE_GROUP = `${FINANCE}/hotel_rule_group`
export const RULE_GROUP_LIST = `/${RULE_GROUP}/`
export const RULE_GROUP_ITEM = `/${RULE_GROUP}/%d`
export const RULE_GROUP_CREATE = `/${RULE_GROUP}/`
export const RULE_GROUP_UPDATE = `/${RULE_GROUP}/%d/`

const RULE_PRICE = `${FINANCE}/hotel_rule_price`
export const RULE_PRICE_LIST = `/${RULE_PRICE}/`
export const RULE_PRICE_ITEM = `/${RULE_PRICE}/%d`
export const RULE_PRICE_CREATE = `/${RULE_PRICE}/`
export const RULE_PRICE_UPDATE = `/${RULE_PRICE}/%d/`
