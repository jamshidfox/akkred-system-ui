// import React from 'react'
// import { path, prop } from 'ramda'
// import * as STATE from '../../../constants/stateNames'
// import * as ROUTES from '../../../constants/routes'
// import { useUpdate, useFetchItem } from '../../../hooks'
// import { getSerializedData } from '../../../utils/get'
// import { EmployeesCreate, fields } from '../components'
//
// import { ratesUpdateAction, ratesFetchItem } from '../actions'
//
// const getRatestItemParams = () => ({
//   action: ratesFetchItem,
//   stateName: STATE.RATES_ITEM,
// })
//
// const serializer = (val) => {
//   const fromTime = prop('fromTime', val)
//   const fromDate = prop('fromDate', val)
//   const fromDateTime = ''.concat(fromDate, ' ', fromTime)
//
//   const toTime = prop('toTime', val)
//   const toDate = prop('toDate', val)
//   const toDateTime = ''.concat(toDate, ' ', toTime)
//   return {
//     ...getSerializedData(fields, val),
//     from_date:fromDateTime,
//     to_date:toDateTime
//   }
// }
//
// const getInitialValues = (data) => {
//   return ({
//     name: prop('name', data),
//     fromDate: prop('fromDate', data),
//     toDate: prop('toDate', data),
//     foreignerYoung: prop('foreignerYoung', data),
//     foreignerGrown: prop('foreignerGrown', data),
//     localYoung: prop('localYoung', data),
//     localGrown: prop('localGrown', data),
//     roomCategory: path(['roomCategory', 'id'], data),
//     category: path(['roomCategory', 'parent', 'id'], data),
//   })
// }
//
// const getRatesCreateParams = () => ({
//   stateName: STATE.RATES_CREATE,
//   action: ratesUpdateAction,
//   serializer: serializer,
//   redirectUrl: ROUTES.RATES_LIST_URL
// })
//
// const EmployeesUpdateContainer = props => {
//   const { data } = useFetchItem(getRatestItemParams())
//
//   const initialValues = getInitialValues(data)
//   const updateData = useUpdate(getRatesCreateParams())
//   return (
//     <EmployeesCreate
//       {...updateData}
//       initialValues={initialValues}
//     />
//   )
// }
//
// export default EmployeesUpdateContainer
