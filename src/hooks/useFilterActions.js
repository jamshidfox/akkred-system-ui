import { useHistory } from 'react-router-dom'
import { prop, map, mapObjIndexed, fromPairs } from 'ramda'
import { addParamsRoute } from '../utils/route'
import {
  getParamsCountFromHistory,
  getInitValuesFromHistory
} from '../utils/get'
import { isNumber } from '../utils/is'
import toNumber from '../utils/toNumber'
import useModal from './useModal'

const mapInitialValues = mapObjIndexed(value => {
  if (isNumber(value)) return toNumber(value)
  return value
})

const key = 'filter'

const getVal = value => {
  if (typeof value === 'object') {
    return prop('id', value)
  }
  return value
}
const getIds = map(getVal)

const useTableActions = (params) => {
  const {
    fields,
    mapValues = getIds,
    mapInitValues = mapInitialValues
  } = params
  const history = useHistory()
  const modal = useModal({ key: 'filter' })

  const onSubmit = (values) => {
    addParamsRoute({ ...mapValues(values), [key]: false }, history)
  }

  const onClear = props => {
    const filterValuesToNull = fields.map(item => [item, null])
    const values = fromPairs(filterValuesToNull)
    addParamsRoute({ ...values, [key]: false }, history)
  }

  const count = getParamsCountFromHistory(fields, history)
  const initialValues = mapInitValues(
    getInitValuesFromHistory(fields, history)
  )
  return {
    ...modal,
    onSubmit,
    onClear,
    count,
    initialValues
  }
}

export default useTableActions
