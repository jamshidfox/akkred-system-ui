export default (theme, params) => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'white' : theme.input.background,
    boxShadow: null,
    borderRadius: theme.borderRadius,
    borderColor: state.isFocused
      ? params.error
        ? `${theme.color.danger.default} !important`
        : theme.color.primary.default
      : theme.input.borderColor,
    transition: theme.transition,
    height: params.height,
    minHeight: params.height ? 'unset' : '48px',
    '&:hover': {
      backgroundColor: state.isFocused
        ? 'white'
        : theme.input.backgroundColorHover,
      borderColor: state.isFocused ? theme.color.primary.default : theme.input.backgroundColorHover
    }
  }),
  indicatorSeparator: () => ({}),
  loadingIndicator: (provided, state) => ({
    ...provided,
    '& span': {
      background: state.isFocused
        ? theme.input.labelColor
        : theme.input.placeholderColor
    }
  }),
  clearIndicator: provided => ({
    ...provided,
    color: theme.input.placeholderColor,
    '&:hover': {
      color: theme.input.labelColor
    }
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    alignItems: 'center',
    color: state.isFocused
      ? params.error
        ? `${theme.color.danger.default} !important`
        : theme.color.primary.default
      : theme.input.placeholderColor,
    padding: '0 12px',
    transition: 'color 300ms, transform 150ms',
    transform: params.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
    '&:hover': {
      color: theme.input.labelColor
    }
  }),
  menuPortal: provided => ({
    ...provided,
    zIndex: 1500
  }),
  menu: provided => ({
    ...provided,
    border: '1px solid',
    borderColor: theme.input.borderColor,
//    boxShadow: theme.cube.boxShadow,
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
    background: state.isSelected
      ? '#EBECFC'
      : state.isFocused
        ? '#F5F6FD'
        : 'none',
    borderRadius: theme.borderRadius,
    color: 'inherit',
    cursor: 'pointer',
    padding: '12px',
    transition: theme.transition,
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
  singleValue: provided => ({
    ...provided,
    fontSize: '15px',
    color: 'inherit'
  }),
  placeholder: provided => ({
    ...provided,
    color: theme.input.placeholderColor,
    fontSize: '15px',
    margin: '0'
  }),
  noOptionsMessage: provided => ({
    ...provided,
    color: theme.input.placeholderColor
  }),
  loadingMessage: provided => ({
    ...provided,
    color: theme.input.placeholderColor
  }),

  multiValue: (provided, state) => {
    const hasValueFocused = state.hasValue && params.menuIsOpen
    return {
      ...provided,
      backgroundColor: hasValueFocused
        ? theme.input.backgroundColor
        : '#FAFBFB',
      border: '1px solid transparent',
      borderRadius: theme.input.borderRadius,
      transition: theme.cube.transition,
      margin: '4px',
      '&:hover': {
        borderColor: theme.input.borderColor
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
    color: theme.input.placeholderColor,
    cursor: 'pointer',
    justifyContent: 'center',
    paddingLeft: '0',
    paddingRight: '0',
    marginRight: '12px',
    transition: theme.transition,
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
