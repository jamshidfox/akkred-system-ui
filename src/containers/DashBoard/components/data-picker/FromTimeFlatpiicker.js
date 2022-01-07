import React from 'react'
import { Fragment, useState } from 'react'
import Flatpickr from 'react-flatpickr'
import "flatpickr/dist/themes/material_green.css";


const PickerDefault = () => {
  const [fromTimePicker, setFromTimePicker] = useState(new Date())
  return (
    <Fragment>
      <Flatpickr className='form-control' value={fromTimePicker} onChange={date => setFromTimePicker(date)} id='default-picker' style={{backgroundColor: 'white'}} />
    </Fragment>
  )
}

export default PickerDefault
