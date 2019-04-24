import React, { Component } from 'react'
import PropTypes from 'prop-types'

const HeaderCell = ({column}) => <th key={column.key}>{column.name}</th>

const Row = ({row, columns}) => <tr key={row.id}>{columns.map(column =>
  <Cell row={row} column={column} styles={column.styles || {}}/>)}
</tr>

const Cell = ({row, column, styles}) => (
  <td key={column.key}>
    {
      column.structure === 'image'
      ? <img src={row[column.key]} style={styles} alt={row.name}/>
      : row[column.key]
    }
  </td>
)

class Table extends Component {
  static propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array,
  }

  render() {
    return (
      <table>
        <thead>
          <tr>{this.props.columns.map(column => <HeaderCell column={column}/>)} </tr>
        </thead>
        <tbody>{this.props.rows.map(row=> <Row row={row} columns={this.props.columns}/>)}</tbody>
      </table>
    )
  }
}

export default Table
