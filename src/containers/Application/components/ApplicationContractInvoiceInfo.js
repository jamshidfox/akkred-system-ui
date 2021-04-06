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
  const { contracts, application, contractPlace, plan, notice, command } = props

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
      <th colSpan={4} >Миқдори </th>
      <th colSpan={4} >Ставкаси </th>
      <th colSpan={4} >Нархи</th>
      <th colSpan={4} >Статус </th>
      <th colSpan={4} >Контракт </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(contracts)}
    >
      <PageTitleNew name="Договор на экспертизу" />
      {tableHead}
      {tableList}
    </Table>

  const tablePlaceList = contractPlace.map(client => {
    const {
      id,
      price,
      rate,
      count,
      totalAmount,
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
        <td colSpan={5}>{price}</td>
        <td colSpan={5}>{rate}</td>
        <td colSpan={5}>{count}</td>
        <td colSpan={3}>{totalAmount}</td>
        <td colSpan={2}><Status color={statusColor}>
          {statusText}
        </Status> </td>
        <td colSpan={2} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/main/applications/${application}/pdf`}>Договор  на оценку</a></td>
        <td colSpan={2} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/media/${file && file.file}`}>Акт</a></td>

      </TableRow>
    )
  })
  const tablePlaceHead =
    <TableRow header={true}>
      <th colSpan={5} >Цена </th>
      <th colSpan={5} >Ставка </th>
      <th colSpan={5} >Количество </th>
      <th colSpan={5} >Общее </th>
      <th colSpan={2} >Контракт </th>
      <th colSpan={2} >Акт </th>
    </TableRow>
  const tablePlace =
    <Table
      isEmpty={isEmpty(contracts)}
    >
      <PageTitleNew name="Договор на оценку" />
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
      <PageTitleNew name="оповещение" />
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
      <PageTitleNew name="План" />
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
      <PageTitleNew name="Приказ" />
      {tableCommandHead}
      {tableCommandList}
    </Table>

  // PostAccred
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
  //         }} href={`${API_URL}${file && file.file}`}>Документ</a></td>
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
  //         }} href={`${API_URL}${file && file.file}`}>Документ</a></td>
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
      {tableNotice}
      {tablePlan}
      {tableCommand}
      {/*{tableNoticeFinal}*/}
      {/*{tablePostAccred}*/}

    </>
  )
}

export default ApplicationContractInvoiceInfo
