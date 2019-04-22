import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import eventCounter from '../../lib/eventCounter'


const HeaderCell = ({key, name}) => {

  eventCounter('HeaderCell');
  return <th key={key}>{name}</th>
}

const Row = ({row, rowIdx, columns, onClick, activeCell}) => {

  eventCounter('Row');
  return <tr key={row.id}>{columns.map((column, columnIdx) =>
    <Cell
      row={row}
      rowIdx={rowIdx}
      column={column}
      columnIdx={columnIdx}
      onClick={onClick}
      activeCell={activeCell}
      styles={column.styles || {}}
    />)}
  </tr>
}

const Cell = ({row, rowIdx, column, columnIdx, styles, onClick, activeCell})  => {
  eventCounter('Cell')
  const selected = rowIdx === activeCell[0] && columnIdx === activeCell[1]
  return <td onClick = {()=>onClick(rowIdx, columnIdx)} className={selected ? 'selected' : ''}>
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

  state={
    activeRow: null,
    activeColumn: null
  }

  render() {
    eventCounter('Table')
    return (
      <table>
        <thead>
          <tr>{this.props.columns.map(column => <HeaderCell key={column.key} name={column.name}/>)} </tr>
        </thead>
        <tbody>{this.props.rows.map((row, rowIdx)=>
          <Row row={row}
            activeCell={[this.state.activeRow, this.state.activeColumn]}
            rowIdx={rowIdx}
            columns={this.props.columns}
            onClick={(activeRow, activeColumn)=>this.setState({activeRow, activeColumn})}/>
          )}
        </tbody>
      </table>
    )
  }
}

export default Table
