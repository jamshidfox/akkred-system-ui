// Const
const primaryColor = '#2f80ed'

// Theme
export default {
  palette: {
    primary: primaryColor,
    secondary: '#eaf2fd',
    orange: '#f96526',
    black: '#000',
    white: '#fff',
    red: '#eb5757',
    green: '#219653'
  },
  text: {
    primary: '#2c3a50',
    secondary: '#7d8893',
    title: '#36434e',
    tableHead: '#bdbdbd'
  },
  background: {
    linkHover: '#eaf2fd',
    buttonSecondary: '#fbfbfc',
    input: '#fbfbfc',
    inputHover: '#edf1f7',
    tableHead: '#fbfbfd',
    tableOdd: '#f1f3f5',
    tableHover: '#edf1f7',
    thumb: '#ccc'
  },
  transition: {
    primary: 'all .2s ease-in-out'
  },
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
    info: { default: '#0095FF' },
    warning: { default: '#FFAA00' },
    danger: { default: '#FF3D71' }
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
  },
  input: {
    placeholderColor: '#8F9BB3',
    backgroundColorHover: '#EDF1F7',
    labelColor: '#8992A3',
    border: '1px solid #E4E9F2',
    borderColor: '#E4E9F2',
    background: '#fff'
  },
  border: {
    primary: '1px solid #e4e9f2',
    input: '1px solid #e4e5eb',
    inputFocus: `1px solid ${primaryColor}`,
    button: '1px solid #ced0dd'
  },
  borderColor: '#E4E9F2',
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
  }
}
