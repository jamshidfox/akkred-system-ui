import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import TransactionListContainer from './containers/TransactionListContainer'

export default () => [

  {
    exact: true,
    path: ROUTES.TRANSACTION_LIST_URL,
    layout: Layouts,
    component: TransactionListContainer
  }
]
