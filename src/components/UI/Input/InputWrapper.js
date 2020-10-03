import styled, { css } from 'styled-components'
import InputLabel from '../InputLabel'

export default styled('div')`
  position: relative;
  width: ${props => props.width};
  ${props =>
    props.error &&
    css`
      & ${InputLabel} {
        color: ${props => props.theme.color.danger.default + '!important'};
      }
    `}
`
