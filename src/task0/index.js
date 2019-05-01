import React, { Component } from 'react'

const HeaderCell = ({name}) => <th>{name}</th>

const Row = ({row, columns}) => <tr>{columns.map(column =>
  <Cell key={column.key} row={row} column={column}/>)}
</tr>

const Cell = ({row, column}) => (
  <td>
    {row[column.key]}
  </td>)

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            Map names of columns here. Use component HeaderCell
          </tr>
        </thead>
        <tbody>
          Map rows here. Use component Row
        </tbody>
      </table>
    )
  }
}

export default Table
