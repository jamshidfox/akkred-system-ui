import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import RolesListContainer from './containers/RolesListContainer'

export default () => [

  {
    exact: true,
    path: ROUTES.ROLE_LIST_URL,
    layout: Layouts,
    component: RolesListContainer
  },
  {
    exact: true,
    path: ROUTES.ROLE_UPDATE_URL,
    layout: Layouts,
    component: RolesListContainer
  }
]
