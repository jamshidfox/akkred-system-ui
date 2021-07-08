import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import { MediumButton, PageRowTitle } from '../../../../../components/UI'
import {
  Form
} from '../../../../../components/FormField'
import { Box } from '../../../../../components/StyledElems'
import ReAuditClientSendDocument from '../../ApplicationGenerateDocs/ReAuditClientSendDocument'


const BoxUI = styled(Box)`
  padding: 25px;
`
const ReAuditEndDeadline = ({ onSubmit, text, initialValues }) => {
  const planWorks = prop('planWorks', initialValues)

  const results = prop('planProofWorks', initialValues)
  // Client

  return (

    <BoxUI>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <ReAuditClientSendDocument planWorks={planWorks} results={results} />
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

export default ReAuditEndDeadline
