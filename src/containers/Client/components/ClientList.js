import React from 'react'
import { Link } from 'react-router-dom'
import { prop, isEmpty } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { CLIENT_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import { Box } from '../../../components/StyledElems'

const style = {
  color: '#ffffff',
  textDecoration: 'none'
}

const BoxUI = styled(Box)`
  padding: 25px;
`

const ClientList = props => {
  const { list } = props

  const data = prop('results', list)
  return (
    <BoxUI>
      <PageTitle name="Профили гостей">
        <Link style={style} to={`/client/create`}><MediumButton>добавить</MediumButton></Link>
      </PageTitle>

      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true}>
          <TableCol span={8}>Ф.И.О гостя</TableCol>
          <TableCol span={6}>НОМЕР ПАСПОРТА</TableCol>
          <TableCol span={4}>дата рождения</TableCol>
          <TableCol span={3}>количество посещений</TableCol>
          <TableCol span={1} />
          <TableCol span={1} />

        </TableRow>
        {data.map(client => (
          <TableRow>
            <TableCol span={8}>{client.name} {client.surname} {client.fatherName}</TableCol>
            <TableCol span={6}>АА 3545332</TableCol>
            <TableCol span={4}>{client.birthDate}</TableCol>
            <TableCol span={3}>2</TableCol>
            <TableCol span={1}>
              <Link style={style} to={sprintf(CLIENT_UPDATE_URL, client.id)}><img src={Edit} alt="Edit" /></Link>
            </TableCol>
            <TableCol span={1}>
              <Link style={style} to={sprintf(CLIENT_UPDATE_URL, client.id)}><img src={Trash} alt="Edit" /></Link>
            </TableCol>
          </TableRow>
        ))}

      </Table>
    </BoxUI>
  )
}

export default ClientList
