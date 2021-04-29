import React, { useState } from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import { prop } from 'ramda'
import { PageTitle, MediumButton, SecondarySmallButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'

import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalSearchField
} from '../../../components/FormField'
import { ExpertsCreateModal } from '../../Application/components/Confirm/ExpertsPlace'
import FileUploadField from '../../../components/FormField/File/FileUploadField'
import ApplicationContractInvoiceInfo from '../../Application/components/ApplicationContractInvoiceInfo'
import { Tab } from '../../../components/TabsDetail'
import ApplicationAccreditationDocuments from '../../Application/components/ApplicationAccreditationDocuments'
import ApplicationExpertResult from '../../Application/components/ApplicationExpertResult'
import ApplicationExpertPlaceResult from '../../Application/components/ApplicationExpertPlaceResult'
import ExpertsResultModal from './ExpertsResultModal'
import * as API from '~/constants/api'

const AddBtn = styled(SecondarySmallButton)`
`
// export const fields = [
//   'username',
//   'password',
//   'fullName',
//   'email',
//   'phoneNumber',
//   'lastName',
//   'firstName',
//   'role'
// ]

const BoxUI = styled(Box)`
  padding: 25px;
`
const Label = styled.div`
  margin-bottom: 16px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: ${props => props.theme.color.basic.default};
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`

const ExpertExpertiseCreate = props => {
  const { onSubmit, initialValues, serviceModal } = props

  const id = prop('application', initialValues)
  const contracts = prop('contracts', initialValues)
  const contractPlace = prop('contractPlace', initialValues)
  const plan = prop('plan', initialValues)
  const notice = prop('notice', initialValues)
  const command = prop('command', initialValues)
  const results = prop('results', initialValues)
  const documentNews = prop('documentNews', initialValues)
  const audits = prop('audits', initialValues)
  const additionalDocs = prop('additionalDocs', initialValues)

  const onSubmitFalse = () => {
  }
  const answerType = prop('answerType', initialValues)

  return (
    <BoxUI>
      <PageTitle name="" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onSubmitFalse}
        render={({ handleSubmit, values, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <ApplicationContractInvoiceInfo contracts={contracts} application={id && id} contractPlace={contractPlace} />
              <ApplicationAccreditationDocuments plan={plan} notice={notice} command={command} />
              <ApplicationExpertResult results={results} />
              <ApplicationExpertPlaceResult results={audits} docs={documentNews} additionalDocs={additionalDocs} />
              {answerType === 'wait' && (
                <AddBtn onClick={() => serviceModal.onOpen()}>Ovoz berish</AddBtn>

              )}

              <ExpertsResultModal {...serviceModal} onSubmit={onSubmit} />

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
