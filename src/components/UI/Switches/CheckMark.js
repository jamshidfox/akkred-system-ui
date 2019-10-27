import styled, { css } from 'styled-components'

export default styled.span`
  background: #8f9bb329;
  border-radius: 3px;
  border: 1px solid #C5CEE0;
  position: absolute;
  transition: all 300ms;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  :after {
    content: '';
    opacity: 0;
    position: absolute;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  }

  ${props =>
    props.error &&
    css`
      background: #ffecf1 !important;
      border-color: ${props => props.theme.color.primary.default} !important;
    `}
`
