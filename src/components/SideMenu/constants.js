import * as ROUTES from '../../constants/routes'
import People from '../../icons/People'
import Settings from '../../icons/Settings'
import Document from '../../icons/Document'

export default [

  {
    name: 'Заявки',
    url: ROUTES.APPLICATION_LIST_URL,
    icon: Document,
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
    icon: People,
  },
  {
    name: 'Должности',
    url: ROUTES.ROLE_LIST_URL,
    icon: People,
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
        url: ROUTES.GROUP_LIST_URL,
        icon: People,
      },
      {
        name: 'Регион',
        url: '/',
        icon: People,
      }
    ]
  }
]
