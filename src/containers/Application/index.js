import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ApplicationListContainer from './containers/ApplicationListContainer'
import ApplicationExpertiseListContainer from './containers/ApplicationExpertiseListContainer'
import ApplicationAuditListContainer from './containers/ApplicationAuditListContainer'
import ApplicationAccredCommissionstListContainer from './containers/ApplicationAccredCommissionstListContainer'

import ApplicationMyListContainer from './containers/ApplicationMyListContainer'
import ApplicationListAllCommissionContainer from './containers/ApplicationListAllCommissionContainer'
import ApplicationListAllAuditContainer from './containers/ApplicationListAllAuditContainer'
import ApplicationListAllExpertiseContainer from './containers/ApplicationListAllExpertiseContainer'

import ApplicationUpdateContainer from './containers/ApplicationUpdateContainer'
import ApplicationConfirmContainer from './containers/ApplicationConfirmContainer'

export default () => [
  {
    path: ROUTES.APPLICATION_UPDATE_PATH,
    layout: Layouts,
    component: ApplicationUpdateContainer,
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_LIST_URL,
    layout: Layouts,
    component: ApplicationListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_ORDERS_PATH,
    layout: Layouts,
    component: ApplicationListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_MY_ORDERS_PATH,
    layout: Layouts,
    component: ApplicationMyListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_CONFIRM_URL,
    layout: Layouts,
    component: ApplicationConfirmContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_EXPERTISE_URL,
    layout: Layouts,
    component: ApplicationExpertiseListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_AUDIT_URL,
    layout: Layouts,
    component: ApplicationAuditListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_ACCRED_URL,
    layout: Layouts,
    component: ApplicationAccredCommissionstListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_ALL_EXPERTISE_URL,
    layout: Layouts,
    component: ApplicationListAllExpertiseContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_ALL_AUDIT_URL,
    layout: Layouts,
    component: ApplicationListAllAuditContainer
  },

  {
    exact: true,
    path: ROUTES.APPLICATION_ALL_COMMISSION_URL,
    layout: Layouts,
    component: ApplicationListAllCommissionContainer
  },
]
