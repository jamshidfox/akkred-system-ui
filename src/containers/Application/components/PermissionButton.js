import React from 'react'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { MediumButton } from '../../../components/UI/Buttons'
import * as ROUTES from '../../../constants/routes'

const PermissionButton = props => {
  const { stage, id } = props

  const waitModalOpen = () => {
  }

  return (

    <div>
      {stage === 'stage_9' || stage === 'stage_19' || stage === 'stage_26'
        ? (<div >
          <MediumButton style={{
            background: '#2541ff'
          }} onClick={waitModalOpen()}>Wait</MediumButton>
        </div>)
        : (<div style={{
          display: 'flex'

        }}>

          {id && (
            <Link

              to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
              <div style={{
                paddingRight: '20px'

              }} >
                <MediumButton >Подтвердить</MediumButton>
              </div>
            </Link>

          )}

          <div >
            <MediumButton style={{
              background: '#ff3454'
            }} >Отклонить</MediumButton>
          </div>

        </div>)
      }
    </div>

  )
}

export default PermissionButton
