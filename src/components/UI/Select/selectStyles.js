export default (theme, params) => ({
  control: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: state.isFocused ? theme.palette.white : theme.background.input,
    boxShadow: null,
    borderRadius: theme.borderRadius.input,
    borderColor: state.isFocused
      ? params.error
        ? `${theme.color.danger.default} !important`
        : theme.borderColor.inputFocus
      : theme.borderColor.input,
    transition: theme.transition.primary,
    height: params.height,
    minHeight: params.height ? 'unset' : '48px',
    '&:hover': {
      backgroundColor: state.isFocused
        ? theme.palette.white
        : theme.background.inputHover
      // borderColor: state.isFocused
      //   ? 'red'
      //   : 'transparent'
    }
  }),
  indicatorSeparator: () => ({}),
  loadingIndicator: (provided, state) => ({
    ...provided,
    '& span': {
      background: state.isFocused
        ? theme.text.label
        : theme.text.placeholder
    }
  }),
  clearIndicator: provided => ({
    ...provided,
    color: theme.text.placeholder,
    '&:hover': {
      color: theme.text.label
    }
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    alignItems: 'center',
    color: state.isFocused
      ? params.error
        ? `${theme.color.danger.default} !important`
        : theme.color.primary.default
      : theme.text.placeholder,
    padding: '0 12px',
    transition: 'color 300ms, transform 150ms',
    transform: params.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
    '&:hover': {
      color: theme.text.label
    }
  }),
  menuPortal: provided => ({
    ...provided,
    zIndex: 1500
  }),
  menu: provided => ({
    ...provided,
    border: '1px solid',
    boxShadow: 'none',
    borderColor: theme.borderColor.input,
    borderRadius: theme.borderRadius,
    margin: '0',
    top: 'calc(100% + 4px)'
  }),
  menuList: provided => ({
    ...provided,
    padding: '7px'
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    background: state.isSelected
      ? '#EBECFC'
      : state.isFocused
        ? '#F5F6FD'
        : 'none',
    borderRadius: theme.borderRadius,
    color: 'inherit',
    cursor: 'pointer',
    padding: '12px',
    transition: theme.transition.primary,
    '&:active': {
      background: '#F5F6FD'
    }
  }),
  valueContainer: (provided, state) => {
    const isMultiWithValues = state.hasValue && state.isMulti
    return {
      ...provided,
      padding: isMultiWithValues ? '4px' : '0 20px'
    }
  },
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    color: state.isDisabled ? theme.color.disabled : 'inherit'
  }),
  placeholder: provided => ({
    ...provided,
    color: theme.text.placeholder,
    fontSize: '14px',
    margin: '0'
  }),
  noOptionsMessage: provided => ({
    ...provided,
    fontSize: '14px',
    color: theme.text.placeholder
  }),
  loadingMessage: provided => ({
    ...provided,
    color: theme.text.placeholder
  }),

  multiValue: (provided, state) => {
    const hasValueFocused = state.hasValue && params.menuIsOpen
    return {
      ...provided,
      color: state.isDisabled ? theme.color.disabled : 'inherit',
      backgroundColor: hasValueFocused
        ? theme.input.backgroundColor
        : '#FAFBFB',
      border: '1px solid transparent',
      borderColor: theme.color.basic.default,
      borderRadius: theme.borderRadius,
      transition: theme.transition.primary,
      margin: '4px',
      '&:hover': {
        borderColor: theme.borderColor.input
      }
    }
  },
  multiValueLabel: provided => ({
    ...provided,
    fontSize: 'inherit',
    padding: '7px 0',
    paddingLeft: '12px',
    paddingRight: '6px'
  }),
  multiValueRemove: provided => ({
    ...provided,
    alignSelf: 'center',
    borderRadius: '50%',
    color: theme.text.placeholder,
    cursor: 'pointer',
    justifyContent: 'center',
    paddingLeft: '0',
    paddingRight: '0',
    marginRight: '12px',
    transition: theme.transition.primary,
    height: '20px',
    width: '20px',
    '&:hover': {
      backgroundColor: '#8591A3',
      color: 'white'
    },
    '& svg': {
      height: '16px',
      width: '16px'
    }
  })
})
