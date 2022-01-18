import React from 'react'
import { Fragment, useState } from 'react'
import Flatpickr from 'react-flatpickr'
import { Label } from 'reactstrap'
import 'flatpickr/dist/themes/material_green.css'

const PickerDefault = (props) => {
  const [toTimePicker, setToTimePicker] = useState(new Date())
  return (
    <Fragment>
      <Label>{props.title}</Label>
      <Flatpickr
        className="form-control"
        value={toTimePicker}
        onChange={(date) => setToTimePicker(date)}
        id="default-picker"
        style={{ backgroundColor: 'rgb(241,243,245)', color: 'rgb(190,194,201)' }}
      />
    </Fragment>
  )
}

export default PickerDefault
