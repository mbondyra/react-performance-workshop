import React, { Component } from 'react'

const HeaderCell = ({name}) => <th>{name}</th>

const Row = ({row, columns}) => <tr>{columns.map(column =>
  <Cell key={column.key} row={row} column={column} styles={column.styles || {}}/>)}
</tr>

const Cell = ({row, column, styles}) => (
  <td>
    {
      column.structure === 'image'
      ? <img src={row[column.key]} style={styles} alt={row.name}/>
      : row[column.key]
    }
  </td>)

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>{this.props.columns.map(column => <HeaderCell key={column.key} name={column.name}/>)}</tr>
        </thead>
        <tbody>{this.props.rows.map(row=> <Row key={row.name} row={row} columns={this.props.columns}/>)}</tbody>
      </table>
    )
  }
}

export default Table
