import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import RatesContainer from './containers/RatesCreateContainer'
import RatesListContainer from './containers/RatesListContainer'
// import ClientUpdateContainer from './containers/ClientUpdateContainer'

export default () => [
  {
    path: ROUTES.RATES_CREATE_URL,
    layout: Layouts,
    component: RatesContainer,
  },
  // {
  //   exact: true,
  //   path: ROUTES.CLIENT_CREATE_URL,
  //   layout: Layouts,
  //   component: ClientCreateContainer
  // },
  {
    exact: true,
    path: ROUTES.RATES_LIST_URL,
    layout: Layouts,
    component: RatesListContainer
  }
]
