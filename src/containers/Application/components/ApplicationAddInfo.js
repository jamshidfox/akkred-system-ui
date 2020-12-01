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

const ApplicationAddInfo = props => {
  const { executor, executors, assignments, expertise, experts, expertsPlace } = props

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
      <th colSpan={10} >Ф.И.О </th>
      <th colSpan={6} >Телефон </th>
      <th colSpan={6} >Должность </th>
    </TableRow>
  const tableListExpertise = experts.map(client => {
    const {
      id,
      expert,

    } = client

    // Render
    return (
      <TableRow
        key={id}
      >

        <td colSpan={10}>{expert.fullName}</td>
        <td colSpan={6}>{expert.phoneNumber}</td>
        <td colSpan={6}>{expert.role && expert.role.name}</td>

      </TableRow>
    )
  })
  const tableExpertise =
    <Table
      isEmpty={isEmpty(executors)}
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

    // Render
    return (
      <TableRow
        key={id}
      >

        <td colSpan={6}>{expert.fullName}</td>
        <td colSpan={6}>{expert.phoneNumber}</td>
        <td colSpan={6}>{expert.role && expert.role.name}</td>
        <td colSpan={6}>{status}</td>

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

export default ApplicationAddInfo
