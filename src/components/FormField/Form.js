import React from 'react'
import PropTypes from 'prop-types'
import { Form as FinalForm } from 'react-final-form'

const Form = props => {
  const {
    children,
    onSubmit,
    initialValues,
    keepDirtyOnReinitialize,
    ...restProps
  } = props

  return (
    <FinalForm
      {...restProps}
      keepDirtyOnReinitialize={keepDirtyOnReinitialize}
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, ...formProps }) => (
        <form onSubmit={handleSubmit}>
          {React.cloneElement(children, formProps)}
        </form>
      )}
    />
  )
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  keepDirtyOnReinitialize: PropTypes.bool
}

Form.defaultProps = {
  keepDirtyOnReinitialize: true
}

export default Form
