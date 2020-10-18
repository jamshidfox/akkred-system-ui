import styled from 'styled-components'

export const Text = styled('span')`
  display: inline-block;
  color: ${({ theme, color }) =>
    color === 'green'
      ? theme.palette.green
      : color === 'red'
        ? theme.palette.red
        : color === 'black'
          ? theme.palette.black
          : color === 'secondary'
            ? theme.text.secondary
            : color === 'primary'
              ? theme.palette.primary
              : (color || 'inherit')
};
  font-weight: ${({ fontWeight }) => fontWeight};
  ${({ styles }) => styles}
`
