import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import { PageRowTitle } from '../../../../../components/UI'

import { Box } from '../../../../../components/StyledElems'
import { Table, TableRow } from '../../../../../components/Table'
import { documentPlanOrderType } from '../../../../../constants/backend'
import EImzoForm from '../../../../EImzoDialog/EImzoForm'

const BoxUI = styled(Box)`
  padding: 25px;
`

const statusColors = {
  process: 'green',
  confirm: 'green',
  wait: 'green',
  reject: 'red',
}

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`
const OrderSign = ({ onSuccess, initialValues }) => {
  const command = prop('command', initialValues)

  // Command
  const tableCommandList = command.map(client => {
    const {
      id,
      file,
      status,

    } = client

    const statusText = documentPlanOrderType.object[status]
    const statusColor = statusColors[status]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${file && file.file}`}>Hujjat</a></td>
        <td colSpan={12} ><Status color={statusColor}>
          {statusText}
        </Status> </td>
      </TableRow>
    )
  })
  const tableCommandHead =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat </th>
      <th colSpan={12} >Status </th>
    </TableRow>
  const tableCommand =
    <Table
      isEmpty={isEmpty(command)}
    >
      {tableCommandHead}
      {tableCommandList}
    </Table>

  return (

    <BoxUI >
      <PageRowTitle name="Buyruq" />
      {tableCommand}
      <EImzoForm text={'sad'} onSubmit={onSuccess} />
    </BoxUI>

  )
}

export default OrderSign
