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
import UniversalMultiSelectField from '../../../../../components/FormField/Select/UniversalMultiSelectField'

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
const ConfirmStageTwoChoiceExecutors = ({ onSubmit }) => {
  return (

    <BoxUI >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={24}>
                <Col span={24}>
                  <Field
                    name="executors"
                    label="Ijrochilar"
                    parent={parent}
                    // params={{ children_only: false }}
                    api={API.EMPLOYEES_LIST}
                    component={UniversalMultiSelectField}
                  />
                </Col>

              </Row>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Ijrochilani Tanlash </MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmStageTwoChoiceExecutors
