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
import ApplciationTabs from '../components/ApplciationTabs'
import { mapBranches, mapExperts, mapExpertsPlace } from './utils'

const getClientItemParams = (onComplete) => ({
  action: clientFetchItem,
  stateName: STATE.APPLICATION_ITEM,
  onComplete:onComplete
})

const getInitialValues = data => {
  return {

    id: prop('id', data),
    contracts: prop('contracts', data),
    contractPlace: prop('contractPlace', data),
    commissions: prop('commissions', data),
    experts: prop('experts', data),
    expertsPlace: prop('expertsPlace', data),
    plan: prop('plan', data),
    notice: prop('notice', data),
    command: prop('command', data),
    audits: prop('audits', data),
    documentNews: prop('documentNews', data),

  }
}

const EMPTY_ARR = []

const ApplicationConfirmContainer = props => {
  const dispatch = useDispatch()
  const expertModal = useModal({ key: 'expertModal' })
  const placeModal = useModal({ key: 'placeModal' })

  const [expertList, setExpertList] = useState(EMPTY_ARR)
  const [expertPlaceList, setExpertPlaceList] = useState(EMPTY_ARR)
  const confirmModal = useModal({ key: 'confirmModal' })

  const onComplete = ({ value }) => {
    // const experts = prop('experts', value)
    // const expertsPlace = prop('expertsPlace', value)
    // setExpertList([...experts])
    // setExpertPlaceList([...expertsPlace])
  }

  const onAddExpert = expert => {
    setExpertList([...expertList, expert])
    expertModal.onClose()
  }
  const onUpdateExpert = (branch) => {
    expertList.forEach((element, index) => {
      if (element.id === branch.id) {
        expertList.splice(index, 1, branch)
      }
    })
    expertModal.onClose()
  }

  const onAddPlace = place => {
    setExpertPlaceList([...expertPlaceList, place])
    placeModal.onClose()
  }
  const onUpdatePlace = (branch) => {
    expertPlaceList.forEach((element, index) => {
      if (element.id === branch.id) {
        expertPlaceList.splice(index, 1, branch)
      }
    })
    placeModal.onClose()
  }
  const params = useParams()

  const { data } = useFetchItem(getClientItemParams(onComplete))
  const initialValues = getInitialValues(data)

  const stage = prop('stage', data)

  const confirmSubmit = values => {
    const experts = map(mapExperts, expertList)
    const expertsPlace = map(mapExpertsPlace, expertPlaceList)
    const file = path(['file', 'id'], values)
    const command = path(['command', 'id'], values)
    const plan = path(['plan', 'id'], values)
    const notice = path(['notice', 'id'], values)
    const privacy = path(['privacy', 'id'], values)
    const noticeFinal = path(['noticeFinal', 'id'], values)
    const postAccred = path(['postaccred', 'id'], values)
    const listAttendees = path(['listAttendees', 'id'], values)
    const observationMap = path(['observationMap', 'id'], values)
    const nonConformities = path(['nonConformities', 'id'], values)
    const groupReport = path(['groupReport', 'id'], values)
    const documentOne = path(['documentOne', 'id'], values)
    const documentTwo = path(['documentTwo', 'id'], values)
    const documentThree = path(['documentThree', 'id'], values)
    const leadExpert = path(['leadExpert', 'id'], values)
    const newDAta = getSerializedData([
      'executors',
      'executor',
      'experts',
      'name',
      'rate',
      'price',
      'count',
      'paymentType',
      'from_date',
      'to_date',
      'assessmentStartDate',
      'assessmentEndDate',
      'nameOne',
      'nameTwo',
      'nameThree',
      'number',
      'accreditationDate',
      'statusDate',
    ], values)
    const data = {
      ...newDAta,
      experts,
      experts_place:expertsPlace,
      notice_final:noticeFinal,
      file,
      notice,
      plan,
      command,
      post_accred:postAccred,
      privacy:privacy,
      list_attendees:listAttendees,
      observation_map:observationMap,
      non_conformities:nonConformities,
      group_report:groupReport,
      document_one:documentOne,
      document_two:documentTwo,
      document_three:documentThree,
      lead_expert:leadExpert,
    }
    confirmModal.onClose()
    dispatch(applicationConfirmAction(params.id, data))
      .then(() => props.history.push(sprintf(ROUTES.APPLICATION_UPDATE_URL, params.id)))
      .catch(mapResponseToFormError)
  }
  return (
    <ApplicationConfirm
      onSubmit={confirmSubmit}
      expertList={expertList}
      expertPlaceList={expertPlaceList}
      initialValues={initialValues}
      application={params.id}
      placeList={expertPlaceList}
      expertModal={{ ...expertModal, onSubmit: onAddExpert, onUpdateExpert:onUpdateExpert }}
      placeModal={{ ...placeModal, onSubmit: onAddPlace, onUpdateExpert:onUpdatePlace }}
      stage={stage}
    />
  )
}

export default ApplicationConfirmContainer
