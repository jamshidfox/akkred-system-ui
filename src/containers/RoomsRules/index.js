import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import RuleGroupContainer from './containers/RuleGroupContainer'
import RuleGroupCreateContainer from './containers/RuleGroupCreateContainer'
import RuleGroupUpdateContainer from './containers/RuleGroupUpdateContainer'

export default () => [
  {
    exact: true,
    path: ROUTES.SETTING_RULE_GROUP_LIST,
    layout: Layouts,
    component: RuleGroupContainer
  },
  {
    exact: true,
    path: ROUTES.SETTING_RULE_GROUP_CREATE_URL,
    layout: Layouts,
    component: RuleGroupCreateContainer
  },
  {
    exact: true,
    path: ROUTES.SETTING_RULE_GROUP_UPDATE_PATH,
    layout: Layouts,
    component: RuleGroupUpdateContainer
  }
]
