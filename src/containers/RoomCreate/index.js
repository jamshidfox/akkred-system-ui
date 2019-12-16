import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import RoomCreateContainer from './containers/RoomCreateContainer'
import RoomTypeListContainer from './containers/RoomTypeListContainer'

export default () => [
  {
    exact: true,
    path: ROUTES.ROOM_CREATE_URL,
    layout: Layouts,
    component: RoomCreateContainer
  },
  {
    exact: true,
    path: ROUTES.ROOM_LIST_URL,
    layout: Layouts,
    component: RoomTypeListContainer
  }
]
