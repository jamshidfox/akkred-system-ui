import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { ItemControlButton, PageTitle } from 'components/UI'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { Table, TableCol, TableRow, TableColRight } from '../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../components/UI'
import * as ROUTES from '../../../constants/routes'

const AddBtn = styled(SecondarySmallButton)`
  padding-left: 0;
`

const PageTitleNew = styled(PageTitle)`
 color: #2C3A50;

`

const ApplicationContractInvoiceInfo = props => {
  const { contracts, application } = props

  const tableList = contracts.map(client => {
    const {
      id,
      price,
      rate,
      count,
      totalAmount,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}>{price}</td>
        <td colSpan={6}>{rate}</td>
        <td colSpan={6}>{count}</td>
        <td colSpan={6}>{totalAmount}</td>
        <td colSpan={6} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/main/applications/${application}/pdf`}>Договор</a></td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={6} >Цена </th>
      <th colSpan={6} >Ставка </th>
      <th colSpan={6} >Количество </th>
      <th colSpan={6} >Общее </th>
      <th colSpan={6} >Контракт </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(contracts)}
    >
      <PageTitleNew name="Договоры" />
      {tableHead}
      {tableList}
    </Table>

  return (
    <>
      {table}

    </>
  )
}

export default ApplicationContractInvoiceInfo
