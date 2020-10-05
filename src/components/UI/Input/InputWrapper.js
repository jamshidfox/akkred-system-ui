import styled, { css } from 'styled-components'
import InputLabel from '../InputLabel'

export default styled('div')`
  position: relative;
  width: ${({ width }) => width};
  ${props =>
    props.error &&
    css`
      & ${InputLabel} {
        color: ${({ theme }) => theme.color.danger.default + '!important'};
      }
    `}
`
