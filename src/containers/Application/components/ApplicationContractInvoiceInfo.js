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
  const { contracts, application, contractPlace } = props

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
        <td colSpan={4}>{rateType}%</td>
        <td colSpan={4}>{count}</td>
        <td colSpan={4}>{totalAmount}</td>
        <td colSpan={4}><Status color={statusColor}>
          {statusText}
        </Status> </td>
        <td colSpan={4} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}/main/applications/${application}/pdf`}>Shartnoma</a></td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={4} >Tovar (ish, xizmat)lar nomi </th>
      <th colSpan={4} >Stavkasi</th>
      <th colSpan={4} >Miqdori</th>
      <th colSpan={4} >Narxi</th>
      <th colSpan={4} >Status </th>
      <th colSpan={4} >Shartnoma </th>
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
      totalPrice,
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
        <td colSpan={2}>{rateType}%</td>
        <td colSpan={2}>{count}</td>
        <td colSpan={4}>{totalPrice}</td>
        <td colSpan={4}><Status color={statusColor}>
          {statusText}
        </Status> </td>
        <td colSpan={4} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}/main/applications/${application}/audit`}>Shartnoma</a></td>
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


      <th colSpan={4} >Tovar (ish, xizmat)lar nomi </th>
      <th colSpan={2} >Stavkasi</th>
      <th colSpan={2} >Miqdori</th>
      <th colSpan={4} >Narxi</th>
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

  return (
    <>
      {table}
      {tablePlace}

    </>
  )
}
ApplicationContractInvoiceInfo.defaultProps = {
  contracts: [],
  contractPlace: [],
}

export default ApplicationContractInvoiceInfo
