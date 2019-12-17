import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { prop, isEmpty } from 'ramda'
import { sprintf } from 'sprintf-js'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { ROOM_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'

const style = {
  color: '#FFF',
  textDecoration: 'none'
}
const RoomList = props => {
  const { list } = props

  const data = prop('results', list)
  const {id} = useParams()
  return (
    <>
      <PageTitle name="Номерной фонд" >
        <MediumButton ><Link style={style} to={`/rooms/create/${id}`} >добавить</Link></MediumButton>
      </PageTitle>
      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={4}>Нумерация номера</TableCol>
          <TableCol span={4}>ЭТАЖ</TableCol>
          <TableCol span={4}>вМЕСТИМОСТЬ</TableCol>
          <TableCol span={4}>пЛОЩАДЬ</TableCol>
          <TableCol span={4}>Статус</TableCol>
          <TableCol span={1} />
          <TableCol span={1} />

        </TableRow>
        {data.map(room => (
          <TableRow>
            <TableCol span={4}>№{room.roomNumber}</TableCol>
            <TableCol span={4}>{room.floor}</TableCol>
            <TableCol span={4}>{room.capacity}</TableCol>
            <TableCol span={4}>{room.area}</TableCol>
            <TableCol span={4}>{room.status}</TableCol>
            <TableCol span={1}> <Link style={{
              color: '#FFF',
              textDecoration: 'none'
            }} to={sprintf(ROOM_UPDATE_URL, room.id)} ><img src={Edit} alt="Edit" /></Link>
            </TableCol>

            <TableCol span={1}> <Link style={{
              color: '#FFF',
              textDecoration: 'none'
            }} to={sprintf(ROOM_UPDATE_URL, room.id)} ><img src={Trash} alt="Edit" /></Link>
            </TableCol>
          </TableRow>
        ))}

      </Table>
    </>
  )
}

export default RoomList
