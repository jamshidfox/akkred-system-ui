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
  const onDelete = () => {}

  const tableHead =
    <TableRow header={true}>
      <th colSpan={6}>login</th>
      <th colSpan={8}>F.I.O</th>
      <th colSpan={8}>Lavozim</th>
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
      firstName,
      lastName,
      email,
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

      // {
      //   name: 'O\'chirish',
      //   onClick: () => deleteModal.onSubmit(client.id)
      // },
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
        <td colSpan={6}>{email} </td>
        <td colSpan={8}>{firstName} {lastName}</td>
        <td colSpan={8}>{job && job}</td>
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
