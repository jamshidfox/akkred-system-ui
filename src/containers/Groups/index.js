import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import GroupsListContainer from './containers/GroupsListContainer'

export default () => [

  {
    exact: true,
    path: ROUTES.GROUP_LIST_URL,
    layout: Layouts,
    component: GroupsListContainer
  },
  {
    exact: true,
    path: ROUTES.GROUP_UPDATE_URL,
    layout: Layouts,
    component: GroupsListContainer
  }
]
