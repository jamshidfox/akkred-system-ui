import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ClientCreateContainer from './containers/ClientCreateContainer'
import ClientListContainer from './containers/ClientListContainer'
import ClientUpdateContainer from './containers/ClientUpdateContainer'

export default () => [
  {
    path: ROUTES.APPLICATION_UPDATE_PATH,
    layout: Layouts,
    component: ClientUpdateContainer,
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_CREATE_URL,
    layout: Layouts,
    component: ClientCreateContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_LIST_URL,
    layout: Layouts,
    component: ClientListContainer
  }
]
