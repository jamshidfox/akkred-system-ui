import React from 'react'
// import react from '@src/assets/images/icons/react.svg'
// import vuejs from '@src/assets/images/icons/vuejs.svg'
// import angular from '@src/assets/images/icons/angular.svg'
// import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import { Edit, Trash } from 'react-feather'
import { Table, Badge, DropdownItem } from 'reactstrap'

const TableBasic = () => {
  return (
    <Table responsive className='mt-3'>
      <thead>
        <tr>
          <th>No</th>
          <th>Korhona nomi</th>
          <th>Olingan raqami</th>
          <th>Elektron manzil</th>
          <th>Telefon</th>
          <th>Harakatlar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {/* <img className='mr-75' src={angular} alt='angular' height='20' width='20' /> */}
            <span className='align-middle font-weight-bold'>1</span>
          </td>
          <td>Korhona 1</td>
          <td>1912</td>
          <td>a.kakharov@gmail.com</td>
          <td>+998934192077</td>
          <td className='d-flex justify-content-start'>
            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Trash className='mr-50' size={15} /> 
            </DropdownItem>
            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> 
            </DropdownItem>
          </td>
        </tr>
        <tr>
          <td>
            {/* <img className='mr-75' src={react} alt='react' height='20' width='20' /> */}
            <span className='align-middle font-weight-bold'>2</span>
          </td>
          <td>Korhona 2</td>
          <td>204</td>
          <td>sanjarniyazo.@gmail.com</td>
          <td>+998934981877</td>
          <td className='d-flex justify-content-center'>
            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Trash className='mr-50' size={15} /> 
            </DropdownItem>
            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> 
            </DropdownItem>
          </td>
        </tr>
        <tr>
          <td>
            {/* <img className='mr-75' src={vuejs} alt='vuejs' height='20' width='20' /> */}
            <span className='align-middle font-weight-bold'>3</span>
          </td>
          <td>Korhona 3</td>
          <td>809</td>
          <td>bobonazarov.s@gmail.com</td>
          <td>+998990054792</td>
          <td className='d-flex justify-content-center'>
            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Trash className='mr-50' size={15} /> 
            </DropdownItem>
            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> 
            </DropdownItem>
          </td>
        </tr>
        <tr>
          <td>
            {/* <img className='mr-75' src={bootstrap} alt='bootstrap' height='20' width='20' /> */}
            <span className='align-middle font-weight-bold'>4</span>
          </td>
          <td>Korhona 4</td>
          <td>198</td>
          <td>inha.university@gmail.com</td>
          <td>+998931237077</td>
          <td className='d-flex justify-content-center'>
            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Trash className='mr-50' size={15} /> 
            </DropdownItem>
            <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> 
            </DropdownItem>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableBasic