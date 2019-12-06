import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ReservationCreateContainer from './containers/ReservationCreateContainer'

export default () => [
  {
    exact: true,
    path: ROUTES.RESERVATION_CREATE_URL,
    layout: Layouts,
    component: ReservationCreateContainer
  }
]
