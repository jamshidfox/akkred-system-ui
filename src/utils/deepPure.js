import { equals } from 'ramda'
import React from 'react'

export default Component => {
  return class DeepPure extends React.Component {
    shouldComponentUpdate (nextProps) {
      return !equals(nextProps, this.props)
    }

    render () {
      return <Component {...this.props} />
    }
  }
}
