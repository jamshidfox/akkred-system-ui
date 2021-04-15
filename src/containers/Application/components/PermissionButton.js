import React from 'react'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import Perms from '../../../components/Perms/Perms'
import * as ROUTES from '../../../constants/routes'
import { MediumButton } from '../../../components/UI/Buttons'

const caseManager = 'caseManager'
const executor = 'executor'
const expertHead = 'expertHead'
const headDepartment = 'headDepartment'
const headHr = 'headHr'
const accountant = 'accountant'
const director = 'director'

const PermissionButton = props => {
  const { stage, id } = props
  switch (stage) {
  case 'stage_1':
    return (
      <Perms
        perms={[caseManager]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Ro’yhatdan o’tkaziladi</MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_2':
    return (
      <Perms
        perms={[director]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Ijrochini Tanlash </MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_3':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Ijrochilani Tanlash </MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_4':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Shartnoma rasmiylashtirish</MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_5':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Hisobchiga yuvorish </MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_6':
    return (
      <Perms
        perms={[accountant]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Rahnariyatga junatish</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_7':
    return (
      <Perms
        perms={[director]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Shartnoma ro’yhatdan o’tkaziladi </MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_8':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Buyurtmachiga yuvorish</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_10':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Ekspertiza uchun ekspert yoki ekspertlar bazadan tanlanadi</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_11':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Ekspertlar guruhini tasdiqlash(Kadrlar bo’limi bilan kelishish)</MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_12':
    return (
      <Perms
        perms={[headHr]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Ekspertlar guruhini tasdiqlash(Rahbariyatga yuvorish)</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_13':
    return (
      <Perms
        perms={[director]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Ekspertlar guruhini tasdiqlash</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_14':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Umumlashtirish va Shartnoma rasmilashtirish</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_15':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Umumlashtirish va Shartnoma rasmilashtirish (Hisobchiga yuvorish)</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_16':
    return (
      <Perms
        perms={[accountant]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Umumlashtirish va Shartnoma rasmilashtirish (Rahbariyatga yuvorish)</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_17':
    return (
      <Perms
        perms={[director]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Shartnoma ro’yhatdan o’tkazish</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_18':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Buyurtmachiga yuvorish</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_20':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Baholashda ishtirok etgan ekspertlar bazadan tanlanadi </MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_21':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Kadrlar bo’limi bilan kelishish</MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_22':
    return (
      <Perms
        perms={[headHr]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Rahbariyatga jonatish</MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_23':
    return (
      <Perms
        perms={[director]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton >Reja va xabarnoma tasqidlanadi</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_24':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton > Buyurtmachiga junatish</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_26':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton>Baholash uchun buyruq loyihasi qilinadi</MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_27':
    return (
      <Perms
        perms={[headDepartment]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton>Baholash uchun buyruq loyihasi qilinadi(Rahbariyatga junatish)</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_28':
    return (
      <Perms
        perms={[director]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton>Buyruq va reja imzolanadi</MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_29':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton>Baholashga tegishli barcha hujjatlar ekspertlarga beriladi</MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_30':
    return (
      <Perms
        perms={[expertHead]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton>Audit boshlanishi tasdiqlash</MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_31':
    return (
      <Perms
        perms={[expertHead]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton>Autditni yakunlash</MediumButton>
          </div>
        </Link>

      </Perms>
    )
  case 'stage_32':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px'

          }} >
            <MediumButton>Qabul qilish</MediumButton>
          </div>
        </Link>

      </Perms>
    )

  case 'stage_33':
    return (
      <Perms
        perms={[executor]}
      >
        <Link

          to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
          <div style={{
            paddingRight: '20px',
            paddingBottom: '20px',

          }} >
            <MediumButton>Akkreditatsiya komissiyasi rasmilashtiriladi</MediumButton>
          </div>
        </Link>

      </Perms>
    )

    // case 'stage_31':
    //   return (
    //     <Perms
    //       perms={[headDepartment]}
    //     >
    //       <Link
    //
    //         to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
    //         <div style={{
    //           paddingRight: '20px'
    //
    //         }} >
    //           <MediumButton>Ijobiy Ekspertlar dalolatnomasi </MediumButton>
    //         </div>
    //       </Link>
    //
    //     </Perms>
    //   )
    //
  case 'stage_34':
    return (
      <Perms
        perms={[executor]}
      >
        <div>

          <Link

            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <div style={{
              paddingRight: '20px'

            }} >
              <MediumButton>Akrreditatsiya qilish </MediumButton>
            </div>
          </Link>

        </div>

      </Perms>
    )

  case 'stage_35':
    return (
      <Perms
        perms={[director]}
      >
        <div>

          <Link

            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <div style={{
              paddingRight: '20px'

            }} >
              <MediumButton>Maqulash</MediumButton>
            </div>
          </Link>

        </div>

      </Perms>
    )

  case 'stage_36':
    return (
      <Perms
        perms={[executor]}
      >
        <div>

          <Link

            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <div style={{
              paddingRight: '20px'

            }} >
              <MediumButton>Buyurtmachiga xabarnoma jo’natish</MediumButton>
            </div>
          </Link>

        </div>

      </Perms>
    )

  case 'stage_37':
    return (
      <Perms
        perms={[executor]}
      >
        <div>

          <Link

            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <div style={{
              paddingRight: '20px'

            }} >
              <MediumButton>Reestrda ro’yhatga olish</MediumButton>
            </div>
          </Link>

        </div>

      </Perms>
    )

  case 'stage_38':
    return (
      <Perms
        perms={[executor]}
      >
        <div>

          <Link

            to={sprintf(ROUTES.APPLICATION_CONFIRM_PATH, id)}>
            <div style={{
              paddingRight: '20px'

            }} >
              <MediumButton>Postakkreditatsion shartnoma rasmiylashtirish</MediumButton>
            </div>
          </Link>

        </div>

      </Perms>
    )

  case 'stage_39':
    return (
      <Perms
        perms={[executor]}
      >
        <div />

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
