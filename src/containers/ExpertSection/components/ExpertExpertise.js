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
import * as API from '../../../constants/api'
import ExpertsResultModal from './ExpertsResultModal'

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
  const onSubmitFalse = () => {
  }
  const file = prop('assignment', initialValues)
  const statusAssignment = prop('statusAssignment', initialValues)

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
              <Row gutter={24}>
                <Col span={20} >
                  <a style={{
                    color: 'blue'
                  }} href={`${file}`}>Документ для экспертизы </a>
                </Col>

                {statusAssignment === 'given' && (

                  <Col span={4} >
                    <AddBtn onClick={() => serviceModal.onOpen()}>Закрыть задание</AddBtn>
                  </Col>

                )}
              </Row>

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
