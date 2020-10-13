import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { Tabs, Tab } from '../../../components/TabsDetail'
import { Box } from '../../../components/StyledElems'
import ApplicationCreate from './ApplicationCreate'
import ApplicationUserInfo from './ApplicationUserInfo'

export const fields = [
  'address',
  'documentDate',
  'email',
  'fax',
  'fullName',
  'fullNameOrgan',
  'hasPartAnotherOrgan',
  'inn',
  'internalAudit',
  'legalName',
  'managementAnalysis',
  'managementSystem',
  'mfo',
  'ndsRegId',
  'oked',
  'paymentAccount',
  'phoneNumber',
  'proficiencyTestingProvider',
  'site',
  'swift',
  'title',
  'titleObject',
  'typeApplication',
  'typeStandard',
]

const BoxUI = styled(Box)`
  padding: 25px;
`

export const GUEST = 'guest'
export const SERVICE = 'service'
export const PAYMENT = 'payment'

const ApplicationTabs = props => {
  const { onSubmit, initialValues, serviceModal, onCreateApplication, serviceList, onUpdateBranch, tabData, confirmModal } = props
  const clientInfo = prop('clientInfo', initialValues)

  return (
    <BoxUI>
      <Tabs
        initialValue={'guest'}
        // value={tabData.tab}
        // onChange={tabData.onTabChange}
      >
        <Tab value={'service'} label={'Ariza'}>
          <ApplicationUserInfo clientInfo={clientInfo} />
        </Tab>
        <Tab value={'guest'} label={'Yuridik shaxs to’g’risida ma’lumot'}>
          <ApplicationCreate
            onSubmit={onSubmit}
            initialValues={initialValues}
            serviceModal={serviceModal}
            confirmModal={confirmModal}
            onCreateApplication={onCreateApplication}
            onUpdateBranch={onUpdateBranch}
            serviceList={serviceList}
            onTabChange={() => tabData.onTabChange(SERVICE)}
          />
        </Tab>
        <Tab value={'a'} label={'Rahbariyat rezolyutsiyasi'}>
          a
        </Tab>
        <Tab value={'v'} label={'Ijrochi va ekspertlar'}>
          b
        </Tab>
        <Tab value={'c'} label={'Shartnomalar va to’lov ma’lumotlari'}>
          c
        </Tab>
        <Tab value={'d'} label={'EKSPERTIZA natijalari'}>
          d
        </Tab>
        <Tab value={'s'} label={'Arizachiga jo’natilgan hujjatlar'}>
          d
        </Tab>
        <Tab value={'s1'} label={'Arizachidan kelgan qo’shimcha hujjatlar'}>
          d
        </Tab>
        <Tab value={'s2'} label={'Markazga tegishli hujjatlar'}>
          d
        </Tab>
        <Tab value={'s3'} label={'Akrreditatsiyadan keyingi hujjatlar (guvohnoma, akkreditasiya doirasi)'}>
          d
        </Tab>
      </Tabs>
    </BoxUI>
  )
}

export default ApplicationTabs
