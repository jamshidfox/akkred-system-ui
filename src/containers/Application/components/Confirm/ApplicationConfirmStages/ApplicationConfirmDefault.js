import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { Box } from '../../../../../components/StyledElems'
import { Form } from '../../../../../components/FormField'

import { MediumButton } from '../../../../../components/UI/Buttons'

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

const ApplicationConfirmDefault = props => {
  const { onSubmit, text } = props
  return (
    <BoxUI>
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div style={{ textAlign: 'right' }}>
                <MediumButton type={'submit'}>{text}</MediumButton>
              </div>

            </form>
          )
        }}
      />
    </BoxUI>
  )
}

export default ApplicationConfirmDefault
