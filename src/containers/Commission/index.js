import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ApplicationListContainer from './containers/ApplicationListContainer'
import EmployeesUpdateContainer from './containers/ApplicationUpdateContainer'

export default () => [

  {
    exact: true,
    path: ROUTES.COMMISSION_LIST_URL,
    layout: Layouts,
    component: ApplicationListContainer
  },

  {
    exact: true,
    path: ROUTES.COMMISSION_UPDATE_PATH,
    layout: Layouts,
    component: EmployeesUpdateContainer
  },

]
