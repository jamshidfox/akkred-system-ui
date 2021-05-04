import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import { prop, path } from 'ramda'
import { SecondarySmallButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'

import {
  Form,
} from '../../../components/FormField'
import ApplicationClientDocument from '../../Application/components/ApplicationClientDocuments'
import ApplicationExpertPlaceResult from '../../Application/components/ApplicationExpertPlaceResult'
import ExpertsResultModal from './ExpertsResultModal'
import TemplateDocumentList from './TemplateDocumentList'
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

const ExpertExpertiseCreate = props => {
  const { onSubmit, initialValues, serviceModal, listTemplate, serviceResultModal, onSubmitResult } = props
  const list = path(['data', 'results'], listTemplate)
  const onSubmitFalse = () => {
  }
  const statusAssignment = prop('statusAssignment', initialValues)
  const statusResult = prop('statusResult', initialValues)
  const documents = prop('documents', initialValues)

  const documentNews = prop('documentNews', initialValues)
  const audits = prop('audits', initialValues)
  const additionalDocs = prop('additionalDocs', initialValues)

  return (
    <BoxUI>
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onSubmitFalse}
        render={({ handleSubmit, values, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>

              {statusAssignment === 'given' && (
                <div>
                  <TemplateDocumentList list={list} />
                  <ApplicationClientDocument docs={documents} />

                </div>

              )}

              {statusAssignment === 'given' && (
                <AddBtn onClick={() => serviceModal.onOpen()}>Tasdiqlash</AddBtn>

              )}

              {statusResult === 'wait' && (
                <ConfirmBtn onClick={() => serviceResultModal.onOpen()}>Tasdiqlash Audit natijalarini</ConfirmBtn>

              )}

              {statusResult === 'wait' && (
                <ApplicationExpertPlaceResult results={audits} docs={documentNews} additionalDocs={additionalDocs} />

              )}

              <ExpertsResultModal {...serviceModal} onSubmit={onSubmit} />
              <AuditResultConfirm {...serviceResultModal} onSubmit={onSubmitResult} />

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
