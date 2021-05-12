import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { Tabs, Tab } from '../../../components/TabsDetail'
import { Box } from '../../../components/StyledElems'
import ApplicationUserInfo from './ApplicationUserInfo'
import ApplicationAddInfo from './ApplicationAddInfo'
import ApplicationContractInvoiceInfo from './ApplicationContractInvoiceInfo'
import ApplicationExpertResult from './ApplicationExpertResult'
import ApplicationExpertPlaceResult from './ApplicationExpertPlaceResult'
import ApplicationCommissionResult from './ApplicationCommissionResult'
import ApplicationClientDocument from './ApplicationClientDocuments'
import ApplicationDetail from './ApplicationDetail'
import Phase from './Phase'
import ApplicationAccreditationDocuments from './ApplicationAccreditationDocuments'
import TaskItem from "./Items/TaskItem";

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

  const historyStage = prop('history', initialValues)
  const histories = prop('histories', initialValues)
  const isExpertise = prop('isExpertise', initialValues)

  var noticeFinal = []
  noticeFinal.push(noticeFin)

  return (
    <BoxUI>
      <Tabs
        initialValue={'stage'}
      >
        <Tab value={'stage'} label={'Bosqich'}>
          <Phase id={id} stage={stage} initialValues={initialValues} historyStage={historyStage} isExpertise={isExpertise} rejectModal={rejectModal} expertRejectModal={expertRejectModal} histories={histories} />
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
            additionalActivityList={additionalActivityList}
            officeList={officeList}
            mobileList={mobileList}
            onTabChange={() => tabData.onTabChange(SERVICE)}

          />
        </Tab>
        <Tab value={'detail'} label={'Detail'}>
          <TaskItem description={'description'} withoutIs={'withoutIs'} />
        </Tab>

        <Tab value={'documents'} label={'Murojaatchiga tegishli hujjatlar '}>
          <ApplicationClientDocument docs={documents} />
        </Tab>
        <Tab value={'v'} label={'Ijrochi va ekspertlar'}>
          <ApplicationAddInfo executor={executor} executors={executors} expertise={expertise} expertRejectModal={expertRejectModal} experts={experts} assignments={assignments} expertsPlace={expertsPlace} />
        </Tab>
        <Tab value={'c'} label={'Shartnomalar va to’lov ma’lumotlari'}>
          <ApplicationContractInvoiceInfo contracts={contracts} application={id && id} contractPlace={contractPlace} plan={plan} notice={notice} command={command} postAccred={postAccred} noticeFinal={noticeFinal} />
        </Tab>
        <Tab value={'documentsAccred'} label={'Akrreditatsiyaga tegishli hujjatlar '}>
          <ApplicationAccreditationDocuments plan={plan} notice={notice} command={command} postAccred={postAccred} noticeFinal={noticeFinal} />
        </Tab>
        <Tab value={'expertiza'} label={'Ekspertiza natijalari'}>
          <ApplicationExpertResult results={results} application={id} />
        </Tab>

        <Tab value={'place'} label={'Baholash natijalari'}>
          <ApplicationExpertPlaceResult results={audits} docs={documentNews} application={id} />
        </Tab>

        <Tab value={'commissions'} label={'Akrreditatsiya komissiyasi '}>
          <ApplicationCommissionResult results={commissions} application={id} />
        </Tab>

      </Tabs>
    </BoxUI>
  )
}

export default ApplicationTabs
