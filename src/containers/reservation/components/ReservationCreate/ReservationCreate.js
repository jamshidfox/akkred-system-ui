import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { PageTitle, Modal } from '../../../../components/UI'
import {
  Form,
} from '../../../../components/FormField'

import { Box } from '../../../../components/StyledElems'
import { Tabs, Tab } from '../../../../components/Tabs'
import ReservationForm from './ReservationForm'
import ClientCreateDialog from './ClientCreateDialog'
import ServiceAddDialog from './ServiceAddDialog'
import ReservationClientList from './ReservationClientList'
import ReservationServiceList from './ReservationServiceList'
import ReservationPaymentInfo from './ReservationPaymentInfo'
import ClientExistingForm from './ClientExistingForm'

export const fields = [
]

export const GUEST = 'guest'
export const SERVICE = 'service'
export const PAYMENT = 'payment'

const BoxUI = styled(Box)`
  padding: 25px;
  margin-bottom: 24px;
`

const ReservationCreate = props => {
  const {
    clientCreateModal,
    clientExistingModal,
    onCreateReservation,
    serviceModal,
    clientList,
    serviceList,
    tabData
  } = props
  return (
    <>
      <Form
        mutators={arrayMutators}
        onSubmit={onCreateReservation}
        render={({ handleSubmit, values, ...rest }) => {
          return (
            <form onSubmit={handleSubmit}>
              <BoxUI>
                <PageTitle name="Создать бронь" />
                <ReservationForm values={values} />
              </BoxUI>
              <BoxUI>
                <Tabs initialValue={'guest'} value={tabData.tab} onChange={tabData.onTabChange}>
                  <Tab title="Разместить гостя" value={'guest'} label={'гости'}>
                    <ReservationClientList
                      onOpen={clientCreateModal.onOpen}
                      onExistingOpen={clientExistingModal.onOpen}
                      onTabChange={() => tabData.onTabChange(SERVICE)}
                      {...clientList}
                    />
                  </Tab>
                  <Tab title="Услуги в номере" value={'service'} label={'Услуги в номере'}>
                    <ReservationServiceList
                      services={serviceList}
                      onServiceOpen={serviceModal.onOpen}
                      onTabChange={() => tabData.onTabChange(PAYMENT)}

                    />
                  </Tab>
                  <Tab title="СЧЕТ К ОПЛАТЕ" value={'payment'} label={'сЧЕТ К ОПЛАТЕ'}>
                    <ReservationPaymentInfo />
                  </Tab>
                  <Tab title="ПАРАМЕТРЫ" value={'others'} label={'ДОПОЛЬНИТЕЛЬНЫЕ ПАРАМЕТРЫ'}>
                    d
                  </Tab>
                </Tabs>
              </BoxUI>
            </form>
          )
        }}
      />
      <Modal
        onClose={clientExistingModal.onClose}
        open={clientExistingModal.open}
        width={'90%'}>
        <Form
          onSubmit={clientExistingModal.onSubmit}
          component={ClientExistingForm}
          loading={clientExistingModal.loading}
        />
      </Modal>
      <ClientCreateDialog {...clientCreateModal} />
      <ServiceAddDialog {...serviceModal} />
    </>
  )
}

ReservationCreate.propTypes = {
  onSubmit: PropTypes.func,
  onCreateReservation: PropTypes.func,
  clientCreateModal: PropTypes.object,
  serviceModal: PropTypes.object,
  clientExistingModal: PropTypes.object,
  clientList: PropTypes.object,
  tabData: PropTypes.object,
  serviceList: PropTypes.array
}

export default ReservationCreate
