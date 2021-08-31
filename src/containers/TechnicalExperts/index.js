import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import EmployeesContainer from './containers/TechnicalExpertsCreateContainer'
import EmployeesListContainer from './containers/TechnicalExpertsListContainer'
import TechnicalExpertsUpdateContainer from './containers/TechnicalExpertsUpdateContainer'

export default () => [
  {
    path: ROUTES.TECHNICAL_EXPERT_CREATE_URL,
    layout: Layouts,
    component: EmployeesContainer,
  },
  {
    exact: true,
    path: ROUTES.TECHNICAL_EXPERT_LIST_URL,
    layout: Layouts,
    component: EmployeesListContainer
  },
  {
    exact: true,
    path: ROUTES.TECHNICAL_EXPERT_LIST_PATH,
    layout: Layouts,
    component: TechnicalExpertsUpdateContainer
  }
]
