import styled from 'styled-components'

export default styled('div')`  
  & .DateInput_input {
    background-color: ${({ theme }) => theme.background.input};
    border-radius: ${props => props.theme.borderRadius.primary};
    border: ${({ theme }) => theme.border.input}
    font-family: inherit;
    font-size: 15px;
    font-weight: 400;
    height: ${props => props.height}px;
    padding: 0 20px;
    transition: background-color 200ms;
  }
  
  & .DateInput_input::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }

  & .DateInput_input:hover {
    background-color: ${({ theme }) => theme.background.inputHover};
  }
  
  & .SingleDatePickerInput__showClearDate {
    padding-right: 0;
  }
  & .SingleDatePickerInput_clearDate {
    right: 36px;
    width: 38px;
    margin-left: 5px;

    :hover{
    background: ${({ theme }) => theme.background.inputHover};    
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
    background: ${({ theme }) => theme.background.inputHover};
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
