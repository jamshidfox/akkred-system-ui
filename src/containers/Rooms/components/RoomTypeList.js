import React from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import { ItemControlButton } from 'components/UI'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { PageTitle, MediumButton } from '../../../components/UI'
import { SETTING_ROOMS_LIST_URL } from '../../../constants/routes'
import { Box } from '../../../components/StyledElems'
import Trash from '../../../images/trash-2.svg'
import RoomCreateModal from './RoomCreateModal'

const BoxUI = styled(Box)`
  padding: 25px;
`

const RoomTypeList = props => {
  const { list, createModal, deleteModal } = props

  const data = prop('results', list)

  return (
    <BoxUI>
      <PageTitle name="Номерной фонд" >
        <MediumButton onClick={createModal.onOpen}>добавить</MediumButton>
      </PageTitle>
      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={6}>Тип номера</TableCol>
          <TableCol span={6}>Подкатегория</TableCol>
          <TableCol span={5}>Количество</TableCol>
          <TableCol span={7} />
        </TableRow>
        {data.map((room, i) => (
          <TableRow key={i}>
            <TableCol to={sprintf(SETTING_ROOMS_LIST_URL, room.id)} span={6}>{path(['parent', 'name'], room)}</TableCol>
            <TableCol to={sprintf(SETTING_ROOMS_LIST_URL, room.id)} span={6}>{room.name}</TableCol>
            <TableCol to={sprintf(SETTING_ROOMS_LIST_URL, room.id)} span={5}>{room.count}</TableCol>
            <TableCol span={7} />
            <TableCol span={1}>
              <ItemControlButton onClick={() => deleteModal.onSubmit(room.id)}>
                <img src={Trash} alt="Delete" />
              </ItemControlButton>
            </TableCol>
          </TableRow>
        ))}

      </Table>
      <RoomCreateModal {...createModal} />
    </BoxUI>
  )
}

RoomTypeList.propTypes = {
  list: PropTypes.object,
  createModal: PropTypes.object,
  deleteModal: PropTypes.object
}

export default RoomTypeList
