import React from 'react'
import { Table, Badge, DropdownItem } from 'reactstrap'

const ShartNomaTableBasics = () => {
  return (
    <Table responsive className='mt-3'>
      <thead>
        <tr>
          <th>No</th>
          <th>Korhona nomi</th>
          <th>Elektron manzil</th>
          <th>Telefon</th>
          <th>To'lov</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {/* <img className='mr-75' src={angular} alt='angular' height='20' width='20' /> */}
            <span className='align-middle font-weight-bold'>1</span>
          </td>
          <td>Korhona 1</td>
          <td>a.kakharov@gmail.com</td>
          <td>+998934192077</td>
          <td>450$</td>
        </tr>
        <tr>
          <td>
            {/* <img className='mr-75' src={react} alt='react' height='20' width='20' /> */}
            <span className='align-middle font-weight-bold'>2</span>
          </td>
          <td>Korhona 2</td>
          <td>sanjarniyazo.@gmail.com</td>
          <td>+998934981877</td>
          <td>200$</td>
        </tr>
        <tr>
          <td>
            {/* <img className='mr-75' src={vuejs} alt='vuejs' height='20' width='20' /> */}
            <span className='align-middle font-weight-bold'>3</span>
          </td>
          <td>Korhona 3</td>
          <td>bobonazarov.s@gmail.com</td>
          <td>+998990054792</td>
          <td>350$</td>
        </tr>
        <tr>
          <td>
            {/* <img className='mr-75' src={bootstrap} alt='bootstrap' height='20' width='20' /> */}
            <span className='align-middle font-weight-bold'>4</span>
          </td>
          <td>Korhona 4</td>
          <td>inha.university@gmail.com</td>
          <td>+998931237077</td>
          <td>500$</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ShartNomaTableBasics