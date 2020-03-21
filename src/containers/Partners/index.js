import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import PartnersListContainer from './containers/PartnersListContainer'

export default () => [

  {
    exact: true,
    path: ROUTES.PARTNERS_LIST_URL,
    layout: Layouts,
    component: PartnersListContainer
  },
  {
    exact: true,
    path: ROUTES.PARTNERS_UPDATE_URL,
    layout: Layouts,
    component: PartnersListContainer
  }
]
