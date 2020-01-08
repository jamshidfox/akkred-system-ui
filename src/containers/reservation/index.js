import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ReservationCreateContainer from './containers/ReservationCreateContainer'
import ReservationListContainer from './containers/ReservationListContainer'

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
  }
]
