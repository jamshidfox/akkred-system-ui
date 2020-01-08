import React from 'react'
import { Link } from 'react-router-dom'
import { prop, isEmpty } from 'ramda'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'

const style = {
  color: '#FFF',
  textDecoration: 'none'
}
const ServicesList = props => {
  const { list } = props

  const data = prop('results', list)
  return (
    <>
      <PageTitle name="Тарифы и цены номерного фонда" >
        <Link style={style} to={`/finance/price/create`} ><MediumButton >добавить</MediumButton></Link>
      </PageTitle>

      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={6}>НАЗВАНИЕ СЕРВИСА</TableCol>
          <TableCol span={6}>ЦЕНА ЗА ДЕНЬ</TableCol>
          <TableCol span={5}>ВИП ЦЕНА</TableCol>
          <TableCol span={1} />
          <TableCol span={1} />

        </TableRow>
        {data.map(services => (
          <TableRow>
            <TableCol span={6}>{services.service.name}</TableCol>
            <TableCol span={6}>{services.price}</TableCol>
            <TableCol span={5} >{services.vipPrice}</TableCol>
            <TableCol span={1}>
              <img src={Edit} alt="Edit" />
            </TableCol>
            <TableCol span={1}>
              <img src={Trash} alt="Edit" />
            </TableCol>
          </TableRow>
        ))}

      </Table>
    </>
  )
}

export default ServicesList
