import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { map, prop, path } from 'ramda'
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
import { mapBranches, mapExperts,mapExpertsPlace } from './utils'

const getClientItemParams = () => ({
  action: clientFetchItem,
  stateName: STATE.APPLICATION_ITEM,
})

const EMPTY_ARR = []

const ApplicationConfirmContainer = props => {
  const dispatch = useDispatch()
  const serviceModal = useModal({ key: 'serviceModal' })
  const placeModal = useModal({ key: 'placeModal' })
  const [placeList, setPlaceList] = useState(EMPTY_ARR)

  const [serviceList, setServiceList] = useState(EMPTY_ARR)
  const confirmModal = useModal({ key: 'confirmModal' })
  const onAddService = service => {
    setServiceList([...serviceList, service])
    serviceModal.onClose()
  }
  const onUpdateService = (branch) => {
    serviceList.forEach((element, index) => {
      if (element.id === branch.id) {
        serviceList.splice(index, 1, branch)
      }
    })
    serviceModal.onClose()
  }

  const onAddPlace = place => {
    setPlaceList([...placeList, place])
    placeModal.onClose()
  }
  const onUpdatePlace = (branch) => {
    placeList.forEach((element, index) => {
      if (element.id === branch.id) {
        placeList.splice(index, 1, branch)
      }
    })
    placeModal.onClose()
  }
  const params = useParams()

  const { data } = useFetchItem(getClientItemParams())

  const stage = prop('stage', data)

  const confirmSubmit = values => {
    const experts = map(mapExperts, serviceList)
    const expertsPlace = map(mapExpertsPlace, placeList)
    const file = path(['file', 'id'], values)
    const newDAta = getSerializedData([
      'executors',
      'executor',
      'experts',
      'price',
      'rate',
      'count',
      'total_amount',
      'from_date',
      'to_date',
    ], values)
    const data = {
      ...newDAta,
      experts,
      experts_place:expertsPlace,
      file,
    }
    confirmModal.onClose()
    dispatch(applicationConfirmAction(params.id, data))
      .then(() => props.history.push(sprintf(ROUTES.APPLICATION_UPDATE_URL, params.id)))
      .catch(mapResponseToFormError)
  }

  return (
    <ApplicationConfirm
      onSubmit={confirmSubmit}
      serviceList={serviceList}
      placeList={placeList}
      serviceModal={{ ...serviceModal, onSubmit: onAddService, onUpdateService:onUpdateService }}
      placeModal={{ ...placeModal, onSubmit: onAddPlace, onUpdateService:onUpdatePlace }}
      stage={stage}
    />
  )
}

export default ApplicationConfirmContainer
