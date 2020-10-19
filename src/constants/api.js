// export const DOMAIN_URL = 'http://142.93.232.44'
export const DOMAIN_URL = 'http://localhost:8000'
// export const DOMAIN_URL = 'http://akkred.uz:8080'
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

export const GROUP = `${MAIN}/group`
export const GROUP_LIST = `/${GROUP}/`
export const GROUP_CREATE = `/${GROUP}/`
export const GROUP_UPDATE = `/${GROUP}/%d/`
export const GROUP_ITEM = `/${GROUP}/%d/`
export const GROUP_DELETE = `/${GROUP}/%d/`

export const PERMISSION = `${MAIN}/permission`
export const PERMISSION_LIST = `/${PERMISSION}/`

export const ROOM_TYPE = 'hotels/rooms_category'
export const ROOM_TYPE_LIST = `/${ROOM_TYPE}/`

export const ROOM_DELETE = 'hotels/rooms_category/%d/'

export const HOTEL_ATTRACTION_TYPE = `hotels/attractions_type`
export const HOTEL_ATTRACTION_TYPE_LIST = `/${HOTEL_ATTRACTION_TYPE}/`

const CLIENTS = 'clients'

export const CLIENT = `${MAIN}/clients`
export const CLIENT_LIST = `/${CLIENT}/`
export const CLIENT_CREATE = `/${CLIENT}/`
export const CLIENT_UPDATE = `/${CLIENT}/%d/`
export const CLIENT_DELETE = `/${CLIENT}/%d/`
export const CLIENT_ITEM = `/${CLIENT}/%d/`
export const CLIENT_ITEM_DOCS = `/${CLIENT}/%d/docs/`

export const APPLICATION = 'main/applications'
export const APPLICATION_LIST = `/${APPLICATION}/`
export const APPLICATION_CREATE = `/${APPLICATION}/`
export const APPLICATION_UPDATE = `/${APPLICATION}/%d/`
export const APPLICATION_DELETE = `/${APPLICATION}/%d/`
export const APPLICATION_CONFIRM = `/${APPLICATION}/%d/confirm/`
export const APPLICATION_REJECT = `/${APPLICATION}/%d/reject/`
export const APPLICATION_ITEM = `/${APPLICATION}/%d/`
export const APPLICATION_ITEM_DOCS = `/${APPLICATION}/%d/docs/`

const BOOKING = `${CLIENTS}/booking`
export const BOOKING_LIST = `/${BOOKING}/`
export const BOOKING_ITEM = `/${BOOKING}/%d`
export const BOOKING_CREATE = `/${BOOKING}/`
export const BOOKING_UPDATE = `/${BOOKING}/%d/`
