import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ApplicationCreateContainer from './containers/ApplicationCreateContainer'
import ApplicationListContainer from './containers/ApplicationListContainer'
import ApplicationMyListContainer from './containers/ApplicationMyListContainer'

import ApplicationUpdateContainer from './containers/ApplicationUpdateContainer'
import ApplicationItemContainer from './containers/ApplicationItemContainer'
import ApplicationConfirmContainer from './containers/ApplicationConfirmContainer'

export default () => [
  {
    path: ROUTES.APPLICATION_UPDATE_PATH,
    layout: Layouts,
    component: ApplicationUpdateContainer,
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_CREATE_URL,
    layout: Layouts,
    component: ApplicationCreateContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_LIST_URL,
    layout: Layouts,
    component: ApplicationListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_ORDERS_PATH,
    layout: Layouts,
    component: ApplicationListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_TESTS_PATH,
    layout: Layouts,
    component: ApplicationListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_MY_ORDERS_PATH,
    layout: Layouts,
    component: ApplicationMyListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_ORDERS_DETAIL_PATH,
    layout: Layouts,
    component: ApplicationItemContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_CONFIRM_URL,
    layout: Layouts,
    component: ApplicationConfirmContainer
  }
]
