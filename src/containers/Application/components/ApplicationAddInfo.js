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
  const { executor, executors, assignments, expertise } = props

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
      <th colSpan={8} >Ф.И.О </th>
      <th colSpan={4} >Должность </th>
      <th colSpan={4} >Обязанности </th>
      <th colSpan={4} >Задание </th>
      <th colSpan={4} >Основание </th>
    </TableRow>
  const tableListExpertise = expertise.map(client => {
    const {
      id,
      expert,
      cases,
      assignment,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={8}>{expert.fullName}</td>
        <td colSpan={4}>{expert.role.name}</td>
        <td colSpan={4}>{cases}</td>
        <td colSpan={4}>test</td>
        <td colSpan={4}>{assignment}</td>

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

  const tableAssignment =
    <Table
      isEmpty={isEmpty(executors)}
    >
      <PageTitle name="Baholash uchun ekspertlar guruhi" />
      {tableHeadExpertise}
      {tableListExpertise}
    </Table>
  return (
    <>
      {table}
      {tableExpertise}
      {tableAssignment}
      {/* {table3} */}
      {/* {table4} */}
    </>
  )
}

export default ApplicationAddInfo
