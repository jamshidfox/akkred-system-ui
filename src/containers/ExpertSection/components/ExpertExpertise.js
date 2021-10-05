import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import { prop } from 'ramda'
import { sprintf } from 'sprintf-js'
import { PageRowTitle, SecondarySmallButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
} from '../../../components/FormField'
import { Table, TableRow } from '../../../components/Table'
import * as ROUTES from '../../../constants/routes'
import { answerTypeList, applicationList, standardList } from '../../../constants/backend'
import ExpertsResultModal from './ExpertsResultModal'
import ExpertAnswerModal from './ExpertAnswerModal'

const AddBtn = styled(SecondarySmallButton)`
`

const BoxUI = styled(Box)`
  padding: 25px;
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`

const ExpertExpertiseCreate = props => {
  const { onSubmit, initialValues, serviceModal, answerModal, answerSubmit } = props
  const onSubmitFalse = () => {
  }
  const application = prop('application', initialValues)
  const closedDate = prop('closedDate', initialValues)
  const typeStandard = prop('typeStandard', application)
  const typeApplication = prop('typeApplication', application)
  const id = prop('id', application)
  const file = prop('file', initialValues)
  const answerType = prop('answerType', initialValues)
  const statusAssignment = prop('statusAssignment', initialValues)
  const status = prop('status', initialValues)
  const assignment = prop('assignment', initialValues)
  const expert = prop('expert', initialValues)
  const firstName = prop('firstName', expert) || '-'
  const lastName = prop('lastName', expert) || '-'
  const middleName = prop('middleName', expert) || '-'

  const applicationText = applicationList.object[typeApplication]
  const standardText = standardList.object[typeStandard]
  const answerText = answerTypeList.object[answerType]

  const tableDetail =
    <Table
    >
      <TableRow>
        <td colSpan={6}>Ariza </td>
        {id && (
          <td colSpan={18}>
            <a style={{
              color: 'blue'
            }} href={sprintf(ROUTES.APPLICATION_UPDATE_URL, id)}>№ AK-{application.applicationNumber && application.applicationNumber}-21</a></td>
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
        <td colSpan={6}>Ijrochi</td>
        <td colSpan={18}>{firstName} {lastName} {middleName}</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>So`rov javobi</td>
        <td colSpan={18}>{answerText}</td>

      </TableRow>

      {status === 'approved' && (

        <TableRow>
          <td colSpan={10}>Topshiriq</td>
          <td colSpan={14}><a style={{
            color: 'blue'
          }} href={`${assignment}`}>Hujjat </a></td>

        </TableRow>

      )}

      {statusAssignment === 'done' && (

        <TableRow>
          <td colSpan={10}>Vazifa</td>
          <td colSpan={14}><a style={{
            color: 'blue'
          }} href={`${file}`}>Hujjat </a></td>

        </TableRow>

      )}

      {statusAssignment === 'done' && (

        <TableRow>
          <td colSpan={10}>Yopilgan sana</td>
          <td colSpan={14}>{closedDate}</td>

        </TableRow>

      )}

    </Table>

  return (
    <BoxUI>
      <PageRowTitle name="Ekspertlaga so`rov" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onSubmitFalse}
        render={({ handleSubmit, values, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              {tableDetail}
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

            </form>
          )
        }}
      />
    </BoxUI>
  )
}
ExpertExpertiseCreate.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
}

export default ExpertExpertiseCreate
