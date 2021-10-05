import React from 'react'
import { path, prop } from 'ramda'
import styled from 'styled-components'
import { sprintf } from 'sprintf-js'
import { Table, TableRow } from '../../../components/Table'
import { PageRowTitle, SecondarySmallButton } from '../../../components/UI'
import Container from '../../../components/StyledElems/Container'
import { Box } from '../../../components/StyledElems'
import { Col, Row } from '../../../components/Grid'
import ExpertAnswerModal from '../../ExpertSection/components/ExpertAnswerModal'
import TemplateDocument from '../../Application/components/ApplicationGenerateDocs/TemplateDocument'
import * as ROUTES from '../../../constants/routes'
import { addressTypeList, answerTypeList, applicationList, roleTypeTextList, standardList } from '../../../constants/backend'
import ExpertsResultModal from './ExpertsResultModal'
import AuditResultConfirm from './AuditResultConfirmModal'

const AddBtn = styled(SecondarySmallButton)`
margin-right: 5px;
`

const ConfirmBtn = styled(SecondarySmallButton)`
  background: #668edd;
  color: white;
`

const BoxUI = styled(Box)`
  padding: 25px;
`

const ExpertAuditDetail = props => {
  const { onSubmit, initialValues, serviceModal, answerModal, answerSubmit, listTemplate } = props
  const application = prop('application', initialValues)
  const typeStandard = prop('typeStandard', application)
  const typeApplication = prop('typeApplication', application)
  const id = prop('id', application)
  const answerType = prop('answerType', initialValues)
  const statusAssignment = prop('statusAssignment', initialValues)
  const status = prop('status', initialValues)
  const type = prop('type', initialValues)
  const date = prop('date', initialValues)
  const toDate = prop('toDate', initialValues)
  const addressType = prop('addressType', initialValues)
  const assignment = prop('assignment', initialValues)

  const expert = prop('expert', initialValues)
  const firstName = prop('firstName', expert) || '-'
  const lastName = prop('lastName', expert) || '-'
  const middleName = prop('middleName', expert) || '-'

  const applicationText = applicationList.object[typeApplication]
  const standardText = standardList.object[typeStandard]
  const answerText = answerTypeList.object[answerType]
  const typeText = roleTypeTextList.object[type]
  const addressText = addressTypeList.object[addressType]
  const results = path(['data', 'results'], listTemplate)

  const tableDoc =
    <Table
    >
      <TableRow>
        <td colSpan={6}>Ariza </td>
        {id && (
          <td colSpan={18}>
            <a style={{
              color: 'blue'
            }} href={sprintf(ROUTES.APPLICATION_UPDATE_URL, id)}>Ariza №{id}/{application.registerDate}</a></td>

        )}

      </TableRow>
      <TableRow>
        <td colSpan={6}>Ariza turi </td>
        <td colSpan={18}>{applicationText} </td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Standart turi</td>
        <td colSpan={18}>{standardText}</td>

      </TableRow>

      <TableRow>
        <td colSpan={6}>Baholash kunlari</td>
        <td colSpan={18}>{date}-{toDate}</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Manzil</td>
        <td colSpan={18}>{addressText}</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Ijrochi ro`li</td>
        <td colSpan={18}>{typeText}</td>

      </TableRow>

      <TableRow>
        <td colSpan={6}>Ijrochi</td>
        <td colSpan={18}>{firstName} {lastName} {middleName}</td>

      </TableRow>

      <TableRow>
        <td colSpan={6}>So`rov javobi</td>
        <td colSpan={18}>{answerText}</td>

      </TableRow>

      {statusAssignment === 'done' && (

        <TableRow>
          <td colSpan={10}>Vazifa</td>
          <td colSpan={14}><a style={{
            color: 'blue'
          }} href={`${assignment}`}>Hujjat </a></td>

        </TableRow>

      )}

    </Table>

  return (
    <BoxUI>
      <PageRowTitle name="Ekspertlaga so`rov" />
      {tableDoc}
      {/* <TemplateDocument list={results} /> */}

      <Row gutter={24}>

        {(statusAssignment === 'given' && status === 'approved') && (

          <Col span={4} >
            <AddBtn onClick={() => serviceModal.onOpen()}>Vazifani yopish</AddBtn>
          </Col>

        )}

        {answerType === 'wait' && (

          <Col span={4} >
            <AddBtn onClick={() => answerModal.onOpen()}>Javob berish</AddBtn>
          </Col>

        )}
      </Row>

      <ExpertsResultModal {...serviceModal} onSubmit={onSubmit} />
      <ExpertAnswerModal {...answerModal} onSubmit={answerSubmit} />

    </BoxUI>
  )
}

ExpertAuditDetail.defaultProps = {
}

export default ExpertAuditDetail
