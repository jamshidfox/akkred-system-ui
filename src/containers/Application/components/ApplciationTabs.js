import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { Tabs, Tab } from '../../../components/TabsDetail'
import { Box } from '../../../components/StyledElems'
import ApplicationAddInfo from './ApplicationAddInfo'
import ApplicationContractInvoiceInfo from './ApplicationContractInvoiceInfo'
import ApplicationExpertResult from './ApplicationExpertResult'
import ApplicationExpertAuditResult from './ApplicationExpertAuditResult'
import ApplicationCommissionResult from './ApplicationCommissionResult'
import ApplicationClientDocument from './ApplicationClientDocuments'
import ApplicationDetail from './ApplicationDetail'
import Phase from './Phase'
import ApplicationAccreditationDocuments from './ApplicationAccreditationDocuments'
import ApplicationInfoDetail from './ApplicationInfoDetail'
import ReAuditDocument from './ReAuditDocument'

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

export const SERVICE = 'service'

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
    additionalActivityList,
    rejectModal,

  } = props
  const id = prop('id', initialValues)
  const stage = prop('stage', initialValues)
  const clientInfo = prop('clientInfo', initialValues)
  const executor = prop('executor', initialValues)
  const experts = prop('experts', initialValues)
  const expertsPlace = prop('expertsPlace', initialValues)
  const contracts = prop('contracts', initialValues)
  const contractPlace = prop('contractPlace', initialValues)
  const plan = prop('plan', initialValues)
  const analysis = prop('analysis', initialValues)
  const notice = prop('notice', initialValues)
  const command = prop('command', initialValues)
  const results = prop('results', initialValues)
  const commissions = prop('commissions', initialValues)
  const documentNews = prop('documentNews', initialValues)
  const documents = prop('documents', initialValues)
  const audits = prop('audits', initialValues)
  const postAccred = prop('postAccred', initialValues)
  const noticeFin = prop('noticeFinal', initialValues)
  const conclusions = prop('conclusions', initialValues)

  const historyStage = prop('history', initialValues)
  const histories = prop('histories', initialValues)
  const isExpertise = prop('isExpertise', initialValues)

  var noticeFinal = []
  noticeFinal.push(noticeFin)

  var executors = []
  if (executor) {
    executors.push(executor)
  }

  return (
    <BoxUI>
      <Tabs
        initialValue={'stage'}
      >
        <Tab value={'stage'} label={'Bosqich'}>
          <Phase clientInfo={clientInfo} id={id} stage={stage} initialValues={initialValues} historyStage={historyStage} isExpertise={isExpertise} rejectModal={rejectModal} expertRejectModal={expertRejectModal} histories={histories} />
        </Tab>

        <Tab value={'info'} label={'Yuridik shaxs to???g???risida ma???lumot'}>
          <ApplicationInfoDetail clientInfo={clientInfo} initialValues={initialValues} />
        </Tab>

        <Tab value={'service'} label={'Ariza '}>
          <ApplicationDetail
            onSubmit={onSubmit}
            initialValues={initialValues}
            documentList={documentList}
            onCreateApplication={onCreateApplication}
            serviceList={serviceList}
            staffList={staffList}
            additionalActivityList={additionalActivityList}
            officeList={officeList}
            mobileList={mobileList}
            onTabChange={() => tabData.onTabChange(SERVICE)}

          />
        </Tab>
        {/* <Tab value={'detail'} label={'Detail'}> */}
        {/*  <Detail description={'description'} withoutIs={'withoutIs'} /> */}
        {/* </Tab> */}

        <Tab value={'documents'} label={'Murojaatchiga tegishli hujjatlar '}>
          <ApplicationClientDocument docs={documents} />
        </Tab>
        <Tab value={'v'} label={'Ijrochi va ekspertlar'}>
          <ApplicationAddInfo executors={executors} experts={experts} expertsPlace={expertsPlace} />
        </Tab>
        <Tab value={'c'} label={'Shartnomalar va to???lov ma???lumotlari'}>
          <ApplicationContractInvoiceInfo contracts={contracts} application={id && id} contractPlace={contractPlace} plan={plan} notice={notice} command={command} postAccred={postAccred} noticeFinal={noticeFinal} />
        </Tab>
        <Tab value={'documentsAccred'} label={'Akrreditatsiyaga tegishli hujjatlar '}>
          <ApplicationAccreditationDocuments plan={plan} notice={notice} command={command} postAccred={postAccred} noticeFinal={noticeFinal} idAp={id && id} analysis={analysis} conclusions={conclusions} />
        </Tab>
        <Tab value={'expertiza'} label={'Ekspertiza natijalari'}>
          <ApplicationExpertResult results={results} application={id} />
        </Tab>

        <Tab value={'place'} label={'Baholash natijalari'}>
          <ApplicationExpertAuditResult results={audits} docs={documentNews} application={id} />
        </Tab>
        <Tab value={'reAudit'} label={'O`rganish'}>
          <ReAuditDocument initialValues={initialValues} />
        </Tab>

        <Tab value={'commissions'} label={'Akrreditatsiya komissiyasi '}>
          <ApplicationCommissionResult results={commissions} application={id} />
        </Tab>

      </Tabs>
    </BoxUI>
  )
}

export default ApplicationTabs
