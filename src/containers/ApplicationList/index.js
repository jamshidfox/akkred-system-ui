import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ApplicationNewListContainer from './containers/New/ApplicationNewListContainer'
import ApplicationNewMyListContainer from './containers/New/ApplicationNewMyListContainer'
import ApplicationExpertiseListContainer from './containers/Expertise/ApplicationExpertiseListContainer'
import ApplicationExpertiseMyListContainer from './containers/Expertise/ApplicationExpertiseMyListContainer'
import ApplicationAuditListContainer from './containers/Audit/ApplicationAuditListContainer'
import ApplicationAuditMyListContainer from './containers/Audit/ApplicationAuditMyListContainer'
import ApplicationCommissionMyListContainer from './containers/Commission/ApplicationCommissionMyListContainer'
import ApplicationCommissionListContainer from './containers/Commission/ApplicationCommissionListContainer'

export default () => [
  {
    exact: true,
    path: ROUTES.APPLICATION_ALL_LIST_URL,
    layout: Layouts,
    component: ApplicationNewListContainer
  },

  {
    exact: true,
    path: ROUTES.APPLICATION_MY_ORDERS_PATH,
    layout: Layouts,
    component: ApplicationNewMyListContainer
  },

  {
    exact: true,
    path: ROUTES.APPLICATION_ALL_EXPERTISE_URL,
    layout: Layouts,
    component: ApplicationExpertiseListContainer
  },

  {
    exact: true,
    path: ROUTES.APPLICATION_EXPERTISE_URL,
    layout: Layouts,
    component: ApplicationExpertiseMyListContainer
  },

  {
    exact: true,
    path: ROUTES.APPLICATION_AUDIT_URL,
    layout: Layouts,
    component: ApplicationAuditMyListContainer
  },
  {
    exact: true,
    path: ROUTES.APPLICATION_ALL_AUDIT_URL,
    layout: Layouts,
    component: ApplicationAuditListContainer
  },

  {
    exact: true,
    path: ROUTES.APPLICATION_ACCRED_URL,
    layout: Layouts,
    component: ApplicationCommissionListContainer
  },

  {
    exact: true,
    path: ROUTES.APPLICATION_ALL_COMMISSION_URL,
    layout: Layouts,
    component: ApplicationCommissionMyListContainer
  },
]
