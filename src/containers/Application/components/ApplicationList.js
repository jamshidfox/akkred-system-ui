import React from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path, propOr } from 'ramda'
import Pagination from 'components/Pagination'
import { Table, TableRow, TableActions } from 'components/Table'
import { getTabsFromRoute } from 'utils/get'
import Container from 'components/StyledElems/Container'
import DropdownMore from 'components/Dropdown/more'
import Tabs from '../../../components/Tabs'
import CommentListFilterForm from './CommentListFilterForm'

const ApplicationList = props => {
  const {
    list,
    filterActions,
    // history
    // onDelete
  } = props

  // Data
  const listData = propOr([], 'results', list)
  const listCount = path(['data', 'count'], list)
  const listLoading = prop('loading', list)

  // TabsList
  const tabsList = getTabsFromRoute()

  // Tabs
  const tabs =
    <Tabs
      list={tabsList}
    />

  // Actions
  const linkAction = '/application/create'
  const tableActions =
    <TableActions
      filterForm={<CommentListFilterForm />}
      filterActions={filterActions}
      linkAction={linkAction}
    />

  // TableHead
  const tableHead =
    <TableRow header={true}>
      <th colSpan={8}>Полное название юридического лица</th>
      <th colSpan={6}>Номер паспорта</th>
      <th colSpan={3}>Адрес</th>
      <th colSpan={4}>Дата рождения</th>
      <th />
    </TableRow>

  // TableList
  const tableList = listData.map(client => {
    const {
      title = 'Title',
      id,
      address = 'Address',
      stage
    } = client

    // Handlers
    // const handleRedirect = () => {
    //   history.push({
    //     pathname: sprintf(ROUTES.APPLICATION_ORDERS_DETAIL_URL, id)
    //   })
    // }

    // More more more
    // {/* <td colSpan={1}> */}
    // {/*  <Link */}
    // {/*    // style={style} */}
    // {/*    to={sprintf(ROUTES.APPLICATION_UPDATE_URL, id)}> */}
    // {/*    <img src={Edit} alt="Edit" /> */}
    // {/*  </Link> */}
    // {/* </td> */}
    // {/* <td colSpan={1}> */}
    // {/*  <span */}
    // {/*    style={style} */}
    // {/*    onClick={() => onDelete(id)}> */}
    // {/*    <img src={Trash} alt="Edit" /> */}
    // {/*  </span> */}
    // {/* </td> */}

    // MoreList
    const moreList = [
      {
        name: 'Изменить',
        onClick: () => alert('Handle EDIT')
      },
      {
        name: 'Удалить',
        onClick: () => alert('Handle DELETE')
      }
    ]

    // Render
    return (
      <TableRow
        key={id}
        // onClick={handleRedirect}
      >
        <td colSpan={8}>{stage}</td>
        <td colSpan={6}>АА {id}</td>
        <td colSpan={3}>{address}</td>
        <td colSpan={4}>BDay</td>
        <DropdownMore
          moreList={moreList}
        />
      </TableRow>
    )
  })

  // Table
  const table =
    <Table
      isEmpty={isEmpty(listData)}
      filterForm={tableActions}
      loading={listLoading}
      styles={{ marginBottom: '47px' }}
    >
      {tableHead}
      {tableList}
    </Table>

  // Pagination
  const pagination =
    <Pagination
      count={listCount}
    />

  // Render
  return (
    <Container>
      {tabs}
      {table}
      {pagination}
    </Container>
  )
}

ApplicationList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object
  // onDelete: PropTypes.func
}

export default ApplicationList
