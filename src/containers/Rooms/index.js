import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import RoomTypeListContainer from './containers/RoomTypeListContainer'

export default () => [
  {
    exact: true,
    path: ROUTES.SETTING_ROOMS_TYPE_LIST,
    layout: Layouts,
    component: RoomTypeListContainer
  }
]
