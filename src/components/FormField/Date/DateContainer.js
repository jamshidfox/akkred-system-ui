import styled from 'styled-components'

export default styled('div')`  
  & .DateInput_input {
    background-color: ${props => props.theme.input.background};
    border-radius: ${props => props.theme.borderRadius};
    border: ${props => props.theme.input.border}
    font-family: inherit;
    font-size: 15px;
    font-weight: 400;
    height: ${props => props.height}px;
    padding: 0 20px;
    transition: background-color 200ms;
  }
  
  & .DateInput_input::placeholder {
    color: ${props => props.theme.input.placeholderColor};
  }

  & .DateInput_input:hover {
    background-color: ${props => props.theme.input.backgroundColorHover};
  }
  
  & .SingleDatePickerInput__showClearDate {
    padding-right: 0;
  }
  & .SingleDatePickerInput_clearDate {
    right: 36px;
    width: 38px;
    margin-left: 5px;

    :hover{
    background: ${props => props.theme.input.backgroundColorHover};    
    }
    border-radius: 50%;
  }
  & .SingleDatePickerInput_calendarIcon {
    position: absolute;
    z-index: 1; 
    top: 50%;
    margin-left: 5px;
    transform: translateY(-50%);
    right: 0;
    :hover {
    background: ${props => props.theme.input.backgroundColorHover};
    border-radius: 50%;
    }
  }
  
  & .SingleDatePicker_picker {
        z-index: 2
    }
  
  & .DateInput__disabled {
    background: transparent
  }
`
