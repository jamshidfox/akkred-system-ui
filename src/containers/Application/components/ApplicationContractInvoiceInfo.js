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

const ApplicationContractInvoiceInfo = props => {
  const { contracts, application, contractPlace, plan, notice, command, noticeFinal, postAccred } = props

  const tableList = contracts.map(client => {
    const {
      id,
      name,
      rateType,
      count,
      totalAmount,
      status,
    } = client

    const statusText = documentPlanOrderType.object[status]
    const statusColor = statusColors[status]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={4}>{name}</td>
        <td colSpan={4}>{rateType}</td>
        <td colSpan={4}>{count}</td>
        <td colSpan={4}>{totalAmount}</td>
        <td colSpan={4}><Status color={statusColor}>
          {statusText}
        </Status> </td>
        <td colSpan={4} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/main/applications/${application}/pdf`}>Договор</a></td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={4} >Товар (иш, хизмат)лар номи </th>
      <th colSpan={4} >Ставкаси</th>
      <th colSpan={4} >Миқдори</th>
      <th colSpan={4} >Нархи</th>
      <th colSpan={4} >Статус </th>
      <th colSpan={4} >Контракт </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(contracts)}
    >
      <PageTitleNew name="Ekspertiza shartnomasi" />
      {tableHead}
      {tableList}
    </Table>

  const tablePlaceList = contractPlace.map(client => {
    const {
      id,
      name,
      rateType,
      file,
      count,
      status,
      totalAmount,
      paymentType,
    } = client

    const statusText = documentPlanOrderType.object[status]
    const statusColor = statusColors[status]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={4}>{name}</td>
        <td colSpan={2}>{rateType}</td>
        <td colSpan={2}>{count}</td>
        <td colSpan={4}>{totalAmount}</td>
        <td colSpan={4}><Status color={statusColor}>
          {statusText}
        </Status> </td>
        <td colSpan={4} style={{
          color: '#0f22ff'
        }}><a style={{
          color: '#0f22ff'
        }} href={`http://127.0.0.1:8000/main/applications/${application}/pdf`}>Shartnoma</a></td>
        <td colSpan={4} style={{
          color: '#0f22ff'
        }}><a style={{
          color: '#0f22ff'
        }} href={`${API_URL}/media/${file}`}>Ekspertiza xulosasi</a></td>

      </TableRow>
    )
  })
  const tablePlaceHead =
    <TableRow header={true}>
      <th colSpan={4} >Товар (иш, хизмат)лар номи </th>
      <th colSpan={2} >Миқдори </th>
      <th colSpan={2} >Ставкаси </th>
      <th colSpan={4} >Нархи</th>
      <th colSpan={4} >Status </th>
      <th colSpan={4} >Shartnoma </th>
      <th colSpan={4} >Ekspertiza xulosasi </th>
    </TableRow>
  const tablePlace =
    <Table
      isEmpty={isEmpty(contracts)}
    >
      <PageTitleNew name="Baholash shartnomasi" />
      {tablePlaceHead}
      {tablePlaceList}
    </Table>

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
      {table}
      {tablePlace}
      {/*{tableNotice}*/}
      {/*{tablePlan}*/}
      {/*{tableCommand}*/}
      {/*{tableNoticeFinal}*/}
      {/*{tablePostAccred}*/}

    </>
  )
}
ApplicationContractInvoiceInfo.defaultProps = {
  noticeFinal: [],
  postAccred: [],
}

export default ApplicationContractInvoiceInfo
