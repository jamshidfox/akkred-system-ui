import React from 'react'
import ApplicationConfirmDefault from './ApplicationConfirmStages/ApplicationConfirmDefault'
import ConfirmStageTwoChoiceExecutor from './ApplicationConfirmStages/[Stage2]Executor'
import ConfirmStageContract from './ApplicationConfirmStages/[Stage6]Contract'
import ConfirmStageAccounting from './ApplicationConfirmStages/[Stage7]Accounting'
import ConfirmStageContractPlace from './ApplicationConfirmStages/[Stage14]ContractPlace'
import ConfirmStageChoiceExpertsPlace from './ApplicationConfirmStages/[Stage14]ExpertsPlace'
import ConfirmStageAccountingContractPlace from './ApplicationConfirmStages/[Stage15]Accounting'
import ApplicationConfirmCommand from './ApplicationConfirmStages/[Stage26]ApplicationConfirmCommand'
import ApplicationAssessmentStartDate from './ApplicationConfirmStages/[Stage30]ApplicationAssessmentStartDate'
import ApplicationAssessmentEnd from './ApplicationConfirmStages/[Stage31]ApplicationAssessmentEnd'
import ApplicationCommissionResult from './ApplicationConfirmStages/[Stage34]ApplicationCommission'
import ApplicationReestr from './ApplicationConfirmStages/[Stage37]ApplicationReestr'
import ApplicationPostAccred from './ApplicationConfirmStages/[Stage38]ApplicationPostAccred'
import ConfirmStageChoiceExpertsPlaceConfirm from './ApplicationConfirmStages/[Stage21]ExpertsPlaceConfirm'
import ConfirmCommand from './ApplicationConfirmStages/[Stage27]Command'
import ConfirmAudit from './ApplicationConfirmStages/[Stage32]ConfirmAudit'
import ConfirmStageChoiceExpertHrConfirm from './ApplicationConfirmStages/[Stage12]ExpertsConfirm'
import ConfirmStageChoiceExpertsHrPlaceConfirm from './ApplicationConfirmStages/[Stage22]ExpertsPlaceConfirm'
import ConfirmStageContractSign from './ApplicationConfirmStages/[Stage7]ContractSign'
import ConfirmStageAccountingContractAudit from './ApplicationConfirmStages/[Stage15]ContractAuditSign'
import ConfirmStageChoiceExpertsSign from './ApplicationConfirmStages/[Stage23]ExpertsAuditSign'
import OrderSign from './ApplicationConfirmStages/[Stage22]OrderSign'
import CommissionResultSign from './ApplicationConfirmStages/[Stage36]CommissionResultSign'
import PostAccredSign from './ApplicationConfirmStages/[Stage39]ApplicationPostAccredSign'
import NewCreateAnalysisApplication from './ApplicationConfirmStages/NewCreateAnalysisApplication'
import NewFillUpAnalysisApplication from './ApplicationConfirmStages/NewFillUpAnalysisApplication'
import ExpertiseChoiceExperts from './ApplicationConfirmStages/ExpertiseChoiceExperts'
import ExpertiseConfirmExpertsDepartment from './ApplicationConfirmStages/ExpertiseConfirmExpertsDepartment'
import ExpertiseConfirmExpertsHr from './ApplicationConfirmStages/ExpertiseConfirmExpertsHr'
import ReAuditEndDeadline from './ApplicationConfirmStages/ReAuditEndDeadline'
import ReAuditCreateOrder from './ApplicationConfirmStages/ReAuditCreateOrder'
import ReAuditAcceptOrder from './ApplicationConfirmStages/ReAuditAcceptOrder'
import ReAuditSignOrderCenter from './ApplicationConfirmStages/ReAuditSignOrderCenter'
import ReAuditEndAudit from './ApplicationConfirmStages/ReAuditEndAudit'

const ApplicationConfirm = props => {
  const { onSubmit, stage,
    expertList,
    expertModal,
    placeModal,
    onDeletePlace,
    application,
    initialValues,
    expertPlaceList,
    documentModal,
    documentList,
    onDeleteDocument,
    travelDataModal,
    onDeleteTravelData,
    travelDataList,
    onSuccess,
    onDeleteExpert,
    onUpdatePlace
  } = props
  switch (stage) {
  case 'new_register_application':
    return (
      <ApplicationConfirmDefault text={'Ro’yhatdan o’tkaziladi'} onSubmit={onSubmit} />
    )
  case 'new_create_analysis_application':
    return (
      <NewCreateAnalysisApplication onSubmit={onSubmit} />
    )
  case 'new_choice_executor':
    return (
      <ConfirmStageTwoChoiceExecutor onSubmit={onSubmit} />
    )
  case 'new_fill_up_analysis_application':
    return (
      <NewFillUpAnalysisApplication onSubmit={onSubmit} initialValues={initialValues} />
    )
  case 'new_create_contract':
    return (
      <ConfirmStageContract onSubmit={onSubmit} />
    )
  case 'new_confirm_by_department':
    return (
      <ConfirmStageAccounting application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Hisobchiga junatish'} />
    )
  case 'new_confirm_by_account':
    return (
      <ConfirmStageAccounting application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Rahnariyatga junatish'} />
    )
  case 'new_sign_by_center':
    return (
      <ConfirmStageContractSign application={application} initialValues={initialValues} onSuccess={onSuccess} text={'Shartnoma ro’yhatdan o’tkaziladi'} />
    )
  case 'new_confirm_payment':
    return (
      <ConfirmStageAccounting application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Tasdiqlash'} />
    )
  case 'expertise_choice_experts':
    return (
      <ExpertiseChoiceExperts onSubmit={onSubmit} serviceModal={expertModal} serviceList={expertList} application={application} onDeleteExpert={onDeleteExpert} initialValues={initialValues} />
    )
  case 'expertise_confirm_experts_department':
    return <ExpertiseConfirmExpertsDepartment onSubmit={onSubmit} initialValues={initialValues} />
  case 'expertise_confirm_experts_hr':
    return <ExpertiseConfirmExpertsHr onSubmit={onSubmit} initialValues={initialValues} />
  case 'expertise_confirm_experts_center':
    return <ConfirmStageChoiceExpertHrConfirm onSuccess={onSuccess} initialValues={initialValues} />
  case 'expertise_create_contract_audit':
    return (
      <ConfirmStageContractPlace travelDataModal={travelDataModal} onDeleteTravelData={onDeleteTravelData} travelDataList={travelDataList} onSubmit={onSubmit} initialValues={initialValues} />
    )
  case 'expertise_confirm_contract_audit_department':
    return (
      <ConfirmStageAccountingContractPlace application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Hisobchiga  junatish'} />
    )
  case 'expertise_confirm_contract_audit_account':
    return (
      <ConfirmStageAccountingContractPlace application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Rahnariyatga  junatish'} />
    )
  case 'expertise_sign_contract_audit_center':
    return (
      <ConfirmStageAccountingContractAudit initialValues={initialValues} onSuccess={onSuccess} text={'Tasdiqlash'} />
    )
  case 'expertise_confirm_payment_contract_audit':
    return (
      <ConfirmStageAccountingContractPlace application={application} initialValues={initialValues} onSubmit={onSubmit} text={'Tasdiqlash'} />
    )
  case 'audit_choice_experts':
    return (
      <ConfirmStageChoiceExpertsPlace onSubmit={onSubmit} onDeletePlace={onDeletePlace} serviceModal={placeModal} onUpdatePlace={onUpdatePlace} serviceList={expertPlaceList} initialValues={initialValues} />
    )
  case 'audit_confirm_experts_department':
    return <ConfirmStageChoiceExpertsPlaceConfirm onSubmit={onSubmit} serviceModal={expertModal} initialValues={initialValues} />
  case 'audit_confirm_experts_hr':
    return <ConfirmStageChoiceExpertsHrPlaceConfirm onSubmit={onSubmit} serviceModal={expertModal} initialValues={initialValues} />
  case 'audit_sign_plan_center':
    return <ConfirmStageChoiceExpertsSign onSuccess={onSuccess} serviceModal={expertModal} initialValues={initialValues} />
  case 'audit_create_order':
    return (
      <ApplicationConfirmCommand onSubmit={onSubmit} text={'Baholash uchun buyruq loyihasi qilinadi'} />
    )
  case 'audit_accept_order':
    return (
      <ConfirmCommand onSubmit={onSubmit} initialValues={initialValues} text={'Junatish'} />
    )
  case 'audit_sign_order_center':
    return (
      <OrderSign onSuccess={onSuccess} initialValues={initialValues} />
    )
  case 'audit_start_audit':
    return (
      <ApplicationAssessmentStartDate onSubmit={onSubmit} text={'Audit boshlanishi tasdiqlash'} />
    )
  case 'audit_end_audit':
    return (
      <ApplicationAssessmentEnd onSubmit={onSubmit} text={'Autditni yakunlash'} documentModal={documentModal} documentList={documentList} onDeleteDocument={onDeleteDocument} initialValues={initialValues} />
    )
  case 'audit_accept_audit_result':
    return (
      <ConfirmAudit onSubmit={onSubmit} initialValues={initialValues} text={'Tasdiqlash'} />
    )
  case 'commission_create_protocol':
    return (
      <ApplicationCommissionResult initialValues={initialValues} onSubmit={onSubmit} text={'Tasdiqlash'} />
    )
  case 'commission_sign_protocol_center':
    return (
      <CommissionResultSign initialValues={initialValues} onSuccess={onSuccess} text={'Tasdiqlash'} />
    )
  case 'commission_register_create':
    return (
      <ApplicationReestr onSubmit={onSubmit} text={'Reesrda ro’yhatga olish'} />
    )
  case 'post_create_post':
    return (
      <ApplicationPostAccred onSubmit={onSubmit} text={'Rasmiylashtirish'} />
    )
  case 'post_sign_post_center':
    return (
      <PostAccredSign onSuccess={onSuccess} initialValues={initialValues} />
    )
  case 're_audit_end_deadline':
    return (
      <ReAuditEndDeadline onSubmit={onSubmit} initialValues={initialValues} />
    )
  case 're_audit_create_order':
    return (
      <ReAuditCreateOrder onSubmit={onSubmit} initialValues={initialValues} />
    )
  case 're_audit_accept_order':
    return (
      <ReAuditAcceptOrder onSubmit={onSubmit} initialValues={initialValues} />
    )
  case 're_audit_sign_order_center':
    return (
      <ReAuditSignOrderCenter onSuccess={onSuccess} initialValues={initialValues} />
    )
  case 're_audit_end_audit':
    return (
      <ReAuditEndAudit onSubmit={onSubmit} initialValues={initialValues} />
    )
  case 're_audit_accept_audit_result':
    return (
      <ConfirmAudit onSubmit={onSubmit} initialValues={initialValues} text={'Tasdiqlash'} />
    )

  default:
    return <ApplicationConfirmDefault text={'Tasdiqlash'} onSubmit={onSubmit} />
  }
}

export default ApplicationConfirm
