import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ReservationCreateContainer from './containers/ReservationCreateContainer'
import ReservationListContainer from './containers/ReservationListContainer'
import ReservationUpdateContainer from './containers/ReservationUpdateContainer'

export default () => [
  {
    exact: true,
    path: ROUTES.RESERVATION_CREATE_URL,
    layout: Layouts,
    component: ReservationCreateContainer
  },
  {
    exact: true,
    path: ROUTES.PLACING_LIST_URL,
    layout: Layouts,
    component: ReservationListContainer
  },
  {
    exact: true,
    path: ROUTES.PLACING_UPDATE_PATH,
    layout: Layouts,
    component: ReservationUpdateContainer
  }
]
