
import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { path, prop } from 'ramda'
import { Box } from '../../../../../components/StyledElems'
import {
  Field, Form,
  InputField,
  UniversalStaticSelectField
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import { typeContract } from '../../../../../constants/backend'
import { MediumButton } from '../../../../../components/UI/Buttons'
import { PageRowTitle } from '../../../../../components/UI'
import TinyEditor from '../../../../../components/UI/Editor'

const BoxUI = styled(Box)`
  padding: 25px;
`
const DivButton = styled('div')`
  margin-top: 10px;
  text-align: right;
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`
const ApplicationConfirmCommand = props => {
  const { onSubmit } = props
  return (
    <BoxUI>
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => {
          const values = prop('values', formikProps)
          const isTypeOrder = path(['typeOrder', 'id'], values)
          return (
            <form onSubmit={handleSubmit}>
              <PageRowTitle name="Buyruq" />



              <Row gutter={24}>
                <Col span={24}>
                  <Field
                    name="content"
                    label="Buyruq"
                    component={TinyEditor}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={24}>
                  <Field
                    name="typeOrder"
                    label="Shartnoma turi"
                    component={UniversalStaticSelectField}
                    list={typeContract}

                  />
                </Col>

              </Row>

              <DivButton>
                <MediumButton type={'submit'}>Tasdiqlash</MediumButton>
              </DivButton>

            </form>
          )
        }}
      />
    </BoxUI>
  )
}

export default ApplicationConfirmCommand
