import React from 'react'
import styled from 'styled-components'
import { MediumButton, Modal } from '../../../../../components/UI'
import {
  Field,
  Form,
  UniversalSearchField,
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import * as API from '../../../../../constants/api'
import { RESULT_LIST } from '../../../../../constants/backend'
import { Box } from '../../../../../components/StyledElems'

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
const ConfirmStageTwoChoiceExecutor = ({ onSubmit }) => {
  return (

    <BoxUI >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    name="executor"
                    label="Ijrochi"
                    component={UniversalSearchField}
                    api={API.EMPLOYEES_LIST}
                  />
                </Col>
              </Row>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmStageTwoChoiceExecutor
