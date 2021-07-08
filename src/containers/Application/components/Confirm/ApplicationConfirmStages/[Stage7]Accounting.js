import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { MediumButton } from '../../../../../components/UI'
import {
  Form,
} from '../../../../../components/FormField'
import { Box } from '../../../../../components/StyledElems'
import ContractExpertise from '../../ApplicationGenerateDocs/ContractExpertise'

const BoxUI = styled(Box)`
  padding: 25px;
`

const ConfirmStageAccounting = ({ onSubmit, initialValues }) => {
  const contracts = prop('contracts', initialValues)
  const idAp = prop('id', initialValues)

  return (

    <BoxUI >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <ContractExpertise idAp={idAp} contracts={contracts} />
              <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmStageAccounting
