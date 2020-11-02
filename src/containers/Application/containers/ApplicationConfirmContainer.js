import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import {
  useModal
} from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import {
  applicationConfirmAction,
} from '../actions'
import { mapResponseToFormError } from '../../../utils/form'
import ApplicationConfirm from '../components/Confirm/ApplicationConfirm'
import * as ROUTES from '../../../constants/routes'

const ApplicationConfirmContainer = props => {
  const dispatch = useDispatch()
  const confirmModal = useModal({ key: 'confirmModal' })

  const params = useParams()

  const confirmSubmit = values => {
    const newDAta = getSerializedData(['executors', 'executor', 'experts'], values)
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
    />
  )
}

export default ApplicationConfirmContainer
