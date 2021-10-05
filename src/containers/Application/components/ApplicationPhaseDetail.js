import React from 'react'
import { prop } from 'ramda'
import styled from 'styled-components'
import { Table, TableRow } from '../../../components/Table'
import { PageRowTitle } from '../../../components/UI'
import { applicationList, standardList } from '../../../constants/backend'

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`
const ApplicationPhaseDetail = props => {
  const { clientInfo, executor, initialValues } = props
  const legalEntityName = prop('legalEntityName', clientInfo)
  const objectFullName = prop('objectFullName', clientInfo)
  const typeApplication = prop('typeApplication', initialValues)
  const deadlineDate = prop('deadlineDate', initialValues)
  const typeStandard = prop('typeStandard', initialValues)
  const deadlineStage = prop('deadlineStage', initialValues)
  const typeApplicationText = applicationList.object[typeApplication]
  const typeStandardText = standardList.object[typeStandard]

  const tableDoc =
    <Table
    >
      <TableRow>
        <td colSpan={6}>Yuridik shaxsning to‘liq nomi</td>
        <td colSpan={18}>{legalEntityName} </td>
      </TableRow>
      <TableRow>
        <td colSpan={6}>Akkreditatsiya obyektining to‘liq nomi</td>
        <td colSpan={18}>{objectFullName}</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Ariza turi</td>
        <td colSpan={18}>{typeApplicationText} / {typeStandardText} </td>
      </TableRow>

      <TableRow>
        <td colSpan={6}>Ijrochi</td>
        <td colSpan={18} >{executor ? (
          <div> {executor.firstName && executor.firstName} {executor.lastName && executor.lastName} {executor.middleName && executor.middleName} - {executor.username && executor.username}</div>

        ) : (
          <div>
            -
          </div>
        )}</td>

      </TableRow>

      <TableRow>
        <td colSpan={6}>Qolgan kun</td>
        <td colSpan={18}>{deadlineDate <= 3
          ? (<Status color={'red'}>
            {deadlineDate}
          </Status>)
          : (<Status color={'green'}>
            {deadlineDate}
          </Status>)
        }</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Bosqichning oxirgi muddati</td>
        <td colSpan={18}>{deadlineStage}</td>

      </TableRow>

    </Table>

  return (
    <>
      <PageRowTitle name="Yuridik shaxs to’g’risida ma’lumot" />
      {tableDoc}

    </>
  )
}

ApplicationPhaseDetail.defaultProps = {
}

export default ApplicationPhaseDetail
