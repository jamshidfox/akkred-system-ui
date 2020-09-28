import styled from 'styled-components'

export const SecondaryBaseButton = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
cursor: pointer;
  border-radius: ${props => props.theme.borderRadius.primary};
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.color.primary.default};
  outline: none;
  border: none;
  transition: background-color 200ms;
  :focus {
    background: ${({ theme }) => theme.color.secondary.focus};
  }
  :hover {
    background: ${({ theme }) => theme.color.secondary.hover};
  }
  :active {
    background: ${({ theme }) => theme.color.secondary.active};
  }
  :disabled {
    background: rgba(143, 155, 179, 0.16);
    border: 1px solid rgba(143, 155, 179, 0.24);
    color: ${props => props.theme.color.basic.default};
    cursor: not-allowed;
  }
`

export const SecondaryGiantButton = styled(SecondaryBaseButton)`
  padding: 0 24px;
  height: 56px;
  font-size: ${props => props.theme.fontSize.giant};
  line-height: ${props => props.theme.lineHeight.giant};
`


export const SecondaryLargeButton = styled(SecondaryBaseButton)`
  padding: 0 20px;
  height: 48px;
  font-size: ${props => props.theme.fontSize.large};
  line-height: ${props => props.theme.lineHeight.large};
`

export const SecondaryMediumButton = styled(SecondaryBaseButton)`
  padding: 0 20px;
  height: 40px;
  font-size: ${props => props.theme.fontSize.medium};
  line-height: ${props => props.theme.lineHeight.medium};
`

export const SecondarySmallButton = styled(SecondaryBaseButton)`
  padding: 0 16px;
  height: 32px;
  font-size: ${props => props.theme.fontSize.small};
  line-height: ${props => props.theme.lineHeight.small};
`
export const SecondaryTinyButton = styled(SecondaryBaseButton)`
  padding: 0 12px;
  height: 24px;
  font-size: ${props => props.theme.fontSize.tiny};
  line-height: ${props => props.theme.lineHeight.tiny};
`
