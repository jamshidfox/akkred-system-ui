import React from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import { Table, TableRow, TableActions } from '../../../components/Table'
import { TEMPLATE_DOCUMENT_UPDATE_URL } from '../../../constants/routes'
import { Box } from '../../../components/StyledElems'
import Pagination from '../../../components/Pagination/Pagination'
import DropdownMore from '../../../components/Dropdown/more'
import { templateDocument } from '../../../constants/backend'
import TemplateDocumentListFilterForm from './TemplateDocumentListFilterForm'

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

const TemplateDocumentList = props => {
  const { list, filterActions, history } = props

  const data = prop('results', list)
  const loading = prop('loading', list)
  const count = path(['data', 'count'], list)
  const linkAction = 'create'
  const onDelete = () => {}

  const tableHead =
    <TableRow header={true}>
      <th colSpan={20}>Hujjat</th>
      <th colSpan={4}>Hujjat turi</th>
      <th />
    </TableRow>
  const tableActions = (
    <TableActions
      filterForm={<TemplateDocumentListFilterForm />}
      filterActions={filterActions}
      linkAction={linkAction}
    />
  )

  // TableList
  const tableList = data.map(client => {
    const {
      id,
      name,
      file,
      type,
    } = client
    const typeText = templateDocument.object[type]
    // MoreList
    const moreList = [
      {
        name: "Ko'rish",
        onClick: () => {
          history.push({
            pathname: sprintf(TEMPLATE_DOCUMENT_UPDATE_URL, id)
          })
        }
      },
    ]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={20}><a style={{
          color:'blue'
        }} href={file && file.name}> {name}</a> </td>
        <td colSpan={4}>{typeText}</td>
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

TemplateDocumentList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object,
}

export default TemplateDocumentList
