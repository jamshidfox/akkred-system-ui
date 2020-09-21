import Plus from '../../icons/Plus'
import Chess from '../../icons/Chess'
import BarChart from '../../icons/BarChart'
import CreditCard from '../../icons/CreditCard'
import List from '../../icons/List'
import People from '../../icons/People'
import TrendingUp from '../../icons/TrendingUp'
import Welcome from '../../icons/Welcome'
import Settings from '../../icons/Settings'
import * as ROUTES from '../../constants/routes'

export default [

  {
    name: 'Заявки',
    url: ROUTES.APPLICATION_LIST_URL,
    icon: People,
    // children: [
    //   {
    //     name: 'YANGILAR',
    //     url:'/',
    //   },
    //   {
    //     name: 'RAHBARIYAT KO’RIB CHIQISHIDA',
    //     url:'/',
    //   },
    //   {
    //     name: 'QABUL QILINGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'SHARTNOMA RASMIYLASHTIRILGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'TO’LOV JARAYONIDA',
    //     url:'/',
    //   },
    //   {
    //     name: 'EKSPERTIZA',
    //     url:'/',
    //   },
    //   {
    //     name: 'AUDIT UCHUN SHARTNOMA RASMIYLASHTIRILGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'AUDIT UCHUN TO’LOV JARAYONIDA',
    //     url:'/',
    //   },
    //   {
    //     name: 'REJA VA BUYRUQ RASMIYLASHTIRILGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'NOMUVOFIQLIKLARNI BARTARAF ETISH UCHUN\n' +
    //       'MUDDAT BERILGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'ARIZACHI TOMINIDAN NOMUVOFIQLIKLARNI AMALDA\n' +
    //       'BARTARAF ETISH BUYICHA REJA TAQDIM ETILGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'ARIZACHI TOMINIDAN NOMUVOFIQLIKLARNI AMALDA\n' +
    //       'BARTARAF ETILGANLIGI TO’G’RISIDA XISOBOT TAQDIM\n' +
    //       'ETILGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'NOMUVOFIQLIKLARNI AMALDA BARTARAF\n' +
    //       'ETILGANLIGINI O’RGANISH',
    //     url:'/',
    //   },
    //   {
    //     name: 'AKKREDITATSIYA KOMISSIYASIGA TAQDIM ETILGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'DAVLAT REESTRIGA KIRITILGAN VA GUVOHNOMA\n' +
    //       'RASMIYLASHTIRILGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'POST AKKREDITATSIAION HUJJATLAR\n' +
    //       'RASMIYLASHTIRILGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'QO’SHIMCHA MUDDAT BERILGAN',
    //     url:'/',
    //   },
    //   {
    //     name: 'RAD ETILGAN',
    //     url:'/',
    //   },
    //
    // ]
  },

  {
    name: 'Сотрудники',
    url: ROUTES.EMPLOYEES_LIST_URL,
    icon: Chess,
  },
  {
    name: 'Должности',
    url: ROUTES.ROLE_LIST_URL,
    icon: Welcome,
  },

  {
    name: 'Клиенты',
    url: ROUTES.CLIENT_LIST_URL,
    icon: People,
  },

  // {
  //   name: 'Договоры',
  //   url: '/',
  //   icon: List,
  // },
  //
  // {
  //   name: 'Учет аккред. органов',
  //   url: '/',
  //   icon: TrendingUp,
  // },
  // {
  //   name: 'Документы',
  //   url: '/',
  //   icon: CreditCard,
  // },
  //
  // {
  //   name: 'Учет экспертов-аудиторов',
  //   url: '/',
  //   icon: CreditCard,
  // },
  // {
  //   name: 'Финансовая аналитика',
  //   url: '/',
  //   icon: TrendingUp,
  // },
  {
    name: 'Настройка',
    url: ROUTES.SETTINGS_CLIENT_INFO_URL,
    icon: Settings,
    children: [
      {
        name: 'Вид органов',
        url: '/',
      },
      {
        name: 'Регион',
        url:'/',
      },

      {
        name: 'Роли',
        url: ROUTES.GROUP_LIST_URL,
      }
    ]
  }
]
