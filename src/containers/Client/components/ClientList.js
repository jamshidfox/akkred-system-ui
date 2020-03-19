import React from 'react'
import { Link } from 'react-router-dom'
import { prop, isEmpty, path } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import Pagination from 'components/Pagination'
import { TableCol, Table, TableRow, TableActions } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { CLIENT_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import { Box } from '../../../components/StyledElems'
import CommentListFilterForm from './CommentListFilterForm'

const style = {
  color: '#ffffff',
  textDecoration: 'none'
}

const BoxUI = styled(Box)`
  padding: 25px;
`

const ClientList = props => {
  const { list, filterActions, onDelete } = props

  const tableActions = (
    <TableActions
      filterForm={<CommentListFilterForm />}
      filterActions={filterActions}
    />
  )
  const data = prop('results', list)
  const count = path(['data', 'count'], list)
  const loading = prop('loading', list)
  return (
    <>
      <BoxUI>
        <PageTitle name="Профили гостей">
          <Link style={style} to={`/client/create`}><MediumButton>добавить</MediumButton></Link>
        </PageTitle>

        <Table isEmpty={isEmpty(data)} filterForm={tableActions} loading={loading}>
          <TableRow header={true}>
            <TableCol span={8}>Ф.И.О гостя</TableCol>
            <TableCol span={6}>НОМЕР ПАСПОРТА</TableCol>
            <TableCol span={4}>дата рождения</TableCol>
            <TableCol span={3}>количество посещений</TableCol>
            <TableCol span={1} />
            <TableCol span={1} />

          </TableRow>
          {data.map(client => (
            <TableRow key={client.id}>
              <TableCol span={8}>{client.name} {client.surname} {client.fatherName}</TableCol>
              <TableCol span={6}>АА 3545332</TableCol>
              <TableCol span={4}>{client.birthDate}</TableCol>
              <TableCol span={3}>2</TableCol>
              <TableCol span={1}>
                <Link style={style} to={sprintf(CLIENT_UPDATE_URL, client.id)}><img src={Edit} alt="Edit" /></Link>
              </TableCol>
              <TableCol span={1}>
                <span style={style} onClick={() => onDelete(client.id)}><img src={Trash} alt="Edit" /></span>
              </TableCol>

            </TableRow>
          ))}

        </Table>
      </BoxUI>
      <Pagination count={count} />
    </>
  )
}

export default ClientList
