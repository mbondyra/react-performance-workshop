import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RenderCount from '../RenderCount'

const renderCount = new RenderCount()

const HeaderCell = ({key, name}) => {
  renderCount.add('headercell')
  return <th key={key}>{name}</th>
}

const Row = ({row, columns}) => {
  renderCount.add('row')
  return <tr key={row.id}>{columns.map(column =>
    <Cell row={row} column={column} styles={column.styles || {}}/>)}
  </tr>
}

const Cell = ({row, column, styles})  => {
  renderCount.add('cell')
  return <td key={column.key}>
    {
      column.structure === 'image'
      ? <img src={row[column.key]} style={styles} alt={row.name}/>
      : row[column.key]
    }
  </td>
}

class Table extends PureComponent {
  static propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array,
  }

  render() {
    renderCount.add('table')
    renderCount.display()
    return (
      <table>
        <thead>
          <tr>{this.props.columns.map(column => <HeaderCell key={column.key} name={column.name}/>)} </tr>
        </thead>
        <tbody>{this.props.rows.map(row=> <Row row={row} columns={this.props.columns}/>)}</tbody>
      </table>
    )
  }
}

export default Table
