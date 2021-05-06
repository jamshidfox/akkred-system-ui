import React from 'react'
import { isEmpty } from 'ramda'

import styled from 'styled-components'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { Table, TableRow } from '../../../../../components/Table'
import { SecondarySmallButton } from '../../../../../components/UI'

const AddBtn = styled(SecondarySmallButton)`
`
const TravelDataList = props => {
  const { serviceModal, document, onDeleteDocument } = props

  // TableList
  const tableList = document.map(client => {
    const {
      id,
      count,
      name,
      type,
      price,

    } = client

    // Render
    return (
      <TableRow
        key={id}
      >

        <td colSpan={8}>{name}</td>
        <td colSpan={4}>{type.name}</td>
        <td colSpan={4}>{count}</td>
        <td colSpan={6}>{price}</td>
        <ItemControlButton onClick={() => onDeleteDocument(client)}>
          <img src={Trash} alt="Trash" />
        </ItemControlButton>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={8} >Tovar (ish, xizmat)lar nomi</th>
      <th colSpan={4} >O‘lchov birligi </th>
      <th colSpan={4} >Miqdori</th>
      <th colSpan={6} >Narxi </th>
      <th colSpan={2} />
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(document)}
    >
      {tableHead}
      {tableList}
    </Table>
  return (
    <>
      <AddBtn onClick={() => serviceModal.onOpen()}>Qo'shish </AddBtn>

      {table}

    </>
  )
}
TravelDataList.defaultProps = {
  document:[],
}
export default TravelDataList
