import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import EmployeesContainer from './containers/EmployeesCreateContainer'
import EmployeesListContainer from './containers/EmployeesListContainer'
import EmployeesUpdateContainer from './containers/EmployeesUpdateContainer'

export default () => [
  {
    path: ROUTES.EMPLOYEES_CREATE_URL,
    layout: Layouts,
    component: EmployeesContainer,
  },
  {
    exact: true,
    path: ROUTES.EMPLOYEES_LIST_URL,
    layout: Layouts,
    component: EmployeesListContainer
  },
  {
    exact: true,
    path: ROUTES.EMPLOYEES_LIST_PATH,
    layout: Layouts,
    component: EmployeesUpdateContainer
  }
]
