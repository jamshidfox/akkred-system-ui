import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { MediumButton } from '../../../../../components/UI'
import {
  Form,
} from '../../../../../components/FormField'
import { Box } from '../../../../../components/StyledElems'
import ContractAudit from '../../ApplicationGenerateDocs/ContractAudit'

const BoxUI = styled(Box)`
  padding: 25px;
`

const DivButton = styled('div')`
  margin-top: 10px;
  text-align: right;
`
const ConfirmStageAccountingContractPlace = ({ onSubmit, initialValues }) => {
  const contracts = prop('contractPlace', initialValues)
  const idAp = prop('id', initialValues)

  return (

    <BoxUI >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <ContractAudit contracts={contracts} idAp={idAp} />
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

export default ConfirmStageAccountingContractPlace
