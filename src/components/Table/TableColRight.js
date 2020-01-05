import PropTypes from 'prop-types'
import styled from 'styled-components'
import TableCol from './TableCol'

const TableColRight = styled(TableCol)`
  text-align: right;
`

TableColRight.propTypes = {
  span: PropTypes.number,
  children: PropTypes.node,
  header: PropTypes.bool
}

TableColRight.defaultProps = {
  header: false
}
export default TableColRight
