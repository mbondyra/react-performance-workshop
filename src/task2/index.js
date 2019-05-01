import React, { PureComponent } from 'react'

import eventCounter from '../lib/eventCounter'

const HeaderCell = ({key, name}) => {
  eventCounter('HeaderCell');
  return <th key={key}>{name}</th>
}

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
    const {row, rowIdx, column, columnIdx, styles, onClick, activeCell}= this.props
    eventCounter('Cell')
    const selected = rowIdx === activeCell[0] && columnIdx === activeCell[1]
    return (
      <td onClick = {()=>onClick(rowIdx, columnIdx)} className={selected ? 'selected' : ''}>
        { column.structure === 'image' ? <img src={row[column.key]} style={styles} alt={row.name}/> : row[column.key] }
      </td>
    )
  }

}

class Table extends PureComponent {
  state={
    activeRow: null,
    activeColumn: null
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
                column={column}
                activeCell={[this.state.activeRow, this.state.activeColumn]}
                rowIdx={rowIdx}
                columnIdx={columnIdx}
                onClick={(activeRow, activeColumn) => this.setState({activeRow, activeColumn})}
                styles={column.styles || {}}
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
