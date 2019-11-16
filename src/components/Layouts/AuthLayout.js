import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCookie } from '../../utils/cookie'
import { userInfoFetch } from '../../containers/Login/actions'

const AuthLayout = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function getData () {
      const token = getCookie('token')
      token && await dispatch(userInfoFetch(token))
    }
    getData()
  }, [])
  return props.children
}

export default AuthLayout
