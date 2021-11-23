import React from 'react'
import { isEmpty } from 'ramda'

import styled from 'styled-components'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { Table, TableRow } from '../../../../../components/Table'
import { SecondarySmallButton } from '../../../../../components/UI'

const AddBtn = styled(SecondarySmallButton)`
`
const CommissionList = props => {
  const { serviceModal, branches, onDeleteExpert } = props
  // TableList
  const tableList = branches.map(client => {
    const {
      id,
      commission,
    } = client

    return (
      <TableRow
        key={id}
      >
        <td colSpan={22}>{commission && commission.firstName} {commission.lastName} {commission.username}</td>

        <ItemControlButton onClick={() => onDeleteExpert(client)}>
          <img src={Trash} alt="Trash" />
        </ItemControlButton>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={22} >Commission </th>
      <th colSpan={2} />
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(branches)}
    >
      {tableHead}
      {tableList}
    </Table>
  return (
    <>
      <AddBtn onClick={() => serviceModal.onOpen()}>Ma'lumotlar bazasidan  qo'shing </AddBtn>
      {table}

    </>
  )
}
export default CommissionList
