import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import ExpertListContainer from './containers/ExpertListContainer'
import ExpertDetailContainer from './containers/ExpertDetailContainer'

export default () => [

  {
    exact: true,
    path: ROUTES.EXPERT_EXPERTISE_LIST_URL,
    layout: Layouts,
    component: ExpertListContainer
  },

  {
    exact: true,
    path: ROUTES.EXPERT_EXPERTISE_UPDATE_PATH,
    layout: Layouts,
    component: ExpertDetailContainer
  },

]
