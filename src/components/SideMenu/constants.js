import Plus from '../../icons/Plus'
import Chess from '../../icons/Chess'
import BarChart from '../../icons/BarChart'
import CreditCard from '../../icons/CreditCard'
import List from '../../icons/List'
import People from '../../icons/People'
import TrendingUp from '../../icons/TrendingUp'
import Welcome from '../../icons/Welcome'

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
  }
]
