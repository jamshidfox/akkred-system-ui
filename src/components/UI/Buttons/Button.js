import styled from 'styled-components'
import PropTypes from 'prop-types'

export const BaseButton = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  cursor: pointer;
  border: none;
  border-radius: ${props => props.theme.borderRadius.primary};
  background: ${({ status = 'primary', theme }) => theme.color[status].default};
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  outline: none;
  transition: background-color 200ms;
  float: ${props => props.float};
  :focus {
    background: ${({ status = 'primary', theme }) => theme.color[status].focus};
  }
  :hover {
    background: ${({ status = 'primary', theme }) => theme.color[status].hover};
  }
  :active {
    background: ${({ status = 'primary', theme }) =>
    theme.color[status].active};
  }
  :disabled {
    background: rgba(143, 155, 179, 0.16);
    border: 1px solid rgba(143, 155, 179, 0.24);
    color: ${props => props.theme.color.basic.default};
    cursor: not-allowed;
  }
`

BaseButton.propTypes = {
  status: PropTypes.oneOf(['primary', 'success', 'info', 'danger', 'warning', 'transparent'])
}

export const GiantButton = styled(BaseButton)`
  padding: 0 24px;
  height: 56px;
  font-size: ${props => props.theme.fontSize.giant};
  line-height: ${props => props.theme.lineHeight.giant};
`

GiantButton.propTypes = {
  status: PropTypes.oneOf(['primary', 'success', 'info', 'danger', 'warning', 'transparent'])
}

export const LargeButton = styled(BaseButton)`
  padding: 0 20px;
  height: 48px;
  font-size: ${props => props.theme.fontSize.large};
  line-height: ${props => props.theme.lineHeight.large};
`

export const MediumButton = styled(BaseButton)`
  padding: 0 20px;
  height: 36px;
  font-size: 14px;
  line-height: ${props => props.theme.lineHeight.medium};
  border-radius: 6px;
`

export const SmallButton = styled(BaseButton)`
  padding: 0 16px;
  height: 32px;
  font-size: ${props => props.theme.fontSize.small};
  line-height: ${props => props.theme.lineHeight.small};
`

SmallButton.propTypes = {
  status: PropTypes.oneOf(['primary', 'success', 'info', 'danger', 'warning', 'transparent'])
}

export const TinyButton = styled(BaseButton)`
  padding: 0 12px;
  height: 24px;
  font-size: ${props => props.theme.fontSize.tiny};
  line-height: ${props => props.theme.lineHeight.tiny};
`
