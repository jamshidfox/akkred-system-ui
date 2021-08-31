import * as ROUTES from '../../constants/routes'
import People from '../../icons/People'
import Settings from '../../icons/Settings'
import Document from '../../icons/Document'
import Calendar from '../../icons/Calendar'
import Chess from '../../icons/Chess'
import CreditCard from '../../icons/CreditCard'
import Triangle from '../../icons/Triangle'
import Welcome from '../../icons/Welcome'
import Globe from '../../icons/Globe'
import Person from '../../icons/pack/Person'
import BarChart from '../../icons/BarChart'
import { TECHNICAL_EXPERT } from '../../constants/routes'

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
            name: 'Ko`rib chiqish uchun',
            url: ROUTES.APPLICATION_MY_ORDERS_URL
          },
          {
            name: 'Barcha arizalar',
            url: ROUTES.APPLICATION_ALL_LIST_URL
          }
        ]
      },

      {
        name: 'Ekspertiza',
        url: ROUTES.APPLICATION_EXPERTISE_URL,
        tabs: [
          {
            name: 'Ko`rib chiqish uchun',
            url: ROUTES.APPLICATION_EXPERTISE_URL
          },
          {
            name: 'Barcha arizalar',
            url: ROUTES.APPLICATION_ALL_EXPERTISE_URL
          }
        ]
      },

      {
        name: 'Baholash',
        url: ROUTES.APPLICATION_AUDIT_URL,
        tabs: [
          {
            name: 'Ko`rib chiqish uchun',
            url: ROUTES.APPLICATION_AUDIT_URL
          },
          {
            name: 'Barcha arizalar',
            url: ROUTES.APPLICATION_ALL_AUDIT_URL
          }
        ]
      },

      {
        name: 'Akkreditatsiya komissiyasiga taqdim etilgan',
        url: ROUTES.APPLICATION_ACCRED_URL,
        tabs: [
          {
            name: 'Ko`rib chiqish uchun',
            url: ROUTES.APPLICATION_ACCRED_URL
          },
          {
            name: 'Barcha arizalar',
            url: ROUTES.APPLICATION_ALL_COMMISSION_URL
          }
        ]
      },
    ],
  },
  {
    name:'Ijrochilar  bo\'limi',
    icon: Person,
    children: [

      {
        name: ' Ekspertiza',
        url: ROUTES.EXPERT_EXPERTISE_LIST_URL,
      },
      {
        name: 'Baholash',
        url: ROUTES.EXPERT_PLACE_LIST_URL,
      },
      {
        name: "O'rganish",
        url: ROUTES.RE_AUDIT_EXPERT_LIST_URL,
      },
    ],
  },

  // {
  //   name: 'Buxgalteriya bo\'limi',
  //   children: [
  //
  //     {
  //       name: 'Ekspertiza shartnomasi',
  //       url: ROUTES.CONTRACT_LIST_URL,
  //     },
  //     {
  //       name: 'Baholash shartnomasi',
  //       url: ROUTES.CONTRACT_PLACE_LIST_URL,
  //     },
  //   ],
  //   perms: ['accountant'],
  //   icon: People,
  // },
  {
    name: 'Akrreditatsiya komissiyasi bo\'limi ',
    url: ROUTES.COMMISSION_LIST_URL,
    icon: Globe,
    // perms: ['commission'],
  },
  {
    name: 'Reestr ',
    url: ROUTES.REESTR_LIST_URL,
    perms: ['executor'],
    icon: BarChart,
  },
  {
    name: 'Texnik mutaxassislar',
    url: ROUTES.TECHNICAL_EXPERT_LIST_URL,
    icon: People,
    perms: ['headHr'],
  },
  {
    name: 'Xodimlar',
    url: ROUTES.EMPLOYEES_LIST_URL,
    icon: People,
    perms: ['headHr'],
  },
  {
    name: 'Lavozimlar',
    url: ROUTES.ROLE_LIST_URL,
    icon: Welcome,
    perms: ['admin'],
  },
  {
    name: 'Guruhlar',
    url: ROUTES.GROUP_LIST_URL,
    icon: CreditCard,
    perms: ['admin'],
  },
  // {
  //   name: 'Hujjatlar',
  //   url: ROUTES.TEMPLATE_DOCUMENT_LIST_URL,
  //   icon: People,
  //   perms: ['admin'],
  // },

  {
    name:'Ishlar narhini hisoblash',
    icon: Calendar,
    url:'https://akkred.uz/calculate',
    outside:true
  },
  {
    name:'Inspeksiya nazorati',
    icon: Chess,
    url:'https://akkred.uz/inspections',
    outside:true
  },
  {
    name: 'Hujjatlar',
    icon: Settings,
    children: [
      {
        name: 'Akkreditasiya hujjatlari',
        url: 'https://akkred.uz/documents?parents=1',
        outside:true,

      },
      {
        name: 'Normativ-huquqiy hujjatlar',
        url: 'https://akkred.uz/documents?parents=3',
        outside:true,

      },
      {
        name: 'IAF hujjatlar',
        url: 'https://www.iaf.nu/articles/Mandatory_Documents_/38',
        outside:true,

      },
      {
        name: 'ILAC hujjatlar',
        url: 'https://www.iaf.nu/articles/Mandatory_Documents_/38',
        outside:true,

      },

    ],

  },
]
