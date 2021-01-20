import React from 'react'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import Perms from '../../../components/Perms/Perms'
import * as ROUTES from '../../../constants/routes'
import { MediumButton } from '../../../components/UI/Buttons'

const PermissionButton = props => {
  const { stage, id } = props
  switch (stage) {
  case 'stage_1':
    return (
      <Perms
        perms={['accept']}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Ro’yhatdan o’tkaziladi </MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_3':
    return (
      <Perms
        perms={['accept']}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Ro’yhatdan o’tkaziladi </MediumButton>
          </div>
        </Link>

      </Perms>
    )

  default:
    return <div />
  }
}

export default PermissionButton
