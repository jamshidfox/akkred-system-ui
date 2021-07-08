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
const ContractExpertise = ({ contracts, idAp }) => {
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
          }} href={`${API_URL}/main/applications/${idAp}/pdf`}>Shartnoma</a></td>

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
      {tableHead}
      {tableList}
    </Table>

  return (

    <>
      <PageRowTitle name="Ekspertiza shartnomasi" />
      {table}
    </>

  )
}
ContractExpertise.defaultProps = {
  contracts: [],
  idAp:1,
}

export default ContractExpertise
