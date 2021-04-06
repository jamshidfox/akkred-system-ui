import React from 'react'
import styled from 'styled-components'
import { MediumButton } from '../../../components/UI'
import {
  Form,
} from '../../../components/FormField'
import { Row as RowUI } from '../../../components/Grid'
import { Box } from '../../../components/StyledElems'

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

const Row = styled(RowUI)`
  margin-bottom: 40px;
`
const ConfirmStageAccounting = ({ onSubmit }) => {
  return (

    <BoxUI >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Label>Основная информация</Label>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Bugalterga junatish</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmStageAccounting
