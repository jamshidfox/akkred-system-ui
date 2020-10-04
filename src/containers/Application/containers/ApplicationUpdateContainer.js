import React, { useState } from 'react'
import {
  flatten,
  fromPairs,
  map,
  path,
  pipe,
  prop,
  toPairs,
  union,
  values
} from 'ramda'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import toSnakeCase from '../../../utils/toSnakeCase'

import * as STATE from '../../../constants/stateNames'
import * as ROUTES from '../../../constants/routes'
import {
  useFetchList,
  useUpdate,
  useFetchItem,
  useModal
} from '../../../hooks'
import { getSerializedData, getIdForInitValues } from '../../../utils/get'
import ApplicationCreate, { fields } from '../components/ApplicationCreate'
import {
  applicationFetchList,
  clientFetchItem,
  applicationUpdateAction
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
    clientInfo: prop('client', data),
    client: path(['client', 'id'], data),
    hasPartAnotherOrgan: prop('hasPartAnotherOrgan', data),
    internalAudit: prop('internalAudit', data),
    managementAnalysis: prop('managementAnalysis', data),
    managementSystem: prop('managementSystem', data),
    proficiencyTestingProvider: prop('proficiencyTestingProvider', data),
    typeApplication: prop('typeApplication', data),
    typeStandard: prop('typeStandard', data)
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
  const confirmModal = useModal({ key: 'confirmModal' })
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
    const serviceListMap = map(mapBranches, serviceList)
    const data = toSnakeCase({
      branchs: serviceListMap,
      ...values,
      client:client
    })
    dispatch(applicationUpdateAction(params.id, data))
      .then(() => props.history.push(ROUTES.APPLICATION_LIST_URL))
      .catch(mapResponseToFormError)
  }
  const onTabChange = (val) => {
    setTab(val)
  }

  const confirmSubmit = (event) => {
    confirmModal.onClose()
  }

  return (

    <ApplciationTabs
      onSubmit={() => null}
      initialValues={initialValues}
      serviceList={serviceList}
      serviceModal={{ ...serviceModal, onSubmit: onAddService }}
      confirmModal={{ ...confirmModal, onSubmit: confirmSubmit }}
      onCreateApplication={onCreateApplication}
      onUpdateBranch={onUpdateBranch}
      tabData={{ tab, onTabChange }}
    />
  )
}

export default ApplicationUpdateContainer
