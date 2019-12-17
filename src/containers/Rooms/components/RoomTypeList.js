import React from 'react'
import { prop, isEmpty, path } from 'ramda'
import { sprintf } from 'sprintf-js'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { PageTitle, MediumButton } from '../../../components/UI'
import { SETTING_ROOMS_LIST_URL } from '../../../constants/routes'
import RoomCreateModal from './RoomCreateModal'

const RoomTypeList = props => {
  const { list, createModal } = props

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
        {data.map(room => (
          <TableRow to={sprintf(SETTING_ROOMS_LIST_URL, room.id)}>
            <TableCol span={6}>{path(['parent', 'name'], room)}</TableCol>
            <TableCol span={6}>{room.name}</TableCol>
            <TableCol span={5}>{room.count}</TableCol>
            <TableCol span={7} />
          </TableRow>
        ))}

      </Table>
      <RoomCreateModal {...createModal} />
    </>
  )
}

export default RoomTypeList
