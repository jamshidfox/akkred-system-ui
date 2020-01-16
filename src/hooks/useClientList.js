import { useSelector } from 'react-redux'
import { getDataFromState } from '../utils/get'
import * as STATE from '../constants/stateNames'

const useClientList = () => {
  return useSelector(getDataFromState(STATE.CLIENT_LIST))
}

export default useClientList
