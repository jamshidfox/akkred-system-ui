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
        name: 'Заявки',
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
      }
    ]
  },
  // {
  //   name: 'Заявки',
  //   url: ROUTES.MY_ORDERS_URL,
  //   tabs: [
  //     {
  //       name: 'Мои заявки',
  //       url: ROUTES.MY_ORDERS_URL
  //     },
  //     {
  //       name: 'Все заявки',
  //       url: ROUTES.ORDERS_URL
  //     }
  //   ]
  // },
  // {
  //   name: 'Заявки OLD',
  //   url: '#',
  //   icon: Document,
  //   children: [
  //     {
  //       name: 'Все',
  //       url: ROUTES.APPLICATION_LIST_URL,
  //       icon: Document,
  //       tabs: [
  //         {
  //           name: 'Мои заявки',
  //           url: ROUTES.APPLICATION_TABS_URL
  //         },
  //         {
  //           name: 'Табуляция',
  //           url: ROUTES.APPLICATION_LIST_URL
  //         }
  //       ],
  //     },
  //     {
  //       name: 'YANGILAR',
  //       url:'/',
  //     },
  //     {
  //       name: 'RAHBARIYAT KO’RIB CHIQISHIDA',
  //       url:'/',
  //     },
  //  ]
  // }
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
