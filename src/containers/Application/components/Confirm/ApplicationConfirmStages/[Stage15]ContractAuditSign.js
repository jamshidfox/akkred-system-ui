import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'

import { Box } from '../../../../../components/StyledElems'
import EImzoForm from '../../../../EImzoDialog/EImzoForm'
import ContractAudit from '../../ApplicationGenerateDocs/ContractAudit'

const BoxUI = styled(Box)`
  padding: 25px;
`

const ConfirmStageAccountingContractAudit = ({ onSuccess, text, initialValues }) => {
  const contracts = prop('contractPlace', initialValues)
  const idAp = prop('id', initialValues)

  return (

    <BoxUI >
      <ContractAudit contracts={contracts} idAp={idAp} />
      <EImzoForm text={text} onSubmit={onSuccess} />
    </BoxUI>

  )
}

export default ConfirmStageAccountingContractAudit
