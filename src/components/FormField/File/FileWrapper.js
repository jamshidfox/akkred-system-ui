import { join, path } from 'ramda'
import { compose, withHandlers, withReducer } from 'react-fc'
import * as API from '../../../constants/api'
import axios from '~/utils/axios'

export default Component => {
  return compose(
    withReducer(
      'state',
      'dispatch',
      (state, action) => {
        return { ...state, ...action }
      },
      { loading: false, error: null, image: null }
    ),
    withHandlers({
      onInputChange: props => ev => {
        const { store, dispatch, input, formats } = props
        const IMAGE_MAX_SIZE = 1500000

        const file = path(['target', 'files', '0'], ev)
        const formData = new FormData()
        const types = formats || ['image/png', 'image/jpeg', 'image/gif']

        if (types.every(type => file.type !== type)) {
          const allowedFormats = join(', ', types)
          return dispatch({
            error: `Формат не поддерживается. Доступные форматы: ${allowedFormats}`
          })
        }

        if (file.size > IMAGE_MAX_SIZE) {
          dispatch({ error: 'Too large' })
        }
        formData.append('file', file)

        dispatch({ loading: true })

        return axios({ dispatch })
          .post(API.FILE_UPLOAD, formData)
          .then(response => {
            dispatch({ loading: false, error: null })
            input.onChange(response.data)
            return response
          })
          .catch(newError => {
            const errorData = path(['response', 'data'], newError)
            dispatch({ loading: false, error: errorData })
          })
      }
    })
  )(Component)
}
