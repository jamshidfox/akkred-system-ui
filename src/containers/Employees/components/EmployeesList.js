import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { prop, isEmpty, path } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import { ItemControlButton } from 'components/UI'
import { TableCol, Table, TableRow, TableActions } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { EMPLOYEES_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import { Box } from '../../../components/StyledElems'
import Pagination from '../../../components/Pagination/Pagination'
import EmployeesListFilterForm from './EmployeesListFilterForm'

const BoxUI = styled(Box)`
  padding: 25px;
`
const style = {
  color: '#FFF',
  textDecoration: 'none'
}

const EmployeesList = props => {
  const { list, filterActions, deleteModal } = props

  const data = prop('results', list)
  const loading = prop('loading', list)
  const count = path(['data', 'count'], list)

  const tableActions = (
    <TableActions
      filterForm={<EmployeesListFilterForm />}
      filterActions={filterActions}
    />
  )
  return (
    <>
      <BoxUI>
        <PageTitle name="Сотрудники" >
          <Link style={style} to={`/settings/employees/create`} ><MediumButton >добавить</MediumButton></Link>
        </PageTitle>

        <Table isEmpty={isEmpty(data)} filterForm={tableActions} loading={loading}>
          <TableRow header={true} >
            <TableCol span={22}>НАЗВАНИЕ </TableCol>
            <TableCol span={1} />
            <TableCol span={1} />

          </TableRow>
          {data.map((rates, i) => (
            <TableRow key={i}>
              <TableCol span={22}>{rates.username}</TableCol>
              <TableCol span={1}>
                <Link style={style} to={sprintf(EMPLOYEES_UPDATE_URL, rates.id)} ><img src={Edit} alt="Edit" /></Link>
              </TableCol>
              <TableCol span={1}>
                <ItemControlButton onClick={() => deleteModal.onSubmit(rates.id)}>
                  <img src={Trash} alt="Delete" />
                </ItemControlButton>
              </TableCol>
            </TableRow>
          ))}

        </Table>
      </BoxUI>
      <Pagination count={count} />

    </>

  )
}

EmployeesList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object,
  deleteModal: PropTypes.object
}

export default EmployeesList
