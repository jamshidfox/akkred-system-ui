import React from 'react'
import { prop } from 'ramda'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { PageTitle, MediumButton } from '../../../components/UI'
import {
  Form,
} from '../../../components/FormField'

import { Box } from '../../../components/StyledElems'
import ReservationForm from './ReservationForm'
import ClientForm from './ClientForm'
import ReservationClientList from './ReservationClientList'
export const fields = [
]

const BoxUI = styled(Box)`
  padding: 25px;
  margin-bottom: 24px;
`

export const RESERVATION = 'reservation'
export const PLACEMENT = 'placement'
const ReservationCreate = props => {
  const { onSubmit, clientCreateModal } = props
  return (
    <>
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <BoxUI>
                <PageTitle name="Создать бронь" />
                <ReservationForm values={values} />
              </BoxUI>

            </form>
          )
        }}
      />
      <BoxUI>
        <PageTitle name="Разместить гостя" />
          <ReservationClientList/>
        <ClientForm {...clientCreateModal} />
      </BoxUI>
      <div style={{ textAlign: 'right' }}>
        <MediumButton onClick={clientCreateModal.onOpen} type="button">Add Clent</MediumButton>
        <MediumButton>Сохранить</MediumButton>
      </div>

    </>
  )
}

export default ReservationCreate
