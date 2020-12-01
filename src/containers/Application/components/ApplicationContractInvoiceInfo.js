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
  const { contracts, application, contractPlace, plan, notice, command } = props

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
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={5}>{price}</td>
        <td colSpan={5}>{rate}</td>
        <td colSpan={5}>{count}</td>
        <td colSpan={5}>{totalAmount}</td>
        <td colSpan={2} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/main/applications/${application}/pdf`}>Договор  на оценку</a></td>
        <td colSpan={2} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/media/${file}`}>Акт</a></td>

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

    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}>price</td>
        <td colSpan={6}>rate</td>
        <td colSpan={6}>count</td>
        <td colSpan={6}>totalAmount</td>
        <td colSpan={6} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/main/applications/${application}/pdf`}>Договор</a></td>

      </TableRow>
    )
  })
  const tableNoticeHead =
    <TableRow header={true}>
      <th colSpan={6} >Цена </th>
      <th colSpan={6} >Ставка </th>
      <th colSpan={6} >Количество </th>
      <th colSpan={6} >Общее </th>
      <th colSpan={6} >Контракт </th>
    </TableRow>
  const tableNotice =
    <Table
      isEmpty={isEmpty(notice)}
    >
      <PageTitleNew name="Договор на оповещение" />
      {tableNoticeHead}
      {tableNoticeList}
    </Table>

  // Plan
  const tablePlanList = plan.map(client => {
    const {
      id,

    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}>price</td>
        <td colSpan={6}>rate</td>
        <td colSpan={6}>count</td>
        <td colSpan={6}>totalAmount</td>
        <td colSpan={6} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/main/applications/${application}/pdf`}>Договор</a></td>

      </TableRow>
    )
  })
  const tablePlanHead =
    <TableRow header={true}>
      <th colSpan={6} >Цена </th>
      <th colSpan={6} >Ставка </th>
      <th colSpan={6} >Количество </th>
      <th colSpan={6} >Общее </th>
      <th colSpan={6} >Контракт </th>
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

    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}>price</td>
        <td colSpan={6}>rate</td>
        <td colSpan={6}>count</td>
        <td colSpan={6}>totalAmount</td>
        <td colSpan={6} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/main/applications/${application}/pdf`}>Договор</a></td>

      </TableRow>
    )
  })
  const tableCommandHead =
    <TableRow header={true}>
      <th colSpan={6} >Цена </th>
      <th colSpan={6} >Ставка </th>
      <th colSpan={6} >Количество </th>
      <th colSpan={6} >Общее </th>
      <th colSpan={6} >Контракт </th>
    </TableRow>
  const tableCommand =
    <Table
      isEmpty={isEmpty(command)}
    >
      <PageTitleNew name="Приказ" />
      {tableCommandHead}
      {tableCommandList}
    </Table>

  return (
    <>
      {table}
      {tablePlace}
      {tableNotice}
      {tablePlan}
      {tableCommand}

    </>
  )
}

export default ApplicationContractInvoiceInfo
