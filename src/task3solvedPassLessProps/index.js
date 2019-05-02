import React, { PureComponent } from 'react'

import eventCounter from '../lib/eventCounter'

const HeaderCell = React.memo(({name}) => {
  eventCounter('HeaderCell');
  return <th>{name}</th>
})

const emptyStyles = {}

const Row = React.memo(({row, rowIdx, columns, onCellClick, selectedCell}) => {
  eventCounter('Row');
  return <tr>{columns.map((column, columnIdx) =>
    <Cell
      key={columnIdx}
      name={row.name}
      content={row[column.key]}
      rowIdx={rowIdx}
      columnIdx={columnIdx}
      column={column}
      onClick={onCellClick}
      selected={selectedCell === columnIdx}
    />)}
  </tr>
})

const Cell =  React.memo(({name, content, rowIdx, column, columnIdx, onClick, selected})  => {
  eventCounter('Cell')
  return (
    <td onClick = {()=>onClick(rowIdx, columnIdx)} className={selected ? 'selected' : ''}>
      { column.structure === 'image' ? <img src={content} style={column.styles} alt={name}/> : content }
    </td>
  )
})


class Table extends PureComponent {


  state = {
    activeRow: null,
    activeColumn: null
  }

  setActiveCell = (activeRow, activeColumn) => {
    this.setState({activeRow, activeColumn})
  }

  render() {
    eventCounter('Table')
    const columns = this.props.columns
    return (
      <table>
        <thead>
          <tr>{columns.map(column => <HeaderCell key={column.key} name={column.name}/>)}</tr>
        </thead>
        <tbody>
        {this.props.rows.map((row, rowIdx)=>
          <Row
            key={rowIdx}
            row={row}
            columns={this.props.columns}
            rowIdx={rowIdx}
            selectedCell={this.state.activeRow === rowIdx && this.state.activeColumn}
            onCellClick={this.setActiveCell}
          />
        )}
        </tbody>
      </table>
    )
  }
}

export default Table
