import styled from 'styled-components'

export const TextStatus = styled('span')`
  display: inline-block;
  font-size: ${({ fontSize }) => fontSize || '10px'};
  padding: 2px 8px;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${({ theme, status, color }) =>
    status === 'active'
      ? theme.palette.green
      : status === 'inactive'
        ? theme.palette.red
        : status === 'primary'
          ? theme.palette.primary
          : (color || 'inherit')};
  color: ${({ theme, status, color }) =>
    status === 'active'
      ? theme.palette.green
      : status === 'inactive'
        ? theme.palette.red
        : status === 'primary'
          ? theme.palette.primary
          : (color || 'inherit')};
  font-weight: ${({ fontWeight, bold }) => bold ? 500 : fontWeight};
  ${({ styles }) => styles}
`
