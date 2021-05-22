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
import { mapBranches, mapDocument, mapExperts, mapExpertsPlace, mapTravelData } from './utils'

const getClientItemParams = (onComplete) => ({
  action: clientFetchItem,
  stateName: STATE.APPLICATION_ITEM,
  onComplete:onComplete
})

const getInitialValues = data => {
  return {

    id: prop('id', data),
    contracts: prop('contracts', data),
    executors: prop('executors', data),
    contractPlace: prop('contractPlace', data),
    commissions: prop('commissions', data),
    experts: prop('experts', data),
    expertsPlace: prop('expertsPlace', data),
    plan: prop('plan', data),
    notice: prop('notice', data),
    command: prop('command', data),
    audits: prop('audits', data),
    documentNews: prop('documentNews', data),
    additionalDocs: prop('additionalDocs', data),
    isExpertise: prop('isExpertise', data),

  }
}

const EMPTY_ARR = []

const ApplicationConfirmContainer = props => {
  const dispatch = useDispatch()
  const expertModal = useModal({ key: 'expertModal' })
  const placeModal = useModal({ key: 'placeModal' })

  const [expertList, setExpertList] = useState(EMPTY_ARR)
  const [documentList, setDocumentList] = useState(EMPTY_ARR)
  const [expertPlaceList, setExpertPlaceList] = useState(EMPTY_ARR)
  const [travelDataList, setTravelDataList] = useState(EMPTY_ARR)
  const confirmModal = useModal({ key: 'confirmModal' })
  const documentModal = useModal({ key: 'documentModal' })
  const travelDataModal = useModal({ key: 'travelDataModal' })

  const onAddTravelData = document => {
    setTravelDataList([...travelDataList, document])
    travelDataModal.onClose()
  }

  const onDeleteTravelData = (document) => {
    travelDataList.forEach((element, index) => {
      if (element.id === document.id) {
        travelDataList.splice(index, 1)
      }
    })
    travelDataModal.onClose()
  }

  const onAddDocument = document => {
    setDocumentList([...documentList, document])
    documentModal.onClose()
  }

  const onDeleteDocument = (document) => {
    documentList.forEach((element, index) => {
      if (element.file.id === document.file.id) {
        documentList.splice(index, 1)
      }
    })
    documentModal.onClose()
  }

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

  const onSuccess = (...datas) => {
    const data = {
      text:[ ...datas ]
    }

    dispatch(applicationConfirmAction(params.id, data))
      .then(() => props.history.push(sprintf(ROUTES.APPLICATION_UPDATE_URL, params.id)))
      .catch(mapResponseToFormError)
  }

  const confirmSubmit = values => {
    const documents = map(mapDocument, documentList)
    const travelData = map(mapTravelData, travelDataList)
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
      'hr',
      'executors',
      'executor',
      'experts',
      'name',
      'rate',
      'price',
      'count',
      'paymentType',
      'typeContract',
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
      documents_audits:documents,
      experts_place:expertsPlace,
      notice_final:noticeFinal,
      travel_data:travelData,
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
      onSuccess={onSuccess}
      expertList={expertList}
      expertPlaceList={expertPlaceList}
      initialValues={initialValues}
      application={params.id}
      placeList={expertPlaceList}
      documentModal={{ ...documentModal, onSubmit: onAddDocument }}
      onDeleteDocument={onDeleteDocument}
      documentList={documentList}

      travelDataModal={{ ...travelDataModal, onSubmit: onAddTravelData }}
      onDeleteTravelData={onDeleteTravelData}
      travelDataList={travelDataList}

      expertModal={{ ...expertModal, onSubmit: onAddExpert, onUpdateExpert:onUpdateExpert }}
      placeModal={{ ...placeModal, onSubmit: onAddPlace, onUpdateExpert:onUpdatePlace }}
      stage={stage}
    />
  )
}

export default ApplicationConfirmContainer
