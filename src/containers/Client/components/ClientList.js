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
const ClientList = props => {
  const { list } = props

  const data = prop('results', list)
  // const {id} = useParams()
  return (
    <>
      <PageTitle name="Профили гостей" >
        <Link style={style} to={`/client/create`} ><MediumButton >добавить</MediumButton></Link>
      </PageTitle>
      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={8}>Ф.И.О гостя</TableCol>
          <TableCol span={7}>НОМЕР ПАСПОРТА</TableCol>
          <TableCol span={4}>дата рождения</TableCol>
          <TableCol span={3}>количество посещений</TableCol>
          <TableCol span={1} />

        </TableRow>
        {data.map(client => (
          <TableRow>
            <TableCol span={8}>{client.name} {client.surname} {client.fatherName}</TableCol>
            <TableCol span={7}>АА 3545332</TableCol>
            <TableCol span={4} >{client.birthDate}</TableCol>
            <TableCol span={3} >2</TableCol>
            <TableCol span={1}> <Link style={{
              color: '#FFF',
              textDecoration: 'none'
            }} ><img src={Edit} alt="Edit" /></Link>
            </TableCol>
          </TableRow>
        ))}

      </Table>
    </>
  )
}

export default ClientList
