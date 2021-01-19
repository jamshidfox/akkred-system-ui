import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { Tabs, Tab } from '../../../components/TabsDetail'
import { Box } from '../../../components/StyledElems'
import ApplicationCreate from './ApplicationCreate'
import ApplicationUserInfo from './ApplicationUserInfo'
import ApplicationAddInfo from './ApplicationAddInfo'
import ApplicationContractInvoiceInfo from './ApplicationContractInvoiceInfo'
import ApplicationExpertResult from './ApplicationExpertResult'
import ApplicationItemTabOne from './Detail/Tabs/ApplicationItemTabOne'

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
  const { onSubmit,
    initialValues,
    serviceModal,
    onCreateApplication,
    staffList,
    officeList,
    serviceList,
    tabData,
    documentModal,
    documentList } = props
  const id = prop('id', initialValues)
  const clientInfo = prop('clientInfo', initialValues)
  const executor = prop('executor', initialValues)
  const executors = prop('executors', initialValues)
  const experts = prop('experts', initialValues)
  const expertise = prop('expertise', initialValues)
  const expertsPlace = prop('expertsPlace', initialValues)
  const assignments = prop('assignments', initialValues)
  const contracts = prop('contracts', initialValues)
  const contractPlace = prop('contractPlace', initialValues)
  const plan = prop('plan', initialValues)
  const notice = prop('notice', initialValues)
  const command = prop('command', initialValues)
  const results = prop('results', initialValues)

  return (
    <BoxUI>
      <Tabs
        initialValue={'service'}
        // value={tabData.tab}
        // onChange={tabData.onTabChange}
      >
        <Tab value={'guest'} label={'Yuridik shaxs to’g’risida ma’lumot'}>
          <ApplicationUserInfo clientInfo={clientInfo} />
        </Tab>
        <Tab value={'service'} label={'Ariza '}>
          <ApplicationCreate
            onSubmit={onSubmit}
            initialValues={initialValues}
            serviceModal={serviceModal}
            documentModal={documentModal}
            documentList={documentList}
            onCreateApplication={onCreateApplication}
            serviceList={serviceList}
            staffList={staffList}
            officeList={officeList}
            onTabChange={() => tabData.onTabChange(SERVICE)}
          />
        </Tab>
        <Tab value={'v'} label={'Ijrochi va ekspertlar'}>
          <ApplicationAddInfo executor={executor} executors={executors} expertise={expertise} experts={experts} assignments={assignments} expertsPlace={expertsPlace} />
        </Tab>
        <Tab value={'c'} label={'Shartnomalar va to’lov ma’lumotlari'}>
          <ApplicationContractInvoiceInfo contracts={contracts} application={id} contractPlace={contractPlace} plan={plan} notice={notice} command={command} />
        </Tab>
        <Tab value={'d'} label={'EKSPERTIZA natijalari'}>
          <ApplicationExpertResult results={results} application={id} />
        </Tab>
        {/*<Tab value={'s'} label={'Arizachiga jo’natilgan hujjatlar'}>*/}
        {/*  d*/}
        {/*</Tab>*/}
        {/*<Tab value={'s1'} label={'Arizachidan kelgan qo’shimcha hujjatlar'}>*/}
        {/*  d*/}
        {/*</Tab>*/}
        {/*<Tab value={'s2'} label={'Markazga tegishli hujjatlar'}>*/}
        {/*  d*/}
        {/*</Tab>*/}
        {/*<Tab value={'s3'} label={'Akrreditatsiyadan keyingi hujjatlar (guvohnoma, akkreditasiya doirasi)'}>*/}
        {/*  d*/}
        {/*</Tab>*/}
      </Tabs>
    </BoxUI>
  )
}

export default ApplicationTabs
