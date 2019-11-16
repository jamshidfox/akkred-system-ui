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
    url: '/',
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
    name: 'Расчеты',
    url: '/',
    icon: CreditCard,
  },
  {
    name: 'Служба отеля',
    url: '/',
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
    url: ROUTES.HOTEL_PATH,
    icon: Settings,
    children: [
      {
        name: 'Ваш объект',
        url: ROUTES.HOTEL_PATH,
      },
      {
        name: 'Номерной фонд',
        url: ROUTES.SETTING_ROOMS,
      },
      {
        name: 'Тарифы и цены',
        url: ROUTES.SETTING_PRICE_LIST,
      }
    ]
  }
]
