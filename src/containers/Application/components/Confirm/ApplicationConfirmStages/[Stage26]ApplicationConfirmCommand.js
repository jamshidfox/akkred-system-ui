
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
              <Label>Buyruq</Label>

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

              <Row gutter={24}>
                {isTypeOrder === 'travel' && (
                  <Col span={24}>
                    <Field
                      name="countries"
                      label="Shahar(-lar)"
                      component={InputField}
                    />
                  </Col>

                )}

              </Row>

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

export default ApplicationConfirmCommand
