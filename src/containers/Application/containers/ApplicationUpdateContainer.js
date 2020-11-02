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
  applicationConfirmAction,
  applicationRejectAction
} from '../actions'
import { mapResponseToFormError } from '../../../utils/form'
import ApplciationTabs from '../components/ApplciationTabs'
import { mapBranches } from './utils'

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
    expertise: prop('expertsExpertize', data),
    assignments: prop('expertsAssignment', data),

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
  const [tab, setTab] = useState('guest')
  const [serviceList, setServiceList] = useState(EMPTY_ARR)

  const onComplete = ({ value }) => {
    const branch = prop('branchs', value)
    setServiceList([...branch])
  }
  const { data } = useFetchItem(getClientItemParams(onComplete))
  const onAddService = service => {
    setServiceList([...serviceList, service])
    serviceModal.onClose()
  }
  const params = useParams()
  const initialValues = getInitialValues(data)

  const onUpdateBranch = (branch) => {
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
    const branchs = map(mapBranches, serviceList)
    const data = toSnakeCase({
      branchs,
      ...values,
      client,
      executor,
      file
    })
    dispatch(applicationUpdateAction(params.id, data))
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
      serviceModal={{ ...serviceModal, onSubmit: onAddService }}
      onCreateApplication={onCreateApplication}
      onUpdateBranch={onUpdateBranch}
      tabData={{ tab, onTabChange }}
    />
  )
}

export default ApplicationUpdateContainer
