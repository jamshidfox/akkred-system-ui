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
import ExpertsResultModal from './ExpertsResultModal'
import TemplateDocumentList from './TemplateDocumentList'

const AddBtn = styled(SecondarySmallButton)`
`

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

const ExpertExpertiseCreate = props => {
  const { onSubmit, initialValues, serviceModal, listTemplate } = props
  const list = path(['data', 'results'], listTemplate)
  const onSubmitFalse = () => {
  }
  const statusAssignment = prop('statusAssignment', initialValues)
  const documents = prop('documents', initialValues)

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
              <TemplateDocumentList list={list} />
              <ApplicationClientDocument docs={documents} />

              {statusAssignment === 'given' && (
                <AddBtn onClick={() => serviceModal.onOpen()}>Tasdiqlash</AddBtn>

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
