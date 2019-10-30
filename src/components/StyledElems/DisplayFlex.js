import styled from 'styled-components'
import PropTypes from 'prop-types'

const DisplayFlex = styled.div`
  display: flex;
`

DisplayFlex.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string
}

export default DisplayFlex
