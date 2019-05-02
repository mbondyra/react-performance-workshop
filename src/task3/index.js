import React, { PureComponent } from 'react'

import eventCounter from '../lib/eventCounter'

const HeaderCell = React.memo(({key, name}) => {
  eventCounter('HeaderCell');
  return <th key={key}>{name}</th>
})

class Row extends React.Component {
  render(){
    eventCounter('Row');
    return <tr>
      {this.props.children}
    </tr>
  }
}
class Cell extends PureComponent {
  render(){
    eventCounter('Cell')
    const {row, rowIdx, column, columnIdx, onClick, activeCell}= this.props
    const selected = rowIdx === activeCell[0] && columnIdx === activeCell[1]
    return (
      <td onClick = {()=>onClick(rowIdx, columnIdx)} className={selected ? 'selected' : ''}>
        { column.structure === 'image' ? <img src={row[column.key]} style={column.styles} alt={row.name}/> : row[column.key] }
      </td>
    )
  }
}

class Table extends PureComponent {
  state={
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
          <tr>{columns.map(column => <HeaderCell key={column.key} name={column.name}/>)} </tr>
        </thead>
        <tbody>
          {this.props.rows.map((row, rowIdx) =>  (
            <Row key={rowIdx}>
              {this.props.columns.map((column, columnIdx) => (
              <Cell
                row={row}
                rowIdx={rowIdx}
                column={column}
                columnIdx={columnIdx}
                activeCell={[this.state.activeRow, this.state.activeColumn]}
                onClick={this.setActiveCell}
              />
              ))}
            </Row>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Table
