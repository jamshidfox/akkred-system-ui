import React from 'react'
import { Link } from 'react-router-dom'
import { prop, isEmpty, path } from 'ramda'
import styled from 'styled-components'
import { sprintf } from 'sprintf-js'
import { TableCol, Table, TableRow, TableActions } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import { Box } from '../../../components/StyledElems'
import { SERVICES_PRICE_UPDATE_URL } from '../../../constants/routes'
import Pagination from '../../../components/Pagination/Pagination'
import ServicesListFilterForm from './ServicesListFilterForm'

const BoxUI = styled(Box)`
  padding: 25px;
`
const style = {
  color: '#FFF',
  textDecoration: 'none'
}
const ServicesList = props => {
  const { list, filterActions } = props

  const data = prop('results', list)
  const count = path(['data', 'count'], list)
  const loading = prop('loading', list)

  const tableActions = (
    <TableActions
      filterForm={<ServicesListFilterForm />}
      filterActions={filterActions}
    />
  )
  return (
    <>
      <BoxUI>
        <PageTitle name="Тарифы и цены номерного фонда" >
          <Link style={style} to={`/finance/price/create`} ><MediumButton >добавить</MediumButton></Link>
        </PageTitle>

        <Table isEmpty={isEmpty(data)} filterForm={tableActions} loading={loading}>
          <TableRow header={true} >
            <TableCol span={11}>НАЗВАНИЕ СЕРВИСА</TableCol>
            <TableCol span={11}>ЦЕНА ЗА ДЕНЬ</TableCol>
            <TableCol span={1} />
            <TableCol span={1} />

          </TableRow>
          {data.map(services => (
            <TableRow>
              <TableCol span={11}>{services.service.name}</TableCol>
              <TableCol span={11}>{services.price}</TableCol>
              <TableCol span={1}><Link style={style} to={sprintf(SERVICES_PRICE_UPDATE_URL, services.id)}><img
                src={Edit} alt="Edit" /></Link>
              </TableCol>
              <TableCol span={1}>
                <img src={Trash} alt="Edit" />
              </TableCol>
            </TableRow>
          ))}

        </Table>
      </BoxUI>
      <Pagination count={count} />

    </>

  )
}

export default ServicesList
