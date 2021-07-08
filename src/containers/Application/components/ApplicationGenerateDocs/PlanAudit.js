import React from 'react'
import styled from 'styled-components'
import { isEmpty } from 'ramda'
import { PageRowTitle } from '../../../../components/UI'
import { Table, TableRow } from '../../../../components/Table'
import { documentPlanOrderType } from '../../../../constants/backend'
import { API_URL } from '../../../../constants/api'

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
const PlanAudit = ({ plan, idAp }) => {
  // Command
  const tableCommandList = plan.map(client => {
    const {
      id,
      status,

    } = client

    const statusText = documentPlanOrderType.object[status]
    const statusColor = statusColors[status]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12} style={{
          color: '#0f22ff'
        }}><a style={{
          color: '#0f22ff'
        }} href={`${API_URL}/main/applications/${idAp}/plan`}>Hujjat</a></td>
        <td colSpan={12} ><Status color={statusColor}>
          {statusText}
        </Status> </td>
      </TableRow>
    )
  })
  const tableCommandHead =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat </th>
      <th colSpan={12} >Status </th>
    </TableRow>
  const tableCommand =
    <Table
      isEmpty={isEmpty(plan)}
    >
      {tableCommandHead}
      {tableCommandList}
    </Table>

  return (

    <>
      <PageRowTitle name="Reja" />
      {tableCommand}
    </>

  )
}
PlanAudit.defaultProps = {
  plan: [],
  idAp:1,
}

export default PlanAudit
