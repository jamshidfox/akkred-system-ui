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
import { getSerializedData } from '../../../utils/get'
import { fields } from '../components/ApplicationCreate'
import {
  clientFetchItem,
  applicationUpdateAction,
} from '../actions'
import { mapResponseToFormError } from '../../../utils/form'
import ApplciationTabs from '../components/ApplciationTabs'
import { mapBranches, mapDocument } from './utils'

const getClientItemParams = (onComplete) => ({
  action: clientFetchItem,
  stateName: STATE.APPLICATION_ITEM,
  onComplete:onComplete
})

const serializer = val => {
  return {
    ...getSerializedData(fields, val)
  }
}
const EMPTY_ARR = []

const getInitialValues = data => {
  return {
    id: prop('id', data),
    clientInfo: prop('client', data),
    executor: prop('executor', data),
    client: path(['client', 'id'], data),
    hasPartAnotherOrgan: prop('hasPartAnotherOrgan', data),
    internalAudit: prop('internalAudit', data),
    stage: prop('stage', data),
    file: prop('file', data),
    branchs: prop('branchs', data),
    managementAnalysis: prop('managementAnalysis', data),
    managementSystem: prop('managementSystem', data),
    proficiencyTestingProvider: prop('proficiencyTestingProvider', data),
    typeApplication: prop('typeApplication', data),
    typeStandard: prop('typeStandard', data),
    executors: prop('executors', data),
    experts: prop('experts', data),
    contracts: prop('contracts', data),
    contractPlace: prop('contractPlace', data),
    plan: prop('plan', data),
    notice: prop('notice', data),
    command: prop('command', data),
    expertise: prop('expertsExpertize', data),
    expertsPlace: prop('expertsPlace', data),
    assignments: prop('expertsAssignment', data),
    results: prop('results', data),

  }
}

const getClientUpdateParams = () => ({
  stateName: STATE.APPLICATION_UPDATE,
  action: applicationUpdateAction,
  serializer: serializer,
  redirectUrl: ROUTES.APPLICATION_LIST_URL
})
const ApplicationUpdateContainer = props => {
  const dispatch = useDispatch()
  const serviceModal = useModal({ key: 'serviceModal' })
  const documentModal = useModal({ key: 'documentModal' })
  const [tab, setTab] = useState('guest')
  const [serviceList, setServiceList] = useState(EMPTY_ARR)
  const [officeList, setOfficeList] = useState(EMPTY_ARR)
  const [staffList, setStaffList] = useState(EMPTY_ARR)
  const [documentList, setDocumentList] = useState(EMPTY_ARR)

  const onComplete = ({ value }) => {
    const branch = prop('branchs', value)
    const documents = prop('documents', value)
    const staffs = prop('staffs', value)
    const offices = prop('offices', value)
    setServiceList([...branch])
    setDocumentList([...documents])
    setOfficeList([...offices])
    setStaffList([...staffs])
  }
  const { data } = useFetchItem(getClientItemParams(onComplete))
  const onAddService = service => {
    setServiceList([...serviceList, service])
    serviceModal.onClose()
  }

  const onAddDocument = document => {
    setDocumentList([...documentList, document])
    documentModal.onClose()
  }
  const onUpdateDocument = (document) => {
    documentList.forEach((element, index) => {
      if (element.id === document.id) {
        documentList.splice(index, 1, document)
      }
    })
    serviceModal.onClose()
  }

  const params = useParams()
  const initialValues = getInitialValues(data)

  const onUpdateService = (branch) => {
    serviceList.forEach((element, index) => {
      if (element.id === branch.id) {
        serviceList.splice(index, 1, branch)
      }
    })
    serviceModal.onClose()
  }
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

  return (
    <ApplciationTabs
      onSubmit={() => null}
      initialValues={initialValues}
      serviceList={serviceList}
      staffList={staffList}
      documentList={documentList}
      officeList={officeList}
      serviceModal={{ ...serviceModal, onSubmit: onAddService, onUpdateService:onUpdateService }}
      documentModal={{ ...documentModal, onSubmit: onAddDocument, onUpdateDocument:onUpdateDocument }}
      onCreateApplication={onCreateApplication}
      tabData={{ tab, onTabChange }}
    />
  )
}

export default ApplicationUpdateContainer
