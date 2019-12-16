import React from 'react'
import { Link } from 'react-router-dom'
import { prop, isEmpty } from 'ramda'
import { sprintf } from 'sprintf-js'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { SETTING_ROOMS_LIST_URL, ROOM_UPDATE_URL } from '../../../constants/routes'

const RoomTypeList = props => {
  const { list } = props

  const data = prop('results', list)
  console.warn(data)
  // const floor = prop('floor', data)
  // const roomNumber = prop('roomNumber', data)
  // const capacity = prop('capacity', data)
  // const area = prop('area', data)
  // console.warn(floor)

  return (
    <>
      <PageTitle name="Номерной фонд" >
        <MediumButton ><Link style={{
          color: '#FFF',
          textDecoration: 'none'
        }} to={`/rooms/create`} >добавить</Link></MediumButton>
      </PageTitle>
      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={6}>Нумерация номера</TableCol>
          <TableCol span={6}>ЭТАЖ</TableCol>
          <TableCol span={5}>вМЕСТИМОСТЬ</TableCol>
          <TableCol span={5}>пЛОЩАДЬ</TableCol>
          <TableCol span={5}>удобство</TableCol>

        </TableRow>
        {data.map(room => (
          <TableRow to={sprintf(ROOM_UPDATE_URL, room.id)}>
            <TableCol span={6}>№{room.floor}</TableCol>
            <TableCol span={6}>{room.roomNumber}</TableCol>
            <TableCol span={5}>{room.capacity}</TableCol>
            <TableCol span={5}>{room.area}</TableCol>
            <TableCol span={5}>удобство</TableCol>
          </TableRow>
        ))}

      </Table>
    </>
  )
}

export default RoomTypeList
