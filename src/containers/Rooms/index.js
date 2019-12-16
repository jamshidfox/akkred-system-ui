import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

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
  }
]
