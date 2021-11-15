import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

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
    path: ROUTES.APPLICATION_CONFIRM_URL,
    layout: Layouts,
    component: ApplicationConfirmContainer
  },
]
