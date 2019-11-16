import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import RoomListContainer from './containers/RoomListContainer'

export default () => [
  {
    exact: true,
    path: ROUTES.SETTING_ROOMS_LIST,
    layout: Layouts,
    component: RoomListContainer
  }
]
