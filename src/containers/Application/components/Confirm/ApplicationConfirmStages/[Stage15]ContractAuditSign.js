import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import {  PageRowTitle } from '../../../../../components/UI'

import { Box } from '../../../../../components/StyledElems'
import { Table, TableRow } from '../../../../../components/Table'
import { API_URL } from '../../../../../constants/api'
import EImzoForm from '../../../../EImzoDialog/EImzoForm'

const BoxUI = styled(Box)`
  padding: 25px;
`

const ConfirmStageAccountingContractAudit = ({ onSuccess, text, initialValues }) => {
  const contracts = prop('contractPlace', initialValues)
  const idAp = prop('id', initialValues)

  const tableList = contracts.map(client => {
    const {
      id,
      name,
      rateType,
      file,
      count,
      totalPrice,
      paymentType,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={4}>{name}</td>
        <td colSpan={2}>{rateType}%</td>
        <td colSpan={2}>{count}</td>
        <td colSpan={4}>{totalPrice}</td>
        <td colSpan={4}>{paymentType}</td>
        <td colSpan={4} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}/main/applications/${idAp}/audit`}>Shartnoma</a></td>
        <td colSpan={4} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}/media/${file}`}>Ekspertiza xulosasi</a></td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={4} >Tovar (ish, xizmat)lar nomi </th>
      <th colSpan={2} >Stavkasi </th>
      <th colSpan={2} >Miqdori </th>
      <th colSpan={4} >Narxi</th>
      <th colSpan={4} >To’lov turi </th>
      <th colSpan={4} >Shartnoma </th>
      <th colSpan={4} >Ekspertiza xulosasi </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(contracts)}
    >
      {tableHead}
      {tableList}
    </Table>

  return (

    <BoxUI >
      <PageRowTitle name="Baholash shartnomasi" />
      {table}
      <EImzoForm text={text} onSubmit={onSuccess} />
    </BoxUI>

  )
}

export default ConfirmStageAccountingContractAudit
