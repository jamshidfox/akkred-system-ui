import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

const NoopFields = ({ names }) => (
  <React.Fragment>
    {names.map(name => <Field key={name} name={name} render={() => null} />)}
  </React.Fragment>
)

NoopFields.propTypes = {
  names: PropTypes.array
}

export default NoopFields
