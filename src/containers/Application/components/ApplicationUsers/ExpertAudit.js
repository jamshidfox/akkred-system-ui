import React from 'react'
import { isEmpty, prop } from 'ramda'
import { PageRowTitle } from 'components/UI'
import { Table, TableRow } from '../../../../components/Table'

const ExpertAudit = props => {
  const { expertAudit, } = props

  const tableHeadExpertisePlace =
    <TableRow header={true}>
      <th colSpan={8} >F.I.O </th>
      <th colSpan={8} >Telefon </th>
      <th colSpan={8} >Lavozim </th>
    </TableRow>
  const tableListExpertisePlace = expertAudit.map((client, index) => {
    const {
      expert,

    } = client

    const username = prop('username', expert) || '-'
    const firstName = prop('firstName', expert) || '-'
    const lastName = prop('lastName', expert) || '-'
    const middleName = prop('middleName', expert) || '-'

    // Render
    return (
      <TableRow
        key={index}
      >

        <td colSpan={8}>{firstName} {lastName} {middleName} ({username})</td>
        <td colSpan={8}>{expert.phoneNumber}</td>
        <td colSpan={8}>{expert.role && expert.role.name}</td>

      </TableRow>
    )
  })
  const tableExpertisePlace =
    <Table
      isEmpty={isEmpty(expertAudit)}
    >
      <PageRowTitle name="Baholash uchun ekspertlar guruhi" />
      {tableHeadExpertisePlace}
      {tableListExpertisePlace}
    </Table>

  return (
    <>
      {tableExpertisePlace}

    </>
  )
}
ExpertAudit.defaultProps = {
  expertsAudit:[],
}
export default ExpertAudit
