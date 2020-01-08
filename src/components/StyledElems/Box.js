import styled from 'styled-components'
import PropTypes from 'prop-types'

const Box = styled.div`
  background: #ffffff;
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.padding};
`

Box.propTypes = {
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Box.defaultProps = {
  padding: '0 25px'
}

export default Box
