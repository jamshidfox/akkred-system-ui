import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import {
  Form,
} from '../../../components/FormField'
import { Col, Row as RowUI } from '../../../components/Grid'
import { Box } from '../../../components/StyledElems'
import { MediumButton, PageTitle } from '../../../components/UI'

import PermissionButton from './PermissionButton'

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

const Phase = props => {
  const { id, stage, initialValues } = props
  const onCreateApplication = () => {

  }

  const waitModalOpen = () => {
  }

  return (

    <BoxUI>
      <PageTitle name="Ariza Bosqichi" />
      <Form
        keepDirtyOnReinitialize={true}
        onSubmit={onCreateApplication}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>

              {stage === 'stage_39' && (

                <div >
                  <MediumButton style={{
                    background: '#83bc15'
                  }} >Ariza Yopildi</MediumButton>
                </div>
              )}

              <div>
                {stage === 'stage_9' || stage === 'stage_19' || stage === 'stage_25'
                  ? (<div >
                    <MediumButton style={{
                      background: '#2541ff'
                    }} onClick={waitModalOpen()}>Буйуртмачини жавобини кутиш</MediumButton>
                  </div>)
                  : (<div style={{
                    display: 'flex'

                  }}>

                    {id && (

                      <div>

                        <PermissionButton stage={stage} id={id} />

                      </div>

                    )}

                    {/* <div > */}
                    {/*  <MediumButton style={{ */}
                    {/*    background: '#ff3454' */}
                    {/*  }} >Отклонить</MediumButton> */}
                    {/* </div> */}

                  </div>)
                }
              </div>

            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default Phase
