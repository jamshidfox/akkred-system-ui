import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import toSnakeCase from '../../../utils/toSnakeCase'
import * as STATE from '../../../constants/stateNames'
import { useCreate, useModal } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { ClientCreate, fields } from '../components'
import { applicationCreateAction } from '../actions'
import * as ROUTES from '../../../constants/routes'
import { mapResponseToFormError } from '../../../utils/form'
import ApplicationCreate from '../components/ApplicationCreate'
import ApplciationTabs from '../components/ApplciationTabs'

export const serializer = (val) => {
  return {
    ...getSerializedData(fields, val)
  }
}
const EMPTY_ARR = []

export const getRoomCreateParams = () => ({
  stateName: STATE.APPLICATION_CREATE,
  action: applicationCreateAction,
  serializer: serializer,
  redirectUrl: ROUTES.APPLICATION_LIST_URL
})

const ApplicationCreateContainer = props => {
  const dispatch = useDispatch()
  const [tab, setTab] = useState('guest')
  const [serviceList, setServiceList] = useState(EMPTY_ARR)
  const serviceModal = useModal({ key: 'serviceModal' })
  const onAddService = (service) => {
    setServiceList([...serviceList, service])
    serviceModal.onClose()
  }
  const onUpdateBranch = (branch) => {
    serviceList.forEach((element, index) => {
      if (element.id === branch.id) {
        serviceList.splice(index, 1, branch)
      }
    })
    serviceModal.onClose()
  }
  const onCreateApplication = (values) => {
    const data = toSnakeCase({
      serviceList,
      ...values,
    })
    dispatch(applicationCreateAction(data))
      .then(() => props.history.push(ROUTES.APPLICATION_LIST_URL))
      .catch(mapResponseToFormError)
  }
  const onTabChange = (val) => {
    setTab(val)
  }
  return (
    <ApplciationTabs
      onSubmit={() => null}
      serviceList={serviceList}
      onCreateApplication={onCreateApplication}
      serviceModal={{ ...serviceModal, onSubmit: onAddService }}
      onUpdateBranch={onUpdateBranch}
      tabData={{ tab, onTabChange }}
    />
  )
}
ApplicationCreateContainer.propTypes = {
  history: PropTypes
}

export default ApplicationCreateContainer
