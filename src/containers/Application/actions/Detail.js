import React from 'react'
import { PageRowTitle } from 'components/UI'
import { Table, TableRow } from '../../../components/Table'

const Detail = props => {
  const tableDoc =
    <Table
    >
      <TableRow header={true}>
        <th colSpan={6}>Ariza turi </th>
        <th colSpan={18}>Muvofiqlikni baholash organi turI Muvofiqlikni baholash organi turI Muvofiqlikni baholash organi turI</th>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Ariza turi </td>
        <td colSpan={18}>Ariza turi </td>


      </TableRow>
      <TableRow>
        <td colSpan={6}>Rahbariyat tomonidan tahlil qilinganmi</td>
        <td colSpan={18}>Test</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Menejment tizimi qancha muddat ilgari joriy etilgan</td>
        <td colSpan={18}>Test</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Ichki audit oʻtkazilganmi</td>
        <td colSpan={18}>TEst</td>
      </TableRow>

      <TableRow>
        <td colSpan={10}>TEst</td>
        <td colSpan={14}>TEst</td>

      </TableRow>
      <TableRow>
        <td colSpan={10}>TEst</td>
        <td colSpan={14}>TEst</td>

      </TableRow>

    </Table>

  return (
    <>
      <PageRowTitle name="Murojaatchiga tegishli hujjatlar" />
      {tableDoc}

    </>
  )
}

Detail.defaultProps = {
}

export default Detail
