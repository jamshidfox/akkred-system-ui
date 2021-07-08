import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'

import { Box } from '../../../../../components/StyledElems'
import EImzoForm from '../../../../EImzoDialog/EImzoForm'
import ContractExpertise from '../../ApplicationGenerateDocs/ContractExpertise'

const BoxUI = styled(Box)`
  padding: 25px;
`

const ConfirmStageContractSign = ({ onSuccess, text, initialValues }) => {
  const contracts = prop('contracts', initialValues)
  const idAp = prop('id', initialValues)

  return (

    <BoxUI >
      <ContractExpertise idAp={idAp} contracts={contracts} />
      <EImzoForm text={text} onSubmit={onSuccess} />
    </BoxUI>

  )
}

export default ConfirmStageContractSign
