import React from 'react'
import Layouts, { LoginLayout } from '../components/Layouts'
import * as ROUTES from '../constants/routes'
import UIs from './UIs'
import Login from './Login'
import Register from './Register'
import ClientInfo from './ClientInfo'
import client from './Client'
import employees from './Employees'
import roles from './Role'
import groups from './Groups'
import applications from './Application'
import expertSection from './ExpertSection'
import reAuditExpertSection from './ReAuditExpertSection'
import ExpertPlaceSection from './ExpertPlaceSection'
import Commission from './Commission'
import Reestr from './Reestr'
import templateDocument from './TemplateDocument'
import technicalExperts from './TechnicalExperts'
import applicationList from './ApplicationList'
import dashboard from "./DashBoard"

const tester = () => [
  ...applicationList(),
  ...technicalExperts(),
  ...templateDocument(),
  ...client(),
  ...dashboard(),
  ...employees(),
  ...roles(),
  ...applications(),
  ...groups(),
  ...reAuditExpertSection(),
  ...expertSection(),
  ...ExpertPlaceSection(),
  ...Commission(),
  ...Reestr(),
  {
    exact: true,
    path: ROUTES.SETTINGS_HOTEL_URL,
    layout: Layouts,
    component: Register
  },
  // {
  //   exact: true,
  //   path: ROUTES.SETTING_REQUISITES,
  //   layout: Layouts,
  //   component: Requisites
  // },
  {
    exact: true,
    path: ROUTES.SETTINGS_CLIENT_INFO_URL,
    layout: Layouts,
    component: ClientInfo
  },
  {
    exact: true,
    path: '/ui',
    layout: Layouts,
    component: UIs
  },
  {
    path: ROUTES.LOGIN_PATH,
    layout: LoginLayout,
    component: Login
  },
  {
    exact: true,
    path: '/src',
    component: () => <div>SRC COMPONENT</div>
  }
]
const Routes = store => [
  ...tester(store)
]

export default Routes
