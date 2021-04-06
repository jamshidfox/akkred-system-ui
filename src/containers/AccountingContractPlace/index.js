import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ApplicationListContainer from './containers/AccountingContractListContainer'
import EmployeesUpdateContainer from './containers/AccountingContractUpdateContainer'

export default () => [

  {
    exact: true,
    path: ROUTES.CONTRACT_PLACE_LIST_URL,
    layout: Layouts,
    component: ApplicationListContainer
  },

  {
    exact: true,
    path: ROUTES.CONTRACT_PLACE_UPDATE_PATH,
    layout: Layouts,
    component: EmployeesUpdateContainer
  },

]
