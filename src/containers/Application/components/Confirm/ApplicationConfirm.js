import React from 'react'
import ApplicationConfirmDefault from './ApplicationConfirmStages/ApplicationConfirmDefault'
import ConfirmStageTwoChoiceExecutor from './ApplicationConfirmStages/[Stage2]Executor'
import ConfirmStageTwoChoiceExecutors from './ApplicationConfirmStages/[Stage5]Executors'
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
import ApplicationNoticeClient from './ApplicationConfirmStages/[Stage36]ApplicationNoticeClient'
import ApplicationReestr from './ApplicationConfirmStages/[Stage37]ApplicationReestr'
import ApplicationPostAccred from './ApplicationConfirmStages/[Stage38]ApplicationPostAccred'

const ApplicationConfirm = props => {
  const { onSubmit, stage, expertList, expertModal, placeModal, placeList, application, initialValues, expertPlaceList } = props
  switch (stage) {
  case 'stage_2':
    return (
      <ConfirmStageTwoChoiceExecutor onSubmit={onSubmit} />
    )
  case 'stage_3':
    return (
      <ConfirmStageTwoChoiceExecutors onSubmit={onSubmit} />
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
  case 'stage_8':
    return (
      <ConfirmStageAccounting application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Buyurtmachiga yuvorish'} />
    )
  case 'stage_10':
    return (
      <ConfirmStageChoiceExperts onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertList} application={application} />
    )
  case 'stage_11':
    return <ConfirmStageChoiceExpertsConfirm onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertList} application={application} />
  case 'stage_12':
    return <ConfirmStageChoiceExpertsConfirm onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertList} application={application} />
  case 'stage_13':
    return <ConfirmStageChoiceExpertsConfirm onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertList} application={application} />
  case 'stage_14':
    return (
      <ConfirmStageContractPlace onSubmit={onSubmit} />
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
      <ConfirmStageAccountingContractPlace application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Shartnoma ro’yhatdan o’tkazish'} />
    )
  case 'stage_18':
    return (
      <ConfirmStageAccountingContractPlace application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Buyurtmachiga yuvorish'} />
    )
  case 'stage_20':
    return (
      <ConfirmStageChoiceExpertsPlace onSubmit={onSubmit} serviceModal={placeModal} serviceList={placeList} />
    )
  case 'stage_21':
    return <ConfirmStageChoiceExpertsConfirm onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertPlaceList} application={application} />
  case 'stage_22':
    return <ConfirmStageChoiceExpertsConfirm onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertPlaceList} application={application} />
  case 'stage_26':
    return (
      <ApplicationConfirmCommand onSubmit={onSubmit} text={'Baholash uchun buyruq loyihasi qilinadi'} />
    )
  case 'stage_30':
    return (
      <ApplicationAssessmentStartDate onSubmit={onSubmit} text={'Audit boshlanishi tasdiqlash'} />
    )
  case 'stage_31':
    return (
      <ApplicationAssessmentEnd onSubmit={onSubmit} text={'Autditni yakunlash'} />
    )
  case 'stage_34':
    return (
      <ApplicationCommissionResult initialValues={initialValues} onSubmit={onSubmit} text={'Akrreditatsiya qilish'} />
    )
  case 'stage_35':
    return (
      <ApplicationCommissionResult initialValues={initialValues} onSubmit={onSubmit} text={'Maqulash'} />
    )
  case 'stage_36':
    return (
      <ApplicationNoticeClient onSubmit={onSubmit} text={'Buyurtmachiga xabarnoma jo’natish'} />
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
    return <ApplicationConfirmDefault onSubmit={onSubmit} />
  }
}

export default ApplicationConfirm
