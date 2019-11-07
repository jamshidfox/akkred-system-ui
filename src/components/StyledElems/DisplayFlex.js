import styled from 'styled-components'
import PropTypes from 'prop-types'

const DisplayFlex = styled.div`
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
`

DisplayFlex.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string
}

export default DisplayFlex
