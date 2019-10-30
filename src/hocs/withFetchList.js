import { path, pipe, pick, prop } from 'ramda'
import { compose, pure, mapPropsStream } from 'react-fc'
import { connect } from 'react-redux'
import { distinctUntilChanged } from 'rxjs/operators'
import { getDataFromState, getParamsFormHistory } from '../utils/get'
import { isEqualSearch, DEFAULT_PICK_PARAMS } from '../utils/isEquals'
import toSnakeCase from '../utils/toSnakeCase'

export const getListParams = (props, keys) =>
  pipe(
    prop('history'),
    getParamsFormHistory,
    pick(keys),
    toSnakeCase
  )(props)

const withFetchList = params => {
  const {
    stateName,
    action,
    key = 'list',
    mapper = getListParams,
    pickParams = DEFAULT_PICK_PARAMS
  } = params

  const actionKey = `${key}Action`

  const mapStateToProps = state => ({
    [key]: getDataFromState(stateName, state)
  })
  const mapDispatchToProps = { [actionKey]: action }

  return compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    ),
    mapPropsStream(props$ => {
      props$
        .pipe(
          distinctUntilChanged(
            isEqualSearch(pickParams),
            path(['history', 'location', 'search'])
          )
        )
        .subscribe(props => props[actionKey](mapper(props, pickParams)))

      return props$
    }),
    pure
  )
}

export default withFetchList
