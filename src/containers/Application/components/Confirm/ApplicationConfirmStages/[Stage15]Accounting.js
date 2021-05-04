import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import { MediumButton, PageTitle } from '../../../../../components/UI'
import {
  Form,
} from '../../../../../components/FormField'
import { Box } from '../../../../../components/StyledElems'
import { Table, TableRow } from '../../../../../components/Table'
import { API_URL } from '../../../../../constants/api'

const BoxUI = styled(Box)`
  padding: 25px;
`

const PageTitleNew = styled(PageTitle)`
  color: #2C3A50;

`
const ConfirmStageAccountingContractPlace = ({ onSubmit, text, initialValues, application }) => {
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
      <PageTitleNew name="Ekspertiza shartnomasi" />
      {tableHead}
      {tableList}
    </Table>

  return (

    <BoxUI >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              {table}

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">{text}</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmStageAccountingContractPlace
