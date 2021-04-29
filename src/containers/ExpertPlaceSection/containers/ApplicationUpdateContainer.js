import React, { useState } from 'react'
import { prop, path, map } from 'ramda'
import { sprintf } from 'sprintf-js'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as STATE from '../../../constants/stateNames'
import { useUpdate, useFetchItem, useModal, useFetchList } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import {
  applicationUpdateAction,
  clientFetchItem,
  applicationConfirmAction,
  templateFetchList,
  applicationFetchList
} from '../actions'
import ExpertExpertiseCreate from '../components/ExpertExpertise'
import * as ROUTES from '../../../constants/routes'
import { mapResponseToFormError } from '../../../utils/form'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import { fields } from '../components/CommentListFilterForm'

const EMPTY_ARR = []
const getEmployerItemParams = () => ({
  action: clientFetchItem,
  stateName: STATE.EXPERT_PLACE_ITEM,
})

const getTemplateParams = () => ({
  action: templateFetchList,
  stateName: STATE.TEMPLATE_LIST,
})

const getInitialValues = (data) => {
  return ({
    status: prop('status', data),
    statusAssignment: prop('statusAssignment', data),
    application: path(['application', 'id'], data),
    documents: path(['application', 'documents'], data),
    file: path(['assignment', 'file'], data),
    case: prop('case', data),
    comments: prop('comments', data),
    closedDate: prop('closedDate', data),
  })
}

const getEmployeesUpdateParams = () => ({
  stateName: STATE.EXPERT_PLACE_UPDATE,
  action: applicationUpdateAction,
  serializer: getSerializedData(),
})

const EmployeesUpdateContainer = props => {
  const listTemplate = useFetchList({
    action: templateFetchList,
    stateName: STATE.TEMPLATE_LIST,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })

  const { data } = useFetchItem(getEmployerItemParams())
  const params = useParams()
  const dispatch = useDispatch()
  const serviceModal = useModal({ key: 'serviceModal' })
  const initialValues = getInitialValues(data)
  const updateData = useUpdate(getEmployeesUpdateParams())

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
      .then(() => props.history.push(sprintf(ROUTES.EXPERT_PLACE_LIST_URL, params.id)))
      .catch(mapResponseToFormError)
  }
  return (
    <ExpertExpertiseCreate
      onSubmit={confirmSubmit}
      initialValues={initialValues}
      listTemplate={listTemplate}
      serviceModal={serviceModal}
    />
  )
}

export default EmployeesUpdateContainer
