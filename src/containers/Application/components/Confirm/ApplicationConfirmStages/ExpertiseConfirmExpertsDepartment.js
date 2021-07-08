
import React  from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { MediumButton } from '../../../../../components/UI'
import {
  Field,
  Form,
  UniversalStaticSelectField,
} from '../../../../../components/FormField'
import { Col } from '../../../../../components/Grid'
import { ANSWER_LIST } from '../../../../../constants/backend'
import { Box } from '../../../../../components/StyledElems'
import ConclusionGroup from '../../ApplicationGenerateDocs/ConclusionGroup'

const BoxUI = styled(Box)`
  padding: 25px;
`
const DivButton = styled('div')`
  margin-top: 10px;
  text-align: right;
`

const ExpertiseConfirmExpertsDepartment = ({ onSubmit, initialValues }) => {
  const conclusions = prop('conclusions', initialValues)
  const idAp = prop('id', initialValues)

  return (

    <BoxUI>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <ConclusionGroup conclusions={conclusions} idAp={idAp} />
              <Col span={8}>
                <Field
                  name="hr"
                  label="Kadrlar bo’limi bilan kelishish"
                  component={UniversalStaticSelectField}
                  list={ANSWER_LIST}
                />
              </Col>
              <DivButton>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </DivButton>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ExpertiseConfirmExpertsDepartment
