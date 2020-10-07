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
