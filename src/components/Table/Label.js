import styled from 'styled-components'

const Label = styled.span`
  font-family: Roboto, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

letter-spacing: 0.75px;
text-transform: uppercase;
color: ${props => props.theme.color.basic.default}

`

export default Label
