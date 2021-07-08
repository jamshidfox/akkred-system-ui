import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'
import { PageRowTitle } from 'components/UI'
import { Table, TableRow } from '../../../components/Table'
import { API_URL } from '../../../constants/api'
import { documentPlanOrderType } from '../../../constants/backend'
import Analysis from './ApplicationGenerateDocs/Analysis'
import ConclusionGroup from './ApplicationGenerateDocs/ConclusionGroup'
import PostAccreditation from './ApplicationGenerateDocs/PostAccreditation'
import AuditOrder from './ApplicationGenerateDocs/AuditOrder'
import PlanAudit from './ApplicationGenerateDocs/PlanAudit'

const statusColors = {
  process: 'green',
  confirm: 'green',
  wait: 'green',
  reject: 'red',
}

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`

const ApplicationAccreditationDocuments = props => {
  const { plan, postAccred, command, idAp, analysis, conclusions } = props

  return (
    <>
      <Analysis analysis={analysis} idAp={idAp} />
      <ConclusionGroup conclusions={conclusions} idAp={idAp} />
      <PlanAudit plan={plan} idAp={idAp} />
      <AuditOrder auditOrders={command} idAp={idAp} />
      <PostAccreditation postAccreditation={postAccred} idAp={idAp} />

    </>
  )
}
ApplicationAccreditationDocuments.defaultProps = {
  plan: [],
  notice: [],
  command: [],
  postAccred: [],
  analysis: [],
  conclusions: [],
}

export default ApplicationAccreditationDocuments
