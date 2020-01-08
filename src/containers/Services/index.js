import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ServicesContainer from './containers/ServicesCreateContainer'
import ServicesListContainer from './containers/ServicesListContainer'

export default () => [
  {
    path: ROUTES.SERVICES_PRICE_CREATE_URL,
    layout: Layouts,
    component: ServicesContainer,
  },
  {
    exact: true,
    path: ROUTES.SERVICES_PRICE_LIST_URL,
    layout: Layouts,
    component: ServicesListContainer
  }
]
