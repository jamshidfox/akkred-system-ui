import React from 'react'
import { useState } from 'react'
import { Table } from 'reactstrap'

const ShartNomaTableBasics = (props) => {
  const dataForTable = props.dataForTable

  if (dataForTable.length !== 0) {
    return (
      <Table responsive className="mt-3 " hover>
        <thead>
          <tr>
            {dataForTable.tableHeader.map((data) => (
              <th>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataForTable.tableBody.map((data) => (
            <tr>
              {data.map((tds) => (
                <td>{tds}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    )
  } else {
    return 1
  }
}

export default ShartNomaTableBasics
