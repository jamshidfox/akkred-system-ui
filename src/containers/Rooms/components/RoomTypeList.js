import React from 'react'
import { prop, isEmpty, path } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { PageTitle, MediumButton } from '../../../components/UI'
import Scheduler from '../../../components/Scheduler'
import { SETTING_ROOMS_LIST_URL } from '../../../constants/routes'
import { Box } from '../../../components/StyledElems'
import RoomCreateModal from './RoomCreateModal'

const BoxUI = styled(Box)`
  padding: 25px;
`

const RoomTypeList = props => {
  const { list, createModal } = props

  const data = prop('results', list)

  return (
    <BoxUI>
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
    </BoxUI>
  )
}

export default RoomTypeList
