import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'
import { PageRowTitle } from 'components/UI'
import { Table, TableRow } from '../../../components/Table'
import { API_URL } from '../../../constants/api'
import { documentPlanOrderType } from '../../../constants/backend'

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
  const { plan, notice, command } = props

  // Notice
  const tableNoticeList = notice.map(client => {
    const {
      id,
      status,
      file,

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
          }} href={`${API_URL}${file && file.file}`}>Hujjat</a></td>
        <td colSpan={12} ><Status color={statusColor}>
          {statusText}
        </Status> </td>
      </TableRow>
    )
  })
  const tableNoticeHead =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat </th>
      <th colSpan={12} >Status </th>

    </TableRow>
  const tableNotice =
    <Table
      isEmpty={isEmpty(notice)}
    >
      <PageRowTitle name="Xabarnoma" />
      {tableNoticeHead}
      {tableNoticeList}
    </Table>

  // Plan
  const tablePlanList = plan.map(client => {
    const {
      id,
      file,
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
          }} href={`${API_URL}${file && file.file}`}>Hujjat</a></td>
        <td colSpan={12} ><Status color={statusColor}>
          {statusText}
        </Status> </td>
      </TableRow>
    )
  })
  const tablePlanHead =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat </th>
      <th colSpan={12} >Status </th>

    </TableRow>
  const tablePlan =
    <Table
      isEmpty={isEmpty(plan)}
    >
      <PageRowTitle name="Reja" />
      {tablePlanHead}
      {tablePlanList}
    </Table>

  // Command
  const tableCommandList = command.map(client => {
    const {
      id,
      file,
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
          }} href={`${API_URL}${file && file.file}`}>Hujjat</a></td>
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
      isEmpty={isEmpty(command)}
    >
      <PageRowTitle name="Buyruq" />
      {tableCommandHead}
      {tableCommandList}
    </Table>

  return (
    <>
      {tableNotice}
      {tablePlan}
      {tableCommand}

    </>
  )
}
ApplicationAccreditationDocuments.defaultProps = {
  plan: [],
  notice: [],
  command: [],
}

export default ApplicationAccreditationDocuments
