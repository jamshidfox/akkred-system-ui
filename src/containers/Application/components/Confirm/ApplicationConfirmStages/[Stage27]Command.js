import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import { MediumButton, PageRowTitle, PageTitle } from '../../../../../components/UI'
import {
  Form,
} from '../../../../../components/FormField'
import { Box } from '../../../../../components/StyledElems'
import { Table, TableRow } from '../../../../../components/Table'
import { documentPlanOrderType } from '../../../../../constants/backend'
import { API_URL } from '../../../../../constants/api'

const BoxUI = styled(Box)`
  padding: 25px;
`

const DivButton = styled('div')`
  margin-top: 10px;
  text-align: right;
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
const ConfirmCommand = ({ onSubmit, text, initialValues }) => {
  const command = prop('command', initialValues)
  const idAp = prop('id', initialValues)

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
          }} href={`${API_URL}/main/applications/${idAp}/order`}>Buyruq</a></td>
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
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <PageRowTitle name="Buyruq" />
              {tableCommand}

              <DivButton>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </DivButton>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmCommand
