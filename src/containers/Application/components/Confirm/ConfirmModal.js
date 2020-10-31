import React from 'react'
import ConfirmStage from './ConfirmStages/ConfirmStage'
import ConfirmStageTwoChoiceExecutor from './ConfirmStages/[Stage2]ConfirmStageExecutor'
import ConfirmStageTwoChoiceExecutors from './ConfirmStages/[Stage5]ConfirmStageExecutors'
import ConfirmStageExecutor from './ConfirmStages/[Stage6]ConfirmStageExecutor'
import ConfirmStageAccounting from './ConfirmStages/[Stage7]ConfirmStageAccounting'
import ConfirmStageAccountingConfirm from './ConfirmStages/[Stage8]ConfirmStageAccountingConfirm'
import ConfirmStageSendClientInvoice from './ConfirmStages/[Stage8]ConfirmInvoiceSend.js'
import ConfirmStageChoiceExperts from './ConfirmStages/[Stage10]ConfirmStageExperts'
import ConfirmStageChoiceExpertsDocuments from './ConfirmStages/[Stage12]ConfirmStageExpertsDocuments'
import ConfirmStageChoiceExpertsDocument from './ConfirmStages/[Stage17]ConfirmStageExpertsDocuments'

const ConfirmDialog = ({ onClose, open, onSubmit, stage }) => {
  switch (stage) {
  // case 'stage_2':
  //   return (
  //     <ConfirmStageTwo onClose={onClose} onSubmit={onSubmit} open={open} />
  //   )
  case 'stage_2':
    return (
      <ConfirmStageTwoChoiceExecutor onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_3':
    return (
      <ConfirmStageTwoChoiceExecutors onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_4':
    return (
      <ConfirmStageExecutor onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_5':
    return (
      <ConfirmStageAccounting onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_6':
    return (
      <ConfirmStageAccountingConfirm onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_8':
    return (
      <ConfirmStageSendClientInvoice onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_10':
    return (
      <ConfirmStageChoiceExperts onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_16':
    return (
      <ConfirmStageChoiceExpertsDocuments onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_18':
    return (
      <ConfirmStageChoiceExpertsDocument onClose={onClose} onSubmit={onSubmit} open={open} />
    )

  default:
    return <ConfirmStage onClose={onClose} onSubmit={onSubmit} open={open} />
  }
}

export default ConfirmDialog
