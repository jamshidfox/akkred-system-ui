
import React, { useState } from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { isEmpty, prop } from 'ramda'
import { Box } from '../../../../../components/StyledElems'
import {
  Field, Form,
  InputField,
  NoopFields,
  DateField,
  UniversalSearchField,
  UniversalStaticSelectField
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import * as API from '../../../../../constants/api'
import { ANSWER_LIST, APPLICATION_LIST, documentPlanOrderType, STANDART_LIST } from '../../../../../constants/backend'
import FileUploadField from '../../../../../components/FormField/File/FileUploadField'
import { MediumButton } from '../../../../../components/UI/Buttons'
import ApplicationCommissionResult from '../../ApplicationCommissionResult'
import EImzoForm from '../../../../EImzoDialog/EImzoForm'
import { Table, TableRow } from '../../../../../components/Table'
import { API_URL } from '../../../../../constants/api'
import ApplicationCommissionResultList from './AccredCommissionList'
import {PageRowTitle} from "../../../../../components/UI";

const BoxUI = styled(Box)`
  padding: 25px;
`
const Label = styled.div`
  margin-bottom: 16px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: ${props => props.theme.color.basic.default};
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

const CommissionResultSign = props => {
  const { onSuccess, initialValues } = props
  const commissions = prop('commissions', initialValues)
  const idAp = prop('id', initialValues)
  const command = prop('protocol', initialValues)

  // Command
  const tableCommandList = command.map(client => {
    const {
      id,
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
          }} href={`${API_URL}/main/applications/${idAp}/protocol`}>Hujjat</a></td>
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
    <BoxUI>
      <ApplicationCommissionResultList results={commissions} />
      <PageRowTitle name="Bayon" />
      {tableCommand}

      <EImzoForm text={'sad'} onSubmit={onSuccess} />
    </BoxUI>
  )
}

export default CommissionResultSign
