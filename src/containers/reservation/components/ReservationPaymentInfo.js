import React, { useState } from 'react'
import { Input } from '../../../components/UI/Input'
import { MediumButton } from '../../../components/UI/Buttons'
import { FieldWrapper } from '../../../components/StyledElems'

const ZERO = ''
const ReservationPaymentInfo = props => {
  const { onSubmit } = props
  const [discount, setDiscount] = useState(ZERO)
  const onChange = ev => {
    setDiscount(ev.target.value)
  }
  return (
    <div >
      <FieldWrapper>
        <Input label="скидка" value={discount} onChange={onChange} />
      </FieldWrapper>
      <MediumButton float="right" onClick={() => onSubmit(discount)}>Сохранить</MediumButton>
    </div>
  )
}

export default ReservationPaymentInfo
