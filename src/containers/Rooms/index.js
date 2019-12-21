import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import RoomCreateContainer from './containers/RoomCreateContainer'
import RoomListContainer from './containers/RoomListContainer'
import RoomTypeListContainer from './containers/RoomTypeListContainer'
import RoomUpdateContainer from './containers/RoomUpdateContainer'

export default () => [
  {
    exact: true,
    path: ROUTES.SETTING_ROOMS_TYPE_LIST,
    layout: Layouts,
    component: RoomTypeListContainer,
  },
  {
    path: ROUTES.ROOM_UPDATE_PATH,
    layout: Layouts,
    component: RoomUpdateContainer,
  },
  {
    exact: true,
    path: ROUTES.ROOM_CREATE_URL,
    layout: Layouts,
    component: RoomCreateContainer
  },
  {
    exact: true,
    path: ROUTES.SETTING_ROOMS_LIST_PATH,
    layout: Layouts,
    component: RoomListContainer
  }
]
