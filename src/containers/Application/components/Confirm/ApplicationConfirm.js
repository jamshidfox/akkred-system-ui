import React from 'react'
import ApplicationConfirmDefault from './ApplicationConfirmStages/ApplicationConfirmDefault'
import ConfirmStageTwoChoiceExecutor from './ApplicationConfirmStages/[Stage2]Executor'
import ConfirmStageTwoChoiceExecutors from './ApplicationConfirmStages/[Stage5]Executors'
import ConfirmStageContract from './ApplicationConfirmStages/[Stage6]Contract'
import ConfirmStageAccounting from './ApplicationConfirmStages/[Stage7]Accounting'
import ConfirmStageSendClientContract from './ApplicationConfirmStages/[Stage8]ContractSend'
import ConfirmStageChoiceExperts from './ApplicationConfirmStages/[Stage10]Experts'

const ApplicationConfirm = props => {
  const { onSubmit } = props
  const stage = '1'
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
      <ConfirmStageAccounting onSubmit={onSubmit} />
    )
  case 'stage_6':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} />
    )
  case 'stage_8':
    return (
      <ConfirmStageSendClientContract onSubmit={onSubmit} />
    )
  case 'stage_10':
    return (
      <ConfirmStageChoiceExperts onSubmit={onSubmit} />
    )

  default:
    return <ApplicationConfirmDefault onSubmit={onSubmit} />
  }
}

export default ApplicationConfirm
