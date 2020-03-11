import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import BuildingDetailContainer from './BuildingDetailContainer'
import BuildingsListContainer from './BuildingsListContainer'

export default () => [
  {
    exact: true,
    path: ROUTES.SETTING_BUILDINGS_ITEM_PATH,
    layout: Layouts,
    component: BuildingDetailContainer,
  },
  {
    exact: true,
    path: ROUTES.SETTING_BUILDINGS_LIST_PATH,
    layout: Layouts,
    component: BuildingsListContainer,
  },
]
