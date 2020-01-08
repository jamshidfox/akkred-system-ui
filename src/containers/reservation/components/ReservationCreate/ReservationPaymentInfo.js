import React from 'react'
import { InputField, Field } from '../../../../components/FormField'
import { MediumButton } from '../../../../components/UI/Buttons'
import { FieldWrapper } from '../../../../components/StyledElems'

const ReservationPaymentInfo = props => {
  return (
    <div >
      <FieldWrapper>
        <Field
          name="discount"
          component={InputField}
        />
      </FieldWrapper>
      <MediumButton float="right" type="submit">Сохранить</MediumButton>
    </div>
  )
}

export default ReservationPaymentInfo
