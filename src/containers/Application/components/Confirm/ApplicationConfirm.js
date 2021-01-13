import React from 'react'
import ApplicationConfirmDefault from './ApplicationConfirmStages/ApplicationConfirmDefault'
import ConfirmStageTwoChoiceExecutor from './ApplicationConfirmStages/[Stage2]Executor'
import ConfirmStageTwoChoiceExecutors from './ApplicationConfirmStages/[Stage5]Executors'
import ConfirmStageContract from './ApplicationConfirmStages/[Stage6]Contract'
import ConfirmStageAccounting from './ApplicationConfirmStages/[Stage7]Accounting'
import ConfirmStageSendClientContract from './ApplicationConfirmStages/[Stage8]ContractSend'
import ConfirmStageChoiceExperts from './ApplicationConfirmStages/[Stage10]Experts'
import ConfirmStageContractPlace from './ApplicationConfirmStages/[Stage14]ContractPlace'
import ConfirmStageChoiceExpertsPlace from './ApplicationConfirmStages/[Stage14]ExpertsPlace'

const ApplicationConfirm = props => {
  const { onSubmit, stage, serviceList, serviceModal, placeModal, placeList,application } = props
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
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Bugalterga junatish'} />
    )
  case 'stage_6':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Bugalterga junatish'} />
    )
  case 'stage_8':
    return (
      <ConfirmStageSendClientContract onSubmit={onSubmit} />
    )
  case 'stage_10':
    return (
      <ConfirmStageChoiceExperts onSubmit={onSubmit} serviceModal={serviceModal} serviceList={serviceList} application={application} />
    )
  case 'stage_14':
    return (
      <ConfirmStageContractPlace onSubmit={onSubmit} />
    )
  case 'stage_15':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Bo’lim boshlig’i  junatish'} />
    )
  case 'stage_16':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Hisobchi  junatish'} />
    )
  case 'stage_17':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Rahbariyatga  junatish'} />
    )
  case 'stage_18':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Buyurtmachiga  junatish'} />
    )
  case 'stage_20':
    return (
      <ConfirmStageChoiceExpertsPlace onSubmit={onSubmit} serviceModal={placeModal} serviceList={placeList} />
    )
  case 'stage_21':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Departament junatish'} />
    )
  case 'stage_22':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Bo’lim boshlig’i  junatish'} />
    )
  case 'stage_23':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Kadrlar bo’limi  junatish'} />
    )
  case 'stage_24':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Rahbariyat junatish'} />
    )
  case 'stage_25':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Buyurtmachiga junatish'} />
    )
  case 'stage_27':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Baholash uchun buyruq loyihasi qilinadi'} />
    )
  case 'stage_28':
    return (
      <ConfirmStageAccounting onSubmit={onSubmit} text={'Buyruq va reja imzolanadi '} />
    )
  case 'stage_29':
    return (
      <ConfirmStageChoiceExperts onSubmit={onSubmit} serviceModal={serviceModal} serviceList={serviceList} />
    )

  default:
    return <ApplicationConfirmDefault onSubmit={onSubmit} />
  }
}

export default ApplicationConfirm
