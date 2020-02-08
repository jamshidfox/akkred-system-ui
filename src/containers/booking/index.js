import * as ROUTES from '../../constants/routes'
import Layout from '../../components/Layouts/Layout'

import BookingListContainer from './containers/BookingListContainer'

export default () => [
  {
    path: ROUTES.BOOKING_LIST_PATH,
    layout: Layout,
    component: BookingListContainer
  }
]
