import React from 'react'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import Perms from '../../../components/Perms/Perms'
import * as ROUTES from '../../../constants/routes'
import { MediumButton, SecondarySmallButton } from '../../../components/UI/Buttons'
import { stepName, stageName } from '../../../constants/backend'

const caseManager = 'caseManager'
const executor = 'executor'
const expertHead = 'expertHead'
const headDepartment = 'headDepartment'
const headHr = 'headHr'
const accountant = 'accountant'
const director = 'director'
const secretary = 'secretary'

const AddBtn = styled(SecondarySmallButton)`
  height: 36px;
  font-size: 14px;
`

const LinkBtn = styled(Link)`
  padding-right: 20px

`

const WrapperBtn = styled('div')`
  display: flex

`

const WaitButton = styled(MediumButton)`
  background: #668edd;
  pointer-events: none
`

const PermissionButton = props => {
  const { stage, id, onClick } = props
  var n = id.toString()
  var executorPersonal = 'executor_' + n
  var expertHeadPersonal = 'audit_' + n
  var listExecutor = [executorPersonal, executor]
  var listExpertHead = [expertHeadPersonal, expertHead]
  const stepText = stageName.object[stage]

  switch (stage) {
  case 'new_register_application':
    return (
      <Perms
        perms={[caseManager]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'new_create_analysis_application':
    return (
      <Perms
        perms={[caseManager]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'new_choice_executor':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>

      </Perms>
    )
  case 'new_confirm_executor':
    return (
      <Perms
        perms={[director]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>

      </Perms>
    )

  case 'new_fill_up_analysis_application':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'new_create_contract':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'new_confirm_by_department':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'new_confirm_by_account':
    return (
      <Perms
        perms={[accountant]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'new_sign_by_center':
    return (
      <Perms
        perms={[director]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'new_confirm_payment':
    return (
      <Perms
        perms={[accountant]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'expertise_choice_experts':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'expertise_confirm_experts_department':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'expertise_confirm_experts_hr':
    return (
      <Perms
        perms={[headHr]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'expertise_request_to_experts':
    return (
      <WaitButton>
        Ekspertlaga so`rov
      </WaitButton>
    )

  case 'expertise_confirm_experts_center':
    return (
      <Perms
        perms={[director]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'expertise_sign_experts_client':
    return (
      <WaitButton>
        Buyurtmachi
      </WaitButton>
    )

  case 'expertise_expertise_start':
    return (
      <WaitButton>
        Ekpertiza
      </WaitButton>
    )

  case 'expertise_create_contract_audit':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'expertise_confirm_contract_audit_department':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'expertise_confirm_contract_audit_account':
    return (
      <Perms
        perms={[accountant]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'expertise_sign_contract_audit_center':
    return (
      <Perms
        perms={[director]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'expertise_confirm_payment_contract_audit':
    return (
      <Perms
        perms={[accountant]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'audit_choice_experts':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'audit_confirm_experts_department':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'audit_confirm_experts_hr':
    return (
      <Perms
        perms={[headHr]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'audit_request_to_experts':
    return (
      <WaitButton>
        So'rov
      </WaitButton>
    )
  case 'audit_sign_plan_center':
    return (
      <Perms
        perms={[director]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'audit_send_plan':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'audit_create_order':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'audit_accept_order':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'audit_sign_order_center':
    return (
      <Perms
        perms={[director]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'audit_approved_audit':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'audit_start_audit':
    return (
      <Perms
        perms={listExpertHead}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'audit_process_audit':
    return (
      <WaitButton>
        Baholash
      </WaitButton>
    )
  case 'audit_end_audit':
    return (
      <Perms
        perms={listExpertHead}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
          <AddBtn onClick={onClick} >Rad Etish</AddBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'audit_accept_audit_result':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'audit_create_analysis':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton > {stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'commission_send_participants':
    return (
      <Perms
        perms={[secretary]}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 'commission_create_protocol':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>

      </Perms>
    )

  case 'commission_sign_protocol_center':
    return (
      <Perms
        perms={['boss']}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'commission_register_create':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'post_create_post':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'post_sign_post_center':
    return (
      <Perms
        perms={['director']}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 'finish':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 're_audit_start_deadline':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 're_audit_create_plan':
    return (
      <WaitButton>
        {stepText}
      </WaitButton>
    )

  case 're_audit_create_proof_plan':
    return (
      <WaitButton>
        {stepText}
      </WaitButton>
    )
  case 're_audit_end_deadline':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 're_audit_create_order':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 're_audit_accept_order':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 're_audit_choice_experts':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 're_audit_sign_order_center':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 're_audit_start_audit':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 're_audit_end_audit':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )
  case 're_audit_accept_audit_result':
    return (
      <Perms
        perms={listExecutor}
      >
        <WrapperBtn>
          <LinkBtn
            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <MediumButton >{stepText}</MediumButton>
          </LinkBtn>
        </WrapperBtn>
      </Perms>
    )

  case 're_audit_process_audit':
    return (
      <WaitButton>
        O'rganish
      </WaitButton>
    )
  default:
    return (
      <Perms
        perms={['director']}
      />
    )
  }
}

export default PermissionButton
