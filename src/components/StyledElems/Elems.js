import styled from 'styled-components'
import PropTypes from 'prop-types'

export const FieldWrapper = styled.div`
  margin-bottom: 20px;
`

export const ButtonAlign = styled.div`
margin-top: 20px;
text-align: ${props => props.align};
`
ButtonAlign.propTypes = {
  align: PropTypes.string
}
ButtonAlign.defaultProps = {
  align: 'right'
}
