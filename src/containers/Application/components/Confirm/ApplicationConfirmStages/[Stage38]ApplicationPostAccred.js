
import React, { useState } from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { prop } from 'ramda'
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
import { ANSWER_LIST, APPLICATION_LIST, paymentTypes, rateTypes, STANDART_LIST } from '../../../../../constants/backend'
import FileUploadField from '../../../../../components/FormField/File/FileUploadField'
import { MediumButton } from '../../../../../components/UI/Buttons'
import ApplicationCommissionResult from '../../ApplicationCommissionResult'
import ApplicationCommissionResultList from './AccredCommissionList'

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

const Row = styled(RowUI)`
  margin-bottom: 40px;
`
const ApplicationPostAccred = props => {
  const { onSubmit, text } = props

  return (
    <BoxUI>
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Label>Postakkreditatsion shartnoma rasmiylashtirish</Label>


              <div style={{ textAlign: 'right' }}>
                <MediumButton type={'submit'}>Tasdiqlash</MediumButton>
              </div>

            </form>
          )
        }}
      />
    </BoxUI>
  )
}

export default ApplicationPostAccred
