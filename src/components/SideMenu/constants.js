import * as ROUTES from '../../constants/routes'
import People from '../../icons/People'
import Settings from '../../icons/Settings'
import Document from '../../icons/Document'

export default [
  {
    name: 'Arizalar',
    icon: Document,
    children: [
      {
        name: 'Yangilar',
        url: ROUTES.APPLICATION_MY_ORDERS_URL,
        tabs: [
          {
            name: 'Mening arizalarim',
            url: ROUTES.APPLICATION_MY_ORDERS_URL
          },
          {
            name: 'Barcha arizalar',
            url: ROUTES.APPLICATION_ORDERS_URL
          }
        ]
      },

      {
        name: 'EKSPERTIZA',
        url: ROUTES.APPLICATION_EXPERTISE_URL,
      },

      {
        name: 'AUDIT',
        url: ROUTES.APPLICATION_AUDIT_URL,
      },

      {
        name: 'AKKREDITATSIYA KOMISSIYASIGA TAQDIM ETILGAN',
        url: ROUTES.APPLICATION_ACCRED_URL,
      },
    ]
    // a.mamanazarov@tace.uz
  },
  {
    name: 'Mutaxassislar bo\'limi',
    children: [

      {
        name: ' Ekspertiza',
        url: ROUTES.EXPERT_EXPERTISE_LIST_URL,
      },
      {
        name: 'Baholash',
        url: ROUTES.EXPERT_PLACE_LIST_URL,
      },
    ],
    icon: People,
  },

  {
    name: 'Buxgalteriya bo\'limi',
    children: [

      {
        name: 'Ekspertiza shartnomasi',
        url: ROUTES.CONTRACT_LIST_URL,
      },
      {
        name: 'Baholash shartnomasi',
        url: ROUTES.CONTRACT_PLACE_LIST_URL,
      },
    ],
    perms: ['accountant'],
    icon: People,
  },
  {
    name: 'Akrreditatsiya komissiyasi bo\'limi ',
    url: ROUTES.COMMISSION_LIST_URL,
    icon: People,
    perms: ['commission'],
  },
  {
    name: 'Reestr ',
    url: ROUTES.REESTR_LIST_URL,
    perms: ['executor'],
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
