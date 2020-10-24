import React from 'react'
import ConfirmStage from './ConfirmStages/ConfirmStage'
import ConfirmStageTwo from './ConfirmStages/ConfirmStageTwo'
import ConfirmStageThree from './ConfirmStages/ConfirmStageThree'
import ConfirmStageTwoChoiceExecutor from './ConfirmStages/[Stage2]ConfirmStageExecutor'
import ConfirmStageTwoChoiceExecutors from './ConfirmStages/[Stage5]ConfirmStageExecutors'
import ConfirmStageExecutor from './ConfirmStages/[Stage6]ConfirmStageExecutor'
import ConfirmStageAccounting from './ConfirmStages/[Stage7]ConfirmStageAccounting'
import ConfirmStageAccountingConfirm from './ConfirmStages/[Stage8]ConfirmStageAccountingConfirm'

const ConfirmDialog = ({ onClose, open, onSubmit, stage }) => {
  switch (stage) {
  case 'stage_2':
    return (
      <ConfirmStageTwo onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_3':
    return (
      <ConfirmStageTwoChoiceExecutor onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_5':
    return (
      <ConfirmStageTwoChoiceExecutors onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_6':
    return (
      <ConfirmStageExecutor onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_7':
    return (
      <ConfirmStageAccounting onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_8':
    return (
      <ConfirmStageAccountingConfirm onClose={onClose} onSubmit={onSubmit} open={open} />
    )

  default:
    return <ConfirmStage onClose={onClose} onSubmit={onSubmit} open={open} />
  }
}

export default ConfirmDialog
