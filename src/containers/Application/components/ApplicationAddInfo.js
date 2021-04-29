import React from 'react'
import { isEmpty, prop } from 'ramda'
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
import { documentPlanOrderType } from '../../../constants/backend'
import ExpertReject from './ExpertReject/ExpertRejectModal'

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

const ApplicationAddInfo = props => {
  const { executor, executors, experts, expertsPlace, expertRejectModal } = props

  const expertRejectModalOpen = () => {
    expertRejectModal.onOpen()
  }

  const username = prop('username', executor)
  const tableList = executors.map(client => {
    const {
      id,
      fullName,
      phoneNumber,
      role,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={10}>{fullName}</td>
        <td colSpan={6}>{phoneNumber}</td>
        <td colSpan={6}>{role && role.name}</td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={10} >Ф.И.О </th>
      <th colSpan={6} >Телефон </th>
      <th colSpan={6} >Должность </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(executors)}
    >
      <PageTitleNew name="Markazdan ijrochlar" />
      {tableHead}
      {tableList}
    </Table>

  /// -------------EXPERTIZA-------------------------

  const tableHeadExpertise =
    <TableRow header={true}>
      <th colSpan={6} >Ф.И.О </th>
      <th colSpan={6} >Должность </th>
      <th colSpan={6} >Статус </th>
      <th colSpan={6} > </th>
    </TableRow>
  const tableListExpertise = experts.map(client => {
    const {
      id,
      expert,
      status,

    } = client

    const statusText = documentPlanOrderType.object[status]
    const statusColor = statusColors[status]

    // Render
    return (
      <TableRow
        key={id}
      >

        <td colSpan={6}>{expert.fullName}</td>
        <td colSpan={6}>{expert.role && expert.role.name}</td>

        <td colSpan={6}><Status color={statusColor}>
          {statusText}
        </Status></td>
        <td colSpan={6}> <div onClick={expertRejectModalOpen}>Net</div></td>
        <ExpertReject initialValues={{ expert:expert.id }} {...expertRejectModal} />

      </TableRow>
    )
  })
  const tableExpertise =
    <Table
      isEmpty={isEmpty(experts)}
    >
      <PageTitle name="Ekspertiza uchun ekspertlar guruhi" />
      {tableHeadExpertise}
      {tableListExpertise}
    </Table>

  /// -------------EXPERTIZA PLACE-------------------------

  const tableHeadExpertisePlace =
    <TableRow header={true}>
      <th colSpan={6} >Ф.И.О </th>
      <th colSpan={6} >Телефон </th>
      <th colSpan={6} >Должность </th>
      <th colSpan={6} >Статус </th>
    </TableRow>
  const tableListExpertisePlace = expertsPlace.map(client => {
    const {
      id,
      expert,
      status

    } = client

    const statusText = documentPlanOrderType.object[status]
    const statusColor = statusColors[status]

    // Render
    return (
      <TableRow
        key={id}
      >

        <td colSpan={6}>{expert.fullName}</td>
        <td colSpan={6}>{expert.phoneNumber}</td>
        <td colSpan={6}>{expert.role && expert.role.name}</td>
        <td colSpan={6}><Status color={statusColor}>
          {statusText}
        </Status></td>

      </TableRow>
    )
  })
  const tableExpertisePlace =
    <Table
      isEmpty={isEmpty(expertsPlace)}
    >
      <PageTitle name="Baholash uchun ekspertlar guruhi" />
      {tableHeadExpertisePlace}
      {tableListExpertisePlace}
    </Table>

  return (
    <>
      {table}
      {tableExpertise}
      {tableExpertisePlace}

      {/* {table3} */}
      {/* {table4} */}
    </>
  )
}
ApplicationAddInfo.defaultProps = {
  executor:[],
  executors:[],
  assignments:[],
  expertise:[],
  experts:[],
  expertsPlace:[],
}

export default ApplicationAddInfo
