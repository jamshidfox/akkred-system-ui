import React from 'react'
import { Fragment, useState } from 'react'
import Flatpickr from 'react-flatpickr'
import "flatpickr/dist/themes/material_green.css";


const PickerDefault = () => {
  const [toTimePicker, setToTimePicker] = useState(new Date())
  return (
    <Fragment>
      <Flatpickr className='form-control' value={toTimePicker} onChange={date => setToTimePicker(date)} id='default-picker' style={{backgroundColor: 'white'}}/>
    </Fragment>
  )
}

export default PickerDefault
