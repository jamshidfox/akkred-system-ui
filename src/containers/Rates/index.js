import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import RatesContainer from './containers/RatesCreateContainer'
import RatesListContainer from './containers/RatesListContainer'
import RatesUpdateContainer from './containers/RatesUpdateContainer'

export default () => [
  {
    path: ROUTES.RATES_CREATE_URL,
    layout: Layouts,
    component: RatesContainer,
  },
  {
    exact: true,
    path: ROUTES.RATES_UPDATE_PATH,
    layout: Layouts,
    component: RatesUpdateContainer
  },
  {
    exact: true,
    path: ROUTES.RATES_LIST_URL,
    layout: Layouts,
    component: RatesListContainer
  }
]
