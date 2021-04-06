import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { Tabs, Tab } from '../../../components/TabsDetail'
import { Box } from '../../../components/StyledElems'
import ApplicationCreate from './ApplicationCreate'
import ApplicationUpdate from './ApplicationUpdate'
import ApplicationUserInfo from './ApplicationUserInfo'
import ApplicationAddInfo from './ApplicationAddInfo'
import ApplicationContractInvoiceInfo from './ApplicationContractInvoiceInfo'
import ApplicationExpertResult from './ApplicationExpertResult'
import ApplicationItemTabOne from './Detail/Tabs/ApplicationItemTabOne'
import ApplicationExpertPlaceResult from './ApplicationExpertPlaceResult'
import ApplicationCommissionResult from './ApplicationCommissionResult'
import ApplicationClientDocument from './ApplicationClientDocuments'
import ApplicationDetail from './ApplicationDetail'
import Phase from './Phase'

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
    onCreateApplication,
    tabData,
    expertRejectModal,
    serviceList,
    documentList,
    officeList,
    staffList,
    mobileList,

    accreditationList,

    activityList,

  } = props
  const id = prop('id', initialValues)
  const stage = prop('stage', initialValues)
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
  const commissions = prop('commissions', initialValues)
  const documentNews = prop('documentNews', initialValues)
  const documents = prop('documents', initialValues)
  const audits = prop('audits', initialValues)
  const postAccred = prop('postAccred', initialValues)
  const noticeFin = prop('noticeFinal', initialValues)

  var noticeFinal = []
  noticeFinal.push(noticeFin)
  const offices = []

  return (
    <BoxUI>
      <Tabs
        initialValue={'stage'}
        // value={tabData.tab}
        // onChange={tabData.onTabChange}
      >
        <Tab value={'stage'} label={'Bosqich'}>
          <Phase id={id} stage={stage}/>
        </Tab>
        <Tab value={'guest'} label={'Yuridik shaxs to’g’risida ma’lumot'}>
          <ApplicationUserInfo clientInfo={clientInfo} />
        </Tab>

        <Tab value={'service'} label={'Ariza '}>
          <ApplicationDetail
            onSubmit={onSubmit}
            initialValues={initialValues}
            documentList={documentList}
            onCreateApplication={onCreateApplication}
            serviceList={serviceList}
            staffList={staffList}
            officeList={offices}
            mobileList={mobileList}
            accreditationList={accreditationList}
            activityList={activityList}
            onTabChange={() => tabData.onTabChange(SERVICE)}

          />
        </Tab>
        {/* <Tab value={'service'} label={'Ariza '}> */}
        {/*  <ApplicationUpdate */}
        {/*    onSubmit={onSubmit} */}
        {/*    initialValues={initialValues} */}
        {/*    serviceModal={serviceModal} */}
        {/*    documentModal={documentModal} */}
        {/*    documentList={documentList} */}
        {/*    onCreateApplication={onCreateApplication} */}
        {/*    serviceList={serviceList} */}
        {/*    staffList={staffList} */}
        {/*    officeList={officeList} */}
        {/*    officeModal={officeModal} */}
        {/*    staffModal={staffModal} */}
        {/*    mobileModal={mobileModal} */}
        {/*    mobileList={mobileList} */}
        {/*    documentTwoList={documentTwoList} */}
        {/*    documentTwoModal={documentTwoModal} */}
        {/*    documentThreeList={documentThreeList} */}
        {/*    documentThreeModal={documentThreeModal} */}
        {/*    documentFourList={documentFourList} */}
        {/*    documentFourModal={documentFourModal} */}
        {/*    onDeleteDocument={onDeleteDocument} */}
        {/*    onDeleteDocumentTwo={onDeleteDocumentTwo} */}
        {/*    onDeleteDocumentThree={onDeleteDocumentThree} */}
        {/*    onDeleteDocumentFour={onDeleteDocumentFour} */}
        {/*    onDeleteOffice={onDeleteOffice} */}
        {/*    accreditationList={accreditationList} */}
        {/*    accreditationModal={accreditationModal} */}
        {/*    onDeleteAccreditation={onDeleteAccreditation} */}
        {/*    activityList={activityList} */}
        {/*    activityModal={activityModal} */}
        {/*    onDeleteActivity={onDeleteActivity} */}
        {/*    update={update} */}
        {/*    onTabChange={() => tabData.onTabChange(SERVICE)} */}
        {/*  /> */}
        {/* </Tab> */}
        <Tab value={'documents'} label={'Murojaatchiga tegishli hujjatlar '}>
          <ApplicationClientDocument docs={documents} />
        </Tab>
        <Tab value={'v'} label={'Ijrochi va ekspertlar'}>
          <ApplicationAddInfo executor={executor} executors={executors} expertise={expertise} expertRejectModal={expertRejectModal} experts={experts} assignments={assignments} expertsPlace={expertsPlace} />
        </Tab>
        <Tab value={'c'} label={'Shartnomalar va to’lov ma’lumotlari'}>
          <ApplicationContractInvoiceInfo contracts={contracts} application={id} contractPlace={contractPlace} plan={plan} notice={notice} command={command} postAccred={postAccred} noticeFinal={noticeFinal} />
        </Tab>
        <Tab value={'expertiza'} label={'EKSPERTIZA natijalari'}>
          <ApplicationExpertResult results={results} application={id} />
        </Tab>

        <Tab value={'place'} label={'Osenka natijalari'}>
          <ApplicationExpertPlaceResult results={audits} docs={documentNews} application={id} />
        </Tab>

        <Tab value={'commissions'} label={'Akrreditatsiya komissiyasi '}>
          <ApplicationCommissionResult results={commissions} application={id} />
        </Tab>
        {/*<Tab value={'documentsAccred'} label={'Akrreditatsiyaga tegishli hujjatlar '}>*/}
        {/*  <div />*/}
        {/*</Tab>*/}

      </Tabs>
    </BoxUI>
  )
}

export default ApplicationTabs
