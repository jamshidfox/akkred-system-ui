import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layouts/Layout'

import TemplateDocumentContainer from './containers/TemplateDocumentCreateContainer'
import TemplateDocumentListContainer from './containers/TemplateDocumentListContainer'
import TemplateDocumentUpdateContainer from './containers/TemplateDocumentUpdateContainer'

export default () => [
  {
    path: ROUTES.TEMPLATE_DOCUMENT_CREATE_URL,
    layout: Layouts,
    component: TemplateDocumentContainer,
  },
  {
    exact: true,
    path: ROUTES.TEMPLATE_DOCUMENT_LIST_URL,
    layout: Layouts,
    component: TemplateDocumentListContainer
  },
  {
    exact: true,
    path: ROUTES.TEMPLATE_DOCUMENT_ITEM_PATH,
    layout: Layouts,
    component: TemplateDocumentUpdateContainer
  }
]
