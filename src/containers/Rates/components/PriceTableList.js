import React, { Fragment, useState } from 'react'
import { prop, path, range } from 'ramda'
import styled from 'styled-components'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'
import { TableRow, TableCol, TableColRight } from '~/components/Table'
import { InputField } from '~/components/FormField'
import Chev from '~/icons/Chev'

const TableRowHeader = styled(TableRow)`
  background-color: #F2F6FF;
  svg {
    transition: all 300ms;
   transform: ${props => props.active ? 'rotate(180deg)' : 'rotate(0)'};
  }
`

const ExtraRow = styled(TableRowHeader)`
  margin-top: 20px;
  padding: 5px 10px;
`
const ONE = 1
const PriceTableList = props => {
  const { categoryData, fieldName } = props

  const [selected, setSelected] = useState(0)
  const onSelect = id => {
    if (id === selected) {
      return setSelected(0)
    }

    return setSelected(id)
  }
  const list = prop('results', categoryData)

  return <>
    <TableRow header={true} gutter={30}>
      <TableCol span={12}>Классификация номера</TableCol>
      <TableCol span={6}>Резидентам</TableCol>
      <TableColRight span={6}>Не резидентам</TableColRight>
    </TableRow>
    {list.map((category, parentIndex) => {
      const name = path(['category', 'name'], category)
      const capacity = path(['capacity'], category)
      const id = path(['id'], category)
      const parent = path(['category', 'parent', 'name'], category)
      const isSelected = id === selected

      const TO = capacity + ONE
      return (
        <Fragment key={id}>
          <TableRowHeader onClick={() => onSelect(id)} active={isSelected}>
            <TableCol span={23}>{parent} {name}</TableCol>
            <TableCol span={1}><Chev /></TableCol>
          </TableRowHeader>
          {isSelected && range(ONE, TO).map((cap, index) => {
            const prefix = `${fieldName}[${parentIndex}][${index}]`
            return (
              <TableRow key={cap} gutter={30} align="center">
                <TableCol span={12}>
                  {cap}
                  <Field
                    name={`${prefix}[capacity]`}
                    type="hidden"
                    defaultValue={cap}
                    component="input"
                  />
                  <Field
                    name={`${prefix}[hotelRoomCategory]`}
                    type="hidden"
                    defaultValue={id}
                    component="input"
                  />
                </TableCol>

                <TableCol span={6}>
                  <Field
                    name={`${prefix}[localPrice]`}
                    component={InputField}
                  />
                </TableCol>
                <TableCol span={6}>
                  <Field
                    name={`${prefix}[foreignPrice]`}
                    component={InputField}
                  />
                </TableCol>
              </TableRow>
            )
          })}
        </Fragment>
      )
    })}
    <ExtraRow align="center" gutter={30}>

      <TableCol span={12}>Дополнительная койка</TableCol>
      <TableCol span={6}>
        <Field
          name="extraBedLocalPrice"
          component={InputField}
        />

      </TableCol>
      <TableCol span={6}>
        <Field
          name="extraBedForeignPrice"
          component={InputField}
        /></TableCol>
    </ExtraRow>
  </>
}

PriceTableList.defaultProps = {
  fieldName: 'rates'
}
PriceTableList.propTypes = {
  fieldName: PropTypes.string,
  categoryData: PropTypes.object
}
export default PriceTableList
