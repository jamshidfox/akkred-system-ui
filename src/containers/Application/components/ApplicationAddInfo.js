import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'
import { PageRowTitle } from 'components/UI'
import { Table, TableRow } from '../../../components/Table'

const ApplicationAddInfo = props => {
  const { executors, experts, expertsPlace } = props

  const tableList = executors.map((client, index) => {
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
        <td colSpan={8}>{fullName}</td>
        <td colSpan={8}>{phoneNumber}</td>
        <td colSpan={8}>{role && role.name}</td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={8} >F.I.O </th>
      <th colSpan={8} >Telefon </th>
      <th colSpan={8} >Lavozim </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(executors)}
    >
      <PageRowTitle name="Markazdan ijrochlar" />
      {tableHead}
      {tableList}
    </Table>

  /// -------------EXPERTIZA-------------------------

  const tableHeadExpertise =
    <TableRow header={true}>
      <th colSpan={8} >F.I.O </th>
      <th colSpan={8} >Telefon </th>
      <th colSpan={8} >Lavozim </th>

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

        <td colSpan={8}>{expert.fullName}</td>
        <td colSpan={8}>{expert.phoneNumber}</td>
        <td colSpan={8}>{expert.role && expert.role.name}</td>

      </TableRow>
    )
  })
  const tableExpertise =
    <Table
      isEmpty={isEmpty(experts)}
    >
      <PageRowTitle name="Ekspertiza uchun ekspertlar guruhi" />
      {tableHeadExpertise}
      {tableListExpertise}
    </Table>

  /// -------------EXPERTIZA PLACE-------------------------

  const tableHeadExpertisePlace =
    <TableRow header={true}>
      <th colSpan={8} >F.I.O </th>
      <th colSpan={8} >Telefon </th>
      <th colSpan={8} >Lavozim </th>
    </TableRow>
  const tableListExpertisePlace = expertsPlace.map(client => {
    const {
      id,
      expert,

    } = client

    // Render
    return (
      <TableRow
        key={id}
      >

        <td colSpan={8}>{expert.fullName}</td>
        <td colSpan={8}>{expert.phoneNumber}</td>
        <td colSpan={8}>{expert.role && expert.role.name}</td>

      </TableRow>
    )
  })
  const tableExpertisePlace =
    <Table
      isEmpty={isEmpty(expertsPlace)}
    >
      <PageRowTitle name="Baholash uchun ekspertlar guruhi" />
      {tableHeadExpertisePlace}
      {tableListExpertisePlace}
    </Table>

  return (
    <>
      {table}
      {tableExpertise}
      {tableExpertisePlace}

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
