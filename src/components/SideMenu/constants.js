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
    name: 'Шахматка',
    url: '/',
    icon: Chess
  },
  {
    name: 'Создать бронь',
    url: ROUTES.RESERVATION_CREATE_URL,
    icon: Plus,
    isActive: true
  },
  {
    name: 'Служба приема',
    url: ROUTES.PLACING_LIST_URL,
    icon: Plus,
    isActive: true
  },
  {
    name: 'Прием и размещение',
    url: '/',
    icon: Welcome,
  },
  {
    name: 'Список броней',
    url: '/',
    icon: List,
  },
  {
    name: 'Тарифы и цены',
    url: '/',
    icon: CreditCard,
    children: [
      {
        name: 'Тарифы и цены номерного фонда',
        url: ROUTES.RATES_LIST_URL,
      },
      {
        name: 'Тарифы и цены сервисов',
        url: ROUTES.SERVICES_PRICE_LIST_URL,
      }
    ]
  },
  {
    name: 'Клиенты',
    url: ROUTES.CLIENT_LIST_URL,
    icon: People,
  },
  {
    name: 'Отчеты',
    url: '/',
    icon: BarChart,
  },
  {
    name: 'Финансовая аналитика',
    url: '/',
    icon: TrendingUp,
  },
  {
    name: 'Настройка',
    url: ROUTES.SETTINGS_HOTEL_URL,
    icon: Settings,
    children: [
      {
        name: 'Ваш объект',
        url: ROUTES.SETTINGS_HOTEL_URL,
      },
      {
        name: 'Номерной фонд',
        url: ROUTES.SETTING_ROOMS_TYPE_LIST,
      },
      // {
      //   name: 'Тарифы и цены',
      //   url: ROUTES.SETTING_PRICE_LIST_URL,
      // }
    ]
  }
]
