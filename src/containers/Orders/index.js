import * as ROUTES from 'constants/routes'
import Layout from '../../components/Layouts'
import MyOrdersContainer from './containers/MyOrders'

export default [
  {
    path: ROUTES.ORDERS_PATH,
    layout: Layout,
    component: MyOrdersContainer
  },
  {
    path: ROUTES.MY_ORDERS_PATH,
    layout: Layout,
    component: MyOrdersContainer
  }
]
