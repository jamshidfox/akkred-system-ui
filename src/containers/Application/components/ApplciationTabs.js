import React, { useState } from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Row as RowUI, Col } from '../../../components/Grid'
import { Tabs, Tab } from '../../../components/TabsDetail'
import {
  Form,
  Field,
  InputField,
  UniversalStaticSelectField,
  UniversalSearchField,
  DateField,
  NoopFields
} from '../../../components/FormField'
import { ANSWER_LIST, APPLICATION_LIST, STANDART_LIST } from '../../../constants/backend'
import { Box } from '../../../components/StyledElems'
import * as API from '../../../constants/api'
import { BranchCreateModal, BranchList } from './Branch'
import ApplicationCreate from './ApplicationCreate'

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
export const GUEST = 'guest'
export const SERVICE = 'service'
export const PAYMENT = 'payment'
const ApplicationTabs = props => {
  const { onSubmit, initialValues, serviceModal, onCreateApplication, serviceList, onUpdateBranch, tabData } = props

  return (
    <BoxUI>
      <Tabs initialValue={'guest'} value={tabData.tab} onChange={tabData.onTabChange}>
        <Tab title="Разместить гостя" value={'guest'} label={'гости'}>
          <ApplicationCreate
            onSubmit={onSubmit}
            initialValues={initialValues}
            serviceModal={serviceModal}
            onCreateApplication={onCreateApplication}
            onUpdateBranch={onUpdateBranch}
            serviceList={serviceList}
            onTabChange={() => tabData.onTabChange(SERVICE)}
          />
        </Tab>
        <Tab title="Услуги в номере" value={'service'} label={'Услуги в номере'}>
          s
        </Tab>

        <Tab title="ПАРАМЕТРЫ" value={'others'} label={'ДОПОЛЬНИТЕЛЬНЫЕ ПАРАМЕТРЫ'}>
          d
        </Tab>
      </Tabs>

    </BoxUI>
  )
}

export default ApplicationTabs
