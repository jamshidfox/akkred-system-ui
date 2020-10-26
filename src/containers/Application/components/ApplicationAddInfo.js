import React from 'react'
import { prop } from 'ramda'
import arrayMutators from 'final-form-arrays'
import styled from 'styled-components'

import { Col, Row as RowUI } from '../../../components/Grid'
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

const ApplicationAddInfo = props => {
  const { executor,executors } = props

  const username = prop('username', executor)
  return (

    <BoxUI>
      <div>
        <h1>Ijrochi</h1>
        <div>Name:{username}</div>
      </div>



    </BoxUI>

  )
}

export default ApplicationAddInfo
