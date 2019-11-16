import PropTypes from 'prop-types'
import styled from 'styled-components'

const SVG = styled.svg`
  transition: fill 300ms;
  min-width: 1em;
`

SVG.propTypes = {
  children: PropTypes.node.isRequired
}

SVG.defaultProps = {
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  height: '24',
  width: '24',
  xmlns: 'http://www.w3.org/2000/svg'
}

export default SVG
