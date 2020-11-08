import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { prop } from 'ramda'
import {
  useFetchItem,
  useModal
} from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import {
  applicationConfirmAction, clientFetchItem,
} from '../actions'
import { mapResponseToFormError } from '../../../utils/form'
import ApplicationConfirm from '../components/Confirm/ApplicationConfirm'
import * as ROUTES from '../../../constants/routes'
import * as STATE from '../../../constants/stateNames'

const getClientItemParams = () => ({
  action: clientFetchItem,
  stateName: STATE.APPLICATION_ITEM,
})

const ApplicationConfirmContainer = props => {
  const dispatch = useDispatch()
  const confirmModal = useModal({ key: 'confirmModal' })

  const params = useParams()

  const { data } = useFetchItem(getClientItemParams())

  const stage = prop('stage', data)

  const confirmSubmit = values => {
    const newDAta = getSerializedData([
      'executors',
      'executor',
      'experts',
      'price',
      'rate',
      'count',
      'total_amount'
    ], values)
    const data = {
      ...newDAta
    }
    confirmModal.onClose()
    dispatch(applicationConfirmAction(params.id, data))
      .then(() => props.history.push(sprintf(ROUTES.APPLICATION_UPDATE_URL, params.id)))
      .catch(mapResponseToFormError)
  }

  return (
    <ApplicationConfirm
      onSubmit={confirmSubmit}
      stage={stage}
    />
  )
}

export default ApplicationConfirmContainer
