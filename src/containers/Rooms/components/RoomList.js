import React from 'react'
import { prop, isEmpty } from 'ramda'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { PageTitle, MediumButton } from '../../../components/UI'
import RoomCreateModal from './RoomCreateModal'

const RoomList = props => {
  const { list, createModal } = props

  console.warn(createModal)
  const data = prop('results', list)

  return (
    <>
      <PageTitle name="Номерной фонд" >
        <MediumButton onClick={createModal.onOpen}>добавить</MediumButton>
      </PageTitle>
      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={6}>Тип номера</TableCol>
          <TableCol span={6}>Подкатегория</TableCol>
          <TableCol span={5}>Количество</TableCol>
          <TableCol span={7} />
        </TableRow>
      </Table>
      <RoomCreateModal {...createModal} />
    </>
  )
}

export default RoomList
