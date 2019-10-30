import { pick, pipe, equals } from 'ramda'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getDataFromState, getParamsFormHistory } from '../utils/get'
import { DEFAULT_PICK_PARAMS } from '../utils/isEquals'
import toSnakeCase from '../utils/toSnakeCase'
import useCompareEffect from './useCompareEffect'

export const getListParams = (history, keys) =>
  pipe(
    getParamsFormHistory,
    pick(keys),
    toSnakeCase
  )(history)

const useFetchList = (params) => {
  const {
    stateName,
    action,
    key = 'list',
    mapper = getListParams,
    pickParams = DEFAULT_PICK_PARAMS
  } = params

  const dispatch = useDispatch()
  const history = useHistory()

  const searchParams = getListParams(history, pickParams)

  const data = useSelector(state => getDataFromState(stateName, state), equals)
  useCompareEffect(() => { dispatch(action(mapper(history, pickParams))) }, [searchParams])

  return data
}

export default useFetchList
