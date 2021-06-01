import React from 'react'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import Perms from '../../../components/Perms/Perms'
import * as ROUTES from '../../../constants/routes'
import { MediumButton, SecondarySmallButton } from '../../../components/UI/Buttons'
import { stepName } from '../../../constants/backend'

const caseManager = 'caseManager'
const executor = 'executor'
const expertHead = 'expertHead'
const headDepartment = 'headDepartment'
const headHr = 'headHr'
const accountant = 'accountant'
const director = 'director'

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

const PermissionButton = props => {
  const { stage, id, onClick } = props
  var n = id.toString()
  var executorPersonal = 'executor_' + n
  var expertHeadPersonal = 'audit_' + n
  var listExecutor = [executorPersonal, executor]
  var listExpertHead = [expertHeadPersonal, expertHead]
  const stepText = stepName.object[stage]

  switch (stage) {
  case 'stage_1':
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
  case 'stage_2':
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
  case 'stage_3':
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
  case 'stage_4':
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
  case 'stage_5':
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

  case 'stage_6':
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

  case 'stage_7':
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

  case 'stage_9':
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

  case 'stage_10':
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

  case 'stage_11':
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
  case 'stage_12':
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

  case 'stage_13':
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

  case 'stage_14':
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

  case 'stage_15':
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

  case 'stage_16':
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

  case 'stage_17':
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

  case 'stage_19':
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

  case 'stage_20':
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
  case 'stage_21':
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
  case 'stage_22':
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
  case 'stage_23':
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

  case 'stage_24':
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

  case 'stage_26':
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
  case 'stage_27':
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

  case 'stage_28':
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
  case 'stage_29':
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
  case 'stage_30':
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
  case 'stage_31':
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
  case 'stage_32':
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

  case 'stage_33':
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
  case 'stage_35':
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

  case 'stage_36':
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

  case 'stage_37':
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

  case 'stage_38':
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

  case 'stage_39':
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

  case 'stage_41':
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

  default:
    return (
      <Perms
        perms={['director']}
      />
    )
  }
}

export default PermissionButton
