import React from 'react'
import { Link } from 'react-router-dom'
import { prop, isEmpty } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { RATES_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import { Box } from '../../../components/StyledElems'

const BoxUI = styled(Box)`
  padding: 25px;
`
const style = {
  color: '#FFF',
  textDecoration: 'none'
}
const EmployeesList = props => {
  const { list } = props

  const data = prop('results', list)
  return (
    <BoxUI>
      <PageTitle name="Сотрудники" >
        <Link style={style} to={`/settings/employees/create`} ><MediumButton >добавить</MediumButton></Link>
      </PageTitle>

      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={22}>НАЗВАНИЕ </TableCol>
          {/*<TableCol span={6}></TableCol>*/}
          {/*<TableCol span={5}>ДАТА НАЧАЛО</TableCol>*/}
          {/*<TableCol span={5}>ДАТА ОКОНЧАНИЕ</TableCol>*/}
          <TableCol span={1} />
          <TableCol span={1} />

        </TableRow>
        {data.map(rates => (
          <TableRow>
            <TableCol span={22}>{rates.username}</TableCol>
            {/*<TableCol span={6}>{rates.roomCategory.name}</TableCol>*/}
            {/*<TableCol span={5} >{rates.fromDate}</TableCol>*/}
            {/*<TableCol span={5} >{rates.toDate}</TableCol>*/}
            <TableCol span={1}>
              <Link style={style} to={sprintf(RATES_UPDATE_URL, rates.id)} ><img src={Edit} alt="Edit" /></Link>
            </TableCol>
            <TableCol span={1}>
              <Link style={style} to={''} ><img src={Trash} alt="Edit" /></Link>
            </TableCol>
          </TableRow>
        ))}

      </Table>
    </BoxUI>
  )
}

export default EmployeesList
