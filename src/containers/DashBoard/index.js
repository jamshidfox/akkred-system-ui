import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import Dashboard from './containers/DashBoardContainer'
import DashBoardContainer from './containers/DashBoardApplication'
import DashBoardPayments from './containers/DashboardPaymentsContainer'
import DashBoardLists from './containers/DashBoardListContainer'
import DashBoardSigniture from './containers/DashBoardSignutare'
import DashBoardAkkedation from './containers/DashBoardAkkredation'
export default () => [
  {
    path: ROUTES.DASHBOARD_APPLICATION,
    layout: Layouts,
    component: DashBoardContainer,
  },
  {
    path: ROUTES.DASHBOARD_PAYMENTS,
    layout: Layouts,
    component: DashBoardPayments,
  },
  {
    path: ROUTES.DASHBOARD_LISTS,
    layout: Layouts,
    component: DashBoardLists,
  },
  {
    path: ROUTES.DASHBOARD_SIGNITURES,
    layout: Layouts,
    component: DashBoardSigniture,
  },
  {
    path: ROUTES.DASHBOARD_AKKREDATIONS,
    layout: Layouts,
    component: DashBoardAkkedation,
  },
  {
    path: ROUTES.DASHBOARD_,
    layout: Layouts,
    component: Dashboard,
  },
]
