import React from 'react'
import ConfirmStageOne from './ConfirmStages/ConfirmStageOne'
import ConfirmStageTwo from './ConfirmStages/ConfirmStageTwo'
import ConfirmStageThree from './ConfirmStages/ConfirmStageThree'

const ConfirmDialog = ({ onClose, open, onSubmit, stage }) => {
  switch (stage) {
  case 'stage':
    return (
      <ConfirmStageOne onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_':
    return (
      <ConfirmStageTwo onClose={onClose} onSubmit={onSubmit} open={open} />
    )
  case 'stage_1':
    return (
      <ConfirmStageThree onClose={onClose} onSubmit={onSubmit} open={open} />
    )

  default:
    return <div />
  }
}

export default ConfirmDialog
