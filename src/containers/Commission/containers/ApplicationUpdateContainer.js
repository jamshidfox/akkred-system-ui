import React, { useState } from 'react'
import { prop, path, map } from 'ramda'
import { sprintf } from 'sprintf-js'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as STATE from '../../../constants/stateNames'
import { useUpdate, useFetchItem, useModal } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import { applicationUpdateAction, clientFetchItem, applicationConfirmAction } from '../actions'
import ExpertExpertiseCreate from '../components/ExpertExpertise'
import * as ROUTES from '../../../constants/routes'
import { mapResponseToFormError } from '../../../utils/form'

const getEmployerItemParams = () => ({
  action: clientFetchItem,
  stateName: STATE.COMMISSION_ITEM,
})

const getInitialValues = (data) => {
  return ({
    answerType: prop('answerType', data),
    application: path(['application', 'id'], data),
    comments: prop('comments', data),
    documentNews: path(['application', 'documentNews'], data),
    contractPlace: path(['application', 'contractPlace'], data),
    contracts: path(['application', 'contracts'], data),
    notice: path(['application', 'notice'], data),
    plan: path(['application', 'plan'], data),
    resultsPlace: path(['application', 'resultsPlace'], data),
    additionalDocs: path(['application', 'additionalDocs'], data),
    audits: path(['application', 'audits'], data),
    command: path(['application', 'command'], data),
    results: path(['application', 'results'], data),
    postAccred: path(['application', 'postAccred'], data),
  })
}

const getEmployeesUpdateParams = () => ({
  stateName: STATE.COMMISSION_UPDATE,
  action: applicationUpdateAction,
  serializer: getSerializedData(),
})

const EmployeesUpdateContainer = props => {
  const { data } = useFetchItem(getEmployerItemParams())
  const params = useParams()
  const dispatch = useDispatch()
  const serviceModal = useModal({ key: 'serviceModal' })
  const initialValues = getInitialValues(data)

  const confirmSubmit = values => {
    const newDAta = getSerializedData([
      'answerType',
      'comments',
    ], values)
    const data = {
      ...newDAta,
    }
    dispatch(applicationConfirmAction(params.id, data))
      .then(() => props.history.push(sprintf(ROUTES.COMMISSION_LIST_URL, params.id)))
      .catch(mapResponseToFormError)
  }
  return (
    <ExpertExpertiseCreate
      onSubmit={confirmSubmit}
      initialValues={initialValues}
      serviceModal={serviceModal}
    />
  )
}

export default EmployeesUpdateContainer
