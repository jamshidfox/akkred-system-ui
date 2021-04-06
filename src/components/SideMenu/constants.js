import * as ROUTES from '../../constants/routes'
import People from '../../icons/People'
import Settings from '../../icons/Settings'
import Document from '../../icons/Document'

export default [
  {
    name: 'Заявки',
    icon: Document,
    children: [
      {
        name: 'Новые',
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
      // {
      //   name: 'QABUL QILINGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'SHARTNOMA RASMIYLASHTIRILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'TO’LOV JARAYONIDA',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'EKSPERTIZA',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'AUDIT UCHUN SHARTNOMA RASMIYLASHTIRILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'AUDIT UCHUN TO’LOV JARAYONIDA',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'REJA VA BUYRUQ RASMIYLASHTIRILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'JOYIDA BAHOLASH',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'NOMUVOFIQLIKLARNI BARTARAF ETISH UCHUN MUDDAT BERILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: '\n' +
      //     'ARIZACHI TOMINIDAN NOMUVOFIQLIKLARNI AMALDA BARTARAF ETISH BUYICHA REJA TAQDIM ETILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'ARIZACHI TOMINIDAN NOMUVOFIQLIKLARNI AMALDA BARTARAF ETILGANLIGI TO’G’RISIDA XISOBOT TAQDIM ETILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'NOMUVOFIQLIKLARNI AMALDA BARTARAF ETILGANLIGINI O’RGANISH UCHUN BUYRUQ RASMIYLASHTIRILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'NOMUVOFIQLIKLARNI AMALDA BARTARAF ETILGANLIGINI O’RGANISH',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'AKKREDITATSIYA KOMISSIYASIGA TAQDIM ETILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'DAVLAT REESTRIGA KIRITILGAN VA GUVOHNOMA RASMIYLASHTIRILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'POST AKKREDITATSIAION HUJJATLAR RASMIYLASHTIRILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'QO’SHIMCHA MUDDAT BERILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
      // {
      //   name: 'RAD ETILGAN',
      //   url: ROUTES.APPLICATION_TESTS_URL,
      // },
    ]
    // a.mamanazarov@tace.uz
  },
  {
    name: 'Эксперты',
    children: [

      {
        name: ' Экспертиза',
        url: ROUTES.EXPERT_EXPERTISE_LIST_URL,
      },
      {
        name: 'Оценка',
        url: ROUTES.EXPERT_PLACE_LIST_URL,
      },
    ],
    icon: People,
  },

  {
    name: 'Бухгалтерия',
    children: [

      {
        name: 'Договор на экспертизу',
        url: ROUTES.CONTRACT_LIST_URL,
      },
      {
        name: 'Договор на оценку',
        url: ROUTES.CONTRACT_PLACE_LIST_URL,
      },
    ],
    icon: People,
  },
  {
    name: 'Akrreditatsiya komissiyasi ',
    url: ROUTES.COMMISSION_LIST_URL,
    icon: People,
    perms: ['some_perms'],
  },
  {
    name: 'Реестр ',
    url: ROUTES.REESTR_LIST_URL,
    perms: ['some_perms'],
  },
  // {
  //   name: 'Сотрудники',
  //   url: ROUTES.EMPLOYEES_LIST_URL,
  //   icon: People,
  //   perms: ['some_perms'],
  // },
  // {
  //   name: 'Должности',
  //   url: ROUTES.ROLE_LIST_URL,
  //   icon: People,
  // },
  // {
  //   name: 'Клиенты',
  //   url: ROUTES.CLIENT_LIST_URL,
  //   icon: People,
  // },
  // {
  //   name: 'Группы',
  //   url: ROUTES.GROUP_LIST_URL,
  //   icon: People,
  // },

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
  // {
  //   name: 'Настройка',
  //   url: '#',
  //   icon: Settings,
  //   children: [
  //
  //     {
  //       name: 'Регион',
  //       url: '/',
  //       icon: People,
  //     }
  //   ]
  // }
]
