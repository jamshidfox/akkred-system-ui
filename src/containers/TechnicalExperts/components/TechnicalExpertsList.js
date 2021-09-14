import React from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import {Table, TableRow, TableActions } from '../../../components/Table'
import { TECHNICAL_EXPERT_UPDATE_URL } from '../../../constants/routes'
import { Box } from '../../../components/StyledElems'
import Pagination from '../../../components/Pagination/Pagination'
import DropdownMore from '../../../components/Dropdown/more'
import TechnicalExpertsListFilterForm from './TechnicalExpertsListFilterForm'

const BoxUI = styled(Box)`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding: 20px 25px 25px;
`
const style = {
  color: '#fff',
  textDecoration: 'none',
  cursor: 'pointer'
}

const TechnicalExpertsList = props => {
  const { list, filterActions, history, deleteModal } = props

  const data = prop('results', list)
  const loading = prop('loading', list)
  const count = path(['data', 'count'], list)
  const linkAction = 'create'

  const tableHead =
    <TableRow header={true}>
      <th colSpan={12}>F.I.O</th>
      <th colSpan={12}>Ish joyi</th>
      <th />
    </TableRow>
  const tableActions = (
    <TableActions
      filterForm={<TechnicalExpertsListFilterForm />}
      filterActions={filterActions}
      linkAction={linkAction}
    />
  )

  // TableList
  const tableList = data.map(client => {
    const {
      id,
      fullName,
      lastName,
      firstName,
      middleName,
      job,
    } = client

    // MoreList
    const moreList = [
      {
        name: "Ko'rish",
        onClick: () => {
          history.push({
            pathname: sprintf(TECHNICAL_EXPERT_UPDATE_URL, id)
          })
        }
      },

      {
        name: 'O\'chirish',
        onClick: () => deleteModal.onSubmit(client.id)
      },
      // {
      //   name:'Show Error',
      //   onClick:() =>
      //     showToast({
      //       title: 'Удалено',
      //       message: 'Данные удалены',
      //     })
      // }
    ]

    // Render
    return (
      <TableRow
        key={id}
        // onClick={handleRedirect}
      >
        <td colSpan={12}>{lastName} {firstName} {middleName}</td>
        <td colSpan={12}>{job && job}</td>
        <DropdownMore
          moreList={moreList}
        />
      </TableRow>
    )
  })

  // Table
  const table =
    <Table
      isEmpty={isEmpty(data)}
      filterForm={tableActions}
      loading={loading}
      styles={{ marginBottom: '47px' }}
    >
      {tableHead}
      {tableList}
    </Table>

  // Pagination
  const pagination =
    <Pagination
      count={count}
    />

  return (

    <BoxUI>
      {table}
      {pagination}
    </BoxUI>

  )
}

TechnicalExpertsList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object,
}

export default TechnicalExpertsList
