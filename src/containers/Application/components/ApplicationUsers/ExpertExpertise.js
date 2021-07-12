import React from 'react'
import { isEmpty } from 'ramda'
import { PageRowTitle } from 'components/UI'
import { Table, TableRow } from '../../../../components/Table'

const ExpertExpertise = props => {
  const { experts, } = props

  const tableHeadExpertise =
    <TableRow header={true}>
      <th colSpan={8} >F.I.O </th>
      <th colSpan={8} >Telefon </th>
      <th colSpan={8} >Lavozim </th>

    </TableRow>
  const tableListExpertise = experts.map((client, index) => {
    const {
      expert,

    } = client

    // Render
    return (
      <TableRow
        key={index}
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

  return (
    <>
      {tableExpertise}

    </>
  )
}
ExpertExpertise.defaultProps = {
  experts:[],
}
export default ExpertExpertise
