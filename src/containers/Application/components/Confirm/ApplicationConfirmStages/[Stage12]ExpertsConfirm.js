import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { Box } from '../../../../../components/StyledElems'
import EImzoForm from '../../../../EImzoDialog/EImzoForm'
import ConclusionGroup from '../../ApplicationGenerateDocs/ConclusionGroup'

const BoxUI = styled(Box)`
  padding: 25px;
`

const ConfirmStageChoiceExpertHrConfirm = ({ onSuccess, initialValues }) => {
  const conclusions = prop('conclusions', initialValues)
  const idAp = prop('id', initialValues)

  return (

    <BoxUI >
      <ConclusionGroup conclusions={conclusions} idAp={idAp} />

      <EImzoForm text={'sad'} onSubmit={onSuccess} />
    </BoxUI>

  )
}

export default ConfirmStageChoiceExpertHrConfirm
