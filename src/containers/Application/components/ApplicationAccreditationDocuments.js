import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'
import { MediumButton, PageTitle } from 'components/UI'
import { Table, TableRow } from '../../../components/Table'
import { API_URL } from '../../../constants/api'
import { documentPlanOrderType } from '../../../constants/backend'

const PageTitleNew = styled(PageTitle)`
 color: #2C3A50;

`

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
          }} href={`${API_URL}${file && file.file}`}>Документ</a></td>
        <td colSpan={12} ><Status color={statusColor}>
          {statusText}
        </Status> </td>
      </TableRow>
    )
  })
  const tableNoticeHead =
    <TableRow header={true}>
      <th colSpan={12} >Документ </th>
      <th colSpan={12} >Статус </th>

    </TableRow>
  const tableNotice =
    <Table
      isEmpty={isEmpty(notice)}
    >
      <PageTitleNew name="Xabarnoma" />
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
          }} href={`${API_URL}${file && file.file}`}>Документ</a></td>
        <td colSpan={12} ><Status color={statusColor}>
          {statusText}
        </Status> </td>
      </TableRow>
    )
  })
  const tablePlanHead =
    <TableRow header={true}>
      <th colSpan={12} >Документ </th>
      <th colSpan={12} >Статус </th>

    </TableRow>
  const tablePlan =
    <Table
      isEmpty={isEmpty(plan)}
    >
      <PageTitleNew name="Reja" />
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
          }} href={`${API_URL}${file && file.file}`}>Документ</a></td>
        <td colSpan={12} ><Status color={statusColor}>
          {statusText}
        </Status> </td>
      </TableRow>
    )
  })
  const tableCommandHead =
    <TableRow header={true}>
      <th colSpan={12} >Документ </th>
      <th colSpan={12} >Статус </th>
    </TableRow>
  const tableCommand =
    <Table
      isEmpty={isEmpty(command)}
    >
      <PageTitleNew name="Buyruq" />
      {tableCommandHead}
      {tableCommandList}
    </Table>

  // // PostAccred
  // const tablePostAccredList = postAccred.map(client => {
  //   const {
  //     id,
  //     file,
  //     status,
  //
  //   } = client
  //
  //   const statusText = documentPlanOrderType.object[status]
  //   const statusColor = statusColors[status]
  //
  //   // Render
  //   return (
  //     <TableRow
  //       key={id}
  //     >
  //       <td colSpan={12} style={{
  //         color: '#0f22ff'
  //       }}><a style={{
  //           color: '#0f22ff'
  //         }} href={`${API_URL}${file && file.file}`}>Hujjat</a></td>
  //       <td colSpan={12} ><Status color={statusColor}>
  //         {statusText}
  //       </Status> </td>
  //     </TableRow>
  //   )
  // })
  // const tablePostAccredHead =
  //   <TableRow header={true}>
  //     <th colSpan={12} >Документ </th>
  //     <th colSpan={12} >Статус </th>
  //   </TableRow>
  // const tablePostAccred =
  //   <Table
  //     isEmpty={isEmpty(postAccred)}
  //   >
  //     <PageTitleNew name="Postakkreditatsion shartnoma" />
  //     {tablePostAccredHead}
  //     {tablePostAccredList}
  //   </Table>
  //
  // // NoticeFinal
  // const tableNoticeFinalList = noticeFinal.map(client => {
  //   const {
  //     id,
  //     file,
  //
  //   } = client
  //
  //   // Render
  //   return (
  //     <TableRow
  //       key={id}
  //     >
  //       <td colSpan={24} style={{
  //         color: '#0f22ff'
  //       }}><a style={{
  //           color: '#0f22ff'
  //         }} href={`${file && file}`}>Hujjat</a></td>
  //
  //     </TableRow>
  //   )
  // })
  // const tableNoticeFinalHead =
  //   <TableRow header={true}>
  //     <th colSpan={24} >Документ </th>
  //   </TableRow>
  // const tableNoticeFinal =
  //   <Table
  //     isEmpty={isEmpty(noticeFinal)}
  //   >
  //     <PageTitleNew name="Buyurtmachiga xabarnoma" />
  //     {tableNoticeFinalHead}
  //     {tableNoticeFinalList}
  //   </Table>

  return (
    <>
      {tableNotice}
      {tablePlan}
      {tableCommand}
      {/* {tableNoticeFinal} */}
      {/* {tablePostAccred} */}

    </>
  )
}
ApplicationAccreditationDocuments.defaultProps = {
  noticeFinal: [],
  postAccred: [],
}

export default ApplicationAccreditationDocuments
