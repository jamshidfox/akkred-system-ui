import * as ROUTES from '../../constants/routes'
import People from '../../icons/People'
import Settings from '../../icons/Settings'
import Document from '../../icons/Document'

export default [
  {
    name: 'Заказы',
    icon: Document,
    children: [
      {
        name: 'YANGILAR',
        url: ROUTES.APPLICATION_MY_ORDERS_URL,
        tabs: [
          {
            name: 'Мои заявки',
            url: ROUTES.APPLICATION_MY_ORDERS_URL
          },
          {
            name: 'Все заявки',
            url: ROUTES.APPLICATION_ORDERS_URL
          }
        ]
      },
      {
        name: 'RAHBARIYAT KO’RIB CHIQISHIDA',
        url: '',
      },
      {
        name: 'QABUL QILINGAN',
        url: '',
      },
      {
        name: 'SHARTNOMA RASMIYLASHTIRILGAN',
        url: '',
      },
      {
        name: 'TO’LOV JARAYONIDA',
        url: '',
      },
      {
        name: 'EKSPERTIZA',
        url: '',
      },
      {
        name: 'AUDIT UCHUN SHARTNOMA RASMIYLASHTIRILGAN',
        url: '',
      },
      {
        name: 'AUDIT UCHUN TO’LOV JARAYONIDA',
        url: '',
      },
      {
        name: 'REJA VA BUYRUQ RASMIYLASHTIRILGAN',
        url: '',
      },
      {
        name: 'JOYIDA BAHOLASH',
        url: '',
      },
      {
        name: 'NOMUVOFIQLIKLARNI BARTARAF ETISH UCHUN MUDDAT BERILGAN',
        url: '',
      },
      {
        name: '\n' +
          'ARIZACHI TOMINIDAN NOMUVOFIQLIKLARNI AMALDA BARTARAF ETISH BUYICHA REJA TAQDIM ETILGAN',
        url: '',
      },
      {
        name: 'ARIZACHI TOMINIDAN NOMUVOFIQLIKLARNI AMALDA BARTARAF ETILGANLIGI TO’G’RISIDA XISOBOT TAQDIM ETILGAN',
        url: '',
      },
      {
        name: 'NOMUVOFIQLIKLARNI AMALDA BARTARAF ETILGANLIGINI O’RGANISH UCHUN BUYRUQ RASMIYLASHTIRILGAN',
        url: '',
      },
      {
        name: 'NOMUVOFIQLIKLARNI AMALDA BARTARAF ETILGANLIGINI O’RGANISH',
        url: '',
      },
      {
        name: 'AKKREDITATSIYA KOMISSIYASIGA TAQDIM ETILGAN',
        url: '',
      },
      {
        name: 'DAVLAT REESTRIGA KIRITILGAN VA GUVOHNOMA RASMIYLASHTIRILGAN',
        url: '',
      },
      {
        name: 'POST AKKREDITATSIAION HUJJATLAR RASMIYLASHTIRILGAN',
        url: '',
      },
      {
        name: 'QO’SHIMCHA MUDDAT BERILGAN',
        url: '',
      },
      {
        name: 'RAD ETILGAN',
        url: '',
      },
    ]
  },
  {
    name: 'Сотрудники',
    url: ROUTES.EMPLOYEES_LIST_URL,
    icon: People,
    perms: ['some_perms'],
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
  //   url: '/'
  // },
  //
  // {
  //   name: 'Учет аккред. органов',
  //   url: '/'
  // },
  // {
  //   name: 'Документы',
  //   url: '/'
  // },
  //
  // {
  //   name: 'Учет экспертов-аудиторов',
  //   url: '/'
  // },
  // {
  //   name: 'Финансовая аналитика',
  //   url: '/'
  // },
  {
    name: 'Настройка',
    url: '#',
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
