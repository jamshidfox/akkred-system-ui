// Const
const primaryColor = '#2f80ed'
const orangeColor = '#f96526'
const redColor = '#eb5757'
const primaryBorderColor = '#e4e9f2'
const inputBorderColor = '#e4e5eb'
const buttonBorderColor = '#ced0dd'

// Theme
export default {
  palette: {
    primary: primaryColor,
    secondary: '#eaf2fd',
    orange: orangeColor,
    black: '#000',
    white: '#fff',
    red: redColor,
    green: '#219653'
  },
  text: {
    primary: '#2c3a50',
    secondary: '#7d8893',
    title: '#36434e',
    label: '#8f9bb0',
    tableHead: '#bdbdbd',
    placeholder: '#b2b7bf'
  },
  background: {
    linkHover: '#eaf2fd',
    buttonSecondary: '#fbfbfc',
    input: '#f1f3f5',
    inputHover: '#edf1f7',
    tableHead: '#fbfbfd',
    tableOdd: '#f1f3f5',
    tableHover: '#edf1f7',
    thumb: '#ccc'
  },
  border: {
    primary: `1px solid ${primaryBorderColor}`,
    input: `1px solid ${inputBorderColor}`,
    inputFocus: `1px solid ${primaryColor}`,
    button: `1px solid ${buttonBorderColor}`
  },
  borderColor: {
    primary: primaryBorderColor,
    input: inputBorderColor,
    inputFocus: primaryColor,
    button: buttonBorderColor
  },
  borderRadius: {
    primary: '6px',
    table: '8px',
    input: '6px',
    button: '10px'
  },
  boxShadow: {
    primary: '0 2px 15px rgba(211, 216, 224, 0.5)'
  },
  width: {
    thumb: '3px',
    mainMenu: {
      open: '296px',
      close: '60px'
    },
  },
  height: {
    thumb: '3px'
  },
  transition: {
    primary: 'all .2s ease-in-out'
  },
  // Legacy styles
  color: {
    disabled: '#8F9BB3',
    secondary: {
      default: '#2E3A59',
      hover: '#EFEFEF',
      active: 'transparent',
      focus: '#EFEFED',
    },
    basic: {
      default: '#8F9BB3',
      hover: '#598BFF',
      active: '#274BDB',
      focus: '#274BDB'
    },
    primary: {
      default: '#3366FF',
      hover: '#598BFF',
      active: '#274BDB',
      focus: '#274BDB'
    },
    success: {
      default: '#00E096'
    },
    transparent: {
      default: 'transparent',
      hover: '#efefef'
    },
    info: { default: primaryColor },
    warning: { default: orangeColor },
    danger: { default: redColor }
  },
  fontSize: {
    giant: '18px',
    large: '16px',
    medium: '14px',
    small: '12px',
    tiny: '10px'
  },
  lineHeight: {
    giant: '22px',
    large: '18px',
    medium: '14px',
    small: '14px',
    tiny: '10px'
  }
}
