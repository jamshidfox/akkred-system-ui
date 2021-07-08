import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { MediumButton, PageRowTitle } from '../../../../../components/UI'
import {
  Form,
} from '../../../../../components/FormField'
import { Box } from '../../../../../components/StyledElems'
import { ExpertExpertiseCreateModal, ExpertExpertiseList } from '../ExpertsPlace'
import ExpertsArchiveList from '../Experts/ExpertsArchiveList'

const BoxUI = styled(Box)`
  padding: 25px;
`

const DivButton = styled('div')`
  margin-top: 10px;
  text-align: right;
`
const ExpertiseChoiceExperts = ({ onSubmit, serviceList, serviceModal, onDeletePlace, initialValues }) => {
  const archiveExperts = prop('archiveExperts', initialValues)
  return (

    <BoxUI>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>

              <PageRowTitle name="Rozi bolmagan Ijrochilar" />

              <ExpertsArchiveList list={archiveExperts} />

              <PageRowTitle name="Ijrochilarni qo`shish" />

              <ExpertExpertiseList branches={serviceList} serviceModal={serviceModal} onDeletePlace={onDeletePlace} />
              <ExpertExpertiseCreateModal {...serviceModal} />

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

export default ExpertiseChoiceExperts
