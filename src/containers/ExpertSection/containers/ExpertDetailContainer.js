import React from 'react'
import { prop, path } from 'ramda'
import { sprintf } from 'sprintf-js'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as STATE from '../../../constants/stateNames'
import { useUpdate, useFetchItem, useModal } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import { applicationUpdateAction, clientFetchItem, applicationConfirmAction, expertAnswerAction } from '../actions'
import ExpertExpertiseCreate from '../components/ExpertExpertise'
import * as ROUTES from '../../../constants/routes'
import { mapResponseToFormError } from '../../../utils/form'

const EMPTY_ARR = []
const getEmployerItemParams = () => ({
  action: clientFetchItem,
  stateName: STATE.EXPERT_EXPERTISE_ITEM,
})

const getInitialValues = (data) => {
  return ({
    status: prop('status', data),
    statusAssignment: prop('statusAssignment', data),
    application: prop('application', data),
    expert: prop('expert', data),
    assignment: path(['assignment', 'file'], data),
    file: path(['file', 'file'], data),
    case: prop('case', data),
    comments: prop('comments', data),
    closedDate: prop('closedDate', data),
    answerType: prop('answerType', data),
  })
}

const getEmployeesUpdateParams = () => ({
  stateName: STATE.EXPERT_EXPERTISE_UPDATE,
  action: applicationUpdateAction,
  serializer: getSerializedData(),
})

const ExpertDetailContainer = props => {
  const { data } = useFetchItem(getEmployerItemParams())
  const params = useParams()
  const dispatch = useDispatch()
  const serviceModal = useModal({ key: 'serviceModal' })
  const answerModal = useModal({ key: 'answerModal' })
  const initialValues = getInitialValues(data)
  const updateData = useUpdate(getEmployeesUpdateParams())
  console.warn(initialValues,'initialValues')

  const confirmSubmit = values => {
    const newDAta = getSerializedData([
      'file',
      'act',
      'comments',
    ], values)
    const data = {
      ...newDAta,
    }
    dispatch(applicationConfirmAction(params.id, data))
      .then(() => props.history.push(sprintf(ROUTES.EXPERT_EXPERTISE_LIST_URL, params.id)))
      .catch(mapResponseToFormError)
  }

  const answerSubmit = values => {
    const newDAta = getSerializedData([
      'comments',
      'answer_type',
    ], values)
    const data = {
      ...newDAta,
    }
    dispatch(expertAnswerAction(params.id, data))
      .then(() => props.history.push(sprintf(ROUTES.EXPERT_EXPERTISE_LIST_URL, params.id)))
      .catch(mapResponseToFormError)
  }
  return (
    <ExpertExpertiseCreate
      onSubmit={confirmSubmit}
      answerSubmit={answerSubmit}
      initialValues={initialValues}
      serviceModal={serviceModal}
      answerModal={answerModal}
    />
  )
}

export default ExpertDetailContainer
