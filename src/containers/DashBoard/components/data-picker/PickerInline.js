import React from 'react'
import { Fragment, useState } from 'react'
import { Label } from 'reactstrap'
import Flatpickr from 'react-flatpickr'
require('flatpickr/dist/themes/airbnb.css')
;<link
  rel="stylesheet"
  type="text/css"
  href="https://npmcdn.com/flatpickr/dist/themes/airbnb.css"
/>
const PickerInline = () => {
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label for="inline-picker">Davrni tanlang</Label>
      <Flatpickr
        className="form-control"
        value={picker}
        id="range-picker"
        options={{ inline: true }}
        onChange={(date) => setPicker(date)}
        options={{
          mode: 'range',
        }}
        style={{ backgroundColor: 'rgb(241,243,245)', color: 'rgb(190,194,201)' }}
      />
    </Fragment>
  )
}

export default PickerInline
