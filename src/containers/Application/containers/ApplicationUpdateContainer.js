import React, { useState } from 'react'
import {
  map,
  path,
  prop
} from 'ramda'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import toSnakeCase from '../../../utils/toSnakeCase'

import * as STATE from '../../../constants/stateNames'
import * as ROUTES from '../../../constants/routes'
import {
  useFetchItem,
  useModal
} from '../../../hooks'
import {
  clientFetchItem,
  applicationUpdateAction, applicationConfirmRejectAction,
} from '../actions'
import { mapResponseToFormError } from '../../../utils/form'
import ApplciationTabs from '../components/ApplciationTabs'
import { mapBranches, mapDocument } from './utils'

const getClientItemParams = (onComplete) => ({
  action: clientFetchItem,
  stateName: STATE.APPLICATION_ITEM,
  onComplete:onComplete
})

const EMPTY_ARR = []

const getInitialValues = data => {
  const clientInfo = {
    objectFullName: prop('objectFullName', data),
    objectLegalAddress: prop('objectLegalAddress', data),
    objectFactAddress: prop('objectFactAddress', data),
    objectPhoneNumber: prop('objectPhoneNumber', data),
    objectSite: prop('objectSite', data),
    objectEmail: prop('objectEmail', data),
    object_inn: prop('objectInn', data),
    legalEntityFullName: prop('legalEntityFullName', data),
    legalEntityPhoneNumber: prop('legalEntityPhoneNumber', data),
    legalEntityEmail: prop('legalEntityEmail', data),
    bankName: prop('bankName', data),
    bankInn: prop('bankInn', data),
    bankMfo: prop('bankMfo', data),
    paymentAccount: prop('paymentAccount', data),
    oked: prop('oked', data),
    soogu: prop('soogu', data),
  }

  return {

    id: prop('id', data),
    internalAudit: prop('internalAudit', data),
    stage: prop('stage', data),
    labaratoriya: prop('labaratoriya', data),
    outsource: prop('outsource', data),
    isAkkred: prop('isAkkred', data),
    managementAnalysis: prop('managementAnalysis', data),
    managementSystem: prop('managementSystem', data),
    typeApplication: prop('typeApplication', data),
    typeStandard: prop('typeStandard', data),
    status: prop('status', data),
    anotherActivities: prop('anotherActivities', data),
    question: prop('question', data),
    anotherManagementSystem: prop('anotherManagementSystem', data),
    assessmentAgency: prop('assessmentAgency', data),
    certificateAgency: prop('certificateAgency', data),
    educationalInstitution: prop('educationalInstitution', data),
    inManufacture: prop('inManufacture', data),
    anotherPlace: prop('anotherPlace', data),
    howOftenExam: prop('howOftenExam', data),
    attractedPerson: prop('attractedPerson', data),
    accreditationCertificate: prop('accreditationCertificate', data),
    audits: prop('audits', data),
    documentNews: prop('documentNews', data),
    documents: prop('documents', data),

    clientInfo: clientInfo,
    executor: prop('executor', data),
    hasPartAnotherOrgan: prop('hasPartAnotherOrgan', data),
    proficiencyTestingProvider: prop('proficiencyTestingProvider', data),
    executors: prop('executors', data),
    history: prop('history', data),
    historyPay: prop('historyPay', data),
    experts: prop('experts', data),
    contracts: prop('contracts', data),
    contractPlace: prop('contractPlace', data),
    plan: prop('plan', data),
    notice: prop('notice', data),
    command: prop('command', data),
    postAccred: prop('postAccred', data),
    noticeFinal: prop('noticeFinal', data),
    expertise: prop('expertsExpertize', data),
    expertsPlace: prop('expertsPlace', data),
    assignments: prop('expertsAssignment', data),
    results: prop('results', data),
    resultsPlace: prop('resultsPlace', data),
    commissions: prop('commissions', data),
    mobileComplexes: prop('mobileComplexes', data),
    offices: prop('offices', data),
    certificationAccreditation: prop('certificationAccreditation', data),
    certificationField: prop('certificationField', data),
    accreditedByAnother: prop('accreditedByAnother', data),
    consultingService: prop('consultingService', data),
    certificateNumber: prop('certificateNumber', data),
    isExpertise: prop('isExpertise', data),

  }
}

const ApplicationUpdateContainer = props => {
  const dispatch = useDispatch()
  const expertRejectModal = useModal({ key: 'expertRejectModal' })
  const [tab, setTab] = useState('guest')
  const [serviceList, setServiceList] = useState(EMPTY_ARR)
  const [mobileList, setMobileList] = useState(EMPTY_ARR)
  const [officeList, setOfficeList] = useState(EMPTY_ARR)
  const [staffList, setStaffList] = useState(EMPTY_ARR)
  const [documentList, setDocumentList] = useState(EMPTY_ARR)
  const [additionalActivityList, setAdditionalActivityList] = useState(EMPTY_ARR)

  const onComplete = ({ value }) => {
    const branches = prop('branches', value)
    const documents = prop('documents', value)
    const additionalActivities = prop('additionalActivities', value)
    const mobileComplex = prop('mobileComplexes', value)
    const staffs = prop('staffs', value)
    const offices = prop('offices', value)

    setDocumentList([...documents])

    setAdditionalActivityList([...additionalActivities])
    setServiceList([...branches])
    setMobileList([...mobileComplex])
    setOfficeList([...offices])
    setStaffList([...staffs])
  }
  const { data } = useFetchItem(getClientItemParams(onComplete))

  const onSubmitExpertRejectModal = values => {
    expertRejectModal.onClose()
    dispatch(applicationConfirmRejectAction(params.id, values))
      .then(() => props.history.push(ROUTES.APPLICATION_LIST_URL))
      .catch(mapResponseToFormError)
  }

  const params = useParams()
  const initialValues = getInitialValues(data)

  const onCreateApplication = values => {
    const client = path(['client', 'id'], values)
    const executor = path(['executor', 'id'], values)
    const file = path(['file', 'id'], values)
    const branches = map(mapBranches, serviceList)
    const documents = map(mapDocument, documentList)
    const data = toSnakeCase({
      ...values,
      client,
      executor,
      file
    })
    dispatch(applicationUpdateAction(params.id, { ...data, branchs:branches, documents }))
      .then(() => props.history.push(ROUTES.APPLICATION_LIST_URL))
      .catch(mapResponseToFormError)
  }
  const onTabChange = (val) => {
    setTab(val)
  }

  const update = true

  return (
    <ApplciationTabs
      onSubmit={() => null}
      initialValues={initialValues}
      expertRejectModal={{ ...expertRejectModal, onSubmit: onSubmitExpertRejectModal }}
      onCreateApplication={onCreateApplication}
      tabData={{ tab, onTabChange }}
      update={update}
      serviceList={serviceList}
      staffList={staffList}
      mobileList={mobileList}
      officeList={officeList}
      additionalActivityList={additionalActivityList}

    />
  )
}

export default ApplicationUpdateContainer
