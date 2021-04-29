import React from 'react'
import ApplicationConfirmDefault from './ApplicationConfirmStages/ApplicationConfirmDefault'
import ConfirmStageTwoChoiceExecutor from './ApplicationConfirmStages/[Stage2]Executor'
import ConfirmStageContract from './ApplicationConfirmStages/[Stage6]Contract'
import ConfirmStageAccounting from './ApplicationConfirmStages/[Stage7]Accounting'
import ConfirmStageChoiceExperts from './ApplicationConfirmStages/[Stage10]Experts'
import ConfirmStageContractPlace from './ApplicationConfirmStages/[Stage14]ContractPlace'
import ConfirmStageChoiceExpertsPlace from './ApplicationConfirmStages/[Stage14]ExpertsPlace'
import ConfirmStageChoiceExpertsConfirm from './ApplicationConfirmStages/[Stage11]ExpertsConfirm'
import ConfirmStageAccountingContractPlace from './ApplicationConfirmStages/[Stage15]Accounting'
import ApplicationConfirmCommand from './ApplicationConfirmStages/[Stage26]ApplicationConfirmCommand'
import ApplicationAssessmentStartDate from './ApplicationConfirmStages/[Stage30]ApplicationAssessmentStartDate'
import ApplicationAssessmentEnd from './ApplicationConfirmStages/[Stage31]ApplicationAssessmentEnd'
import ApplicationCommissionResult from './ApplicationConfirmStages/[Stage34]ApplicationCommission'
import ApplicationReestr from './ApplicationConfirmStages/[Stage37]ApplicationReestr'
import ApplicationPostAccred from './ApplicationConfirmStages/[Stage38]ApplicationPostAccred'
import ConfirmStageChoiceExpertsPlaceConfirm from './ApplicationConfirmStages/[Stage21]ExpertsPlaceConfirm'
import ConfirmPlanNotice from './ApplicationConfirmStages/[Stage23]PlanNotice'
import ConfirmCommand from './ApplicationConfirmStages/[Stage27]Command'
import ConfirmAudit from './ApplicationConfirmStages/[Stage32]ConfirmAudit'

const ApplicationConfirm = props => {
  const { onSubmit, stage,
    expertList, expertModal,
    placeModal, application,
    initialValues, expertPlaceList,
    documentModal, documentList,
    onDeleteDocument,
    travelDataModal,
    onDeleteTravelData,
    travelDataList,
  } = props
  switch (stage) {
  case 'stage_1':
    return (
      <ApplicationConfirmDefault text={'Ro’yhatdan o’tkaziladi'} onSubmit={onSubmit} />
    )
  case 'stage_2':
    return (
      <ConfirmStageTwoChoiceExecutor onSubmit={onSubmit} />
    )
  case 'stage_4':
    return (
      <ConfirmStageContract onSubmit={onSubmit} />
    )
  case 'stage_5':
    return (
      <ConfirmStageAccounting application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Hisobchiga junatish'} />
    )
  case 'stage_6':
    return (
      <ConfirmStageAccounting application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Rahnariyatga junatish'} />
    )
  case 'stage_7':
    return (
      <ConfirmStageAccounting application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Shartnoma ro’yhatdan o’tkaziladi'} />
    )
  case 'stage_9':
    return (
      <ConfirmStageAccounting application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Tasdiqlash'} />
    )
  case 'stage_10':
    return (
      <ConfirmStageChoiceExperts onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertList} application={application} />
    )
  case 'stage_11':
    return <ConfirmStageChoiceExpertsConfirm onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertList} initialValues={initialValues} />
  case 'stage_12':
    return <ConfirmStageChoiceExpertsConfirm onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertList} initialValues={initialValues} />
  case 'stage_13':
    return <ConfirmStageChoiceExpertsConfirm onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertList} initialValues={initialValues} />
  case 'stage_14':
    return (
      <ConfirmStageContractPlace travelDataModal={travelDataModal} onDeleteTravelData={onDeleteTravelData} travelDataList={travelDataList} onSubmit={onSubmit}  />
    )
  case 'stage_15':
    return (
      <ConfirmStageAccountingContractPlace application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Hisobchiga  junatish'} />
    )
  case 'stage_16':
    return (
      <ConfirmStageAccountingContractPlace application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Rahnariyatga  junatish'} />
    )
  case 'stage_17':
    return (
      <ConfirmStageAccountingContractPlace application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Tasdiqlash'} />
    )
  case 'stage_19':
    return (
      <ConfirmStageAccountingContractPlace application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Tasdiqlash'} />
    )
  case 'stage_20':
    return (
      <ConfirmStageChoiceExpertsPlace onSubmit={onSubmit} serviceModal={placeModal} serviceList={expertPlaceList} />
    )
  case 'stage_21':
    return <ConfirmStageChoiceExpertsPlaceConfirm onSubmit={onSubmit} serviceModal={expertModal} initialValues={initialValues} />
  case 'stage_22':
    return <ConfirmStageChoiceExpertsPlaceConfirm onSubmit={onSubmit} serviceModal={expertModal} initialValues={initialValues} />
  case 'stage_23':
    return <ConfirmPlanNotice onSubmit={onSubmit} text={'Tasdiqlash'} initialValues={initialValues} />
  case 'stage_24':
    return <ConfirmPlanNotice onSubmit={onSubmit} text={'Junatish'} initialValues={initialValues} />
  case 'stage_26':
    return (
      <ApplicationConfirmCommand onSubmit={onSubmit} text={'Baholash uchun buyruq loyihasi qilinadi'} />
    )
  case 'stage_27':
    return (
      <ConfirmCommand onSubmit={onSubmit} initialValues={initialValues} text={'Junatish'} />
    )
  case 'stage_28':
    return (
      <ConfirmCommand onSubmit={onSubmit} initialValues={initialValues} text={'Imzolash'} />
    )
  case 'stage_30':
    return (
      <ApplicationAssessmentStartDate onSubmit={onSubmit} text={'Audit boshlanishi tasdiqlash'} />
    )
  case 'stage_31':
    return (
      <ApplicationAssessmentEnd onSubmit={onSubmit} text={'Autditni yakunlash'} documentModal={documentModal} documentList={documentList} onDeleteDocument={onDeleteDocument} />
    )
  case 'stage_32':
    return (
      <ConfirmAudit onSubmit={onSubmit} initialValues={initialValues} text={'Tasdiqlash'} />
    )
  case 'stage_35':
    return (
      <ApplicationCommissionResult initialValues={initialValues} onSubmit={onSubmit} text={'Tasdiqlash'} />
    )
  case 'stage_36':
    return (
      <ApplicationCommissionResult initialValues={initialValues} onSubmit={onSubmit} text={'Tasdiqlash'} />
    )
  case 'stage_37':
    return (
      <ApplicationReestr onSubmit={onSubmit} text={'Reesrda ro’yhatga olish'} />
    )
  case 'stage_38':
    return (
      <ApplicationPostAccred onSubmit={onSubmit} text={'Rasmiylashtirish'} />
    )

  default:
    return <ApplicationConfirmDefault text={'Tasdiqlash'} onSubmit={onSubmit} />
  }
}

export default ApplicationConfirm
