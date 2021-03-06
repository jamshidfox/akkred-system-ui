import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useClearStore = (type) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: `${type}_CLEAR`
    })
  }, [dispatch, type])
}

export default useClearStore
