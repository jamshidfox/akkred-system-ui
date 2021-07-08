import React  from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { MediumButton, PageRowTitle } from '../../../../../components/UI'
import {
  Form,
} from '../../../../../components/FormField'
import { Box } from '../../../../../components/StyledElems'
import ConclusionGroup from '../../ApplicationGenerateDocs/ConclusionGroup'

const BoxUI = styled(Box)`
  padding: 25px;
`
const DivButton = styled('div')`
  margin-top: 10px;
  text-align: right;
`
const ExpertiseConfirmExpertsHr = ({ onSubmit, initialValues }) => {
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

export default ExpertiseConfirmExpertsHr
