import React, { PureComponent } from 'react'

const HeaderCell = React.memo(({name, onClick}) => {
  return <th onClick={onClick}>{name}</th>
})


const emptyStyles = {}

class Row extends PureComponent {
  render(){
    return <tr>
      {this.props.columns.map((column, columnIdx) => (
        <Cell
          key={columnIdx}
          row={this.props.row}
          column={column}
          styles={column.styles || emptyStyles}
        />
      ))}
    </tr>
  }
}
class Cell extends PureComponent {
  render(){
    const {row, column, styles}= this.props
    return (
      <td>
        { column.structure === 'image' ? <img src={row[column.key]} style={styles} alt={row.name}/> : row[column.key] }
      </td>
    )
  }
}
class Table extends PureComponent {
  state = { highlightEverySecondRow: false }

  toggleHighlightEverySecondRow = () => {
    this.setState({highlightEverySecondRow: !this.state.highlightEverySecondRow})
  }

  render() {
    const columns = this.props.columns
    return (
      <table className={this.state.highlightEverySecondRow ? 'highlighted': ''}>
        <thead>
          <tr>
            {
              columns.map((column, columnIdx) => (
                <HeaderCell
                  key={columnIdx}
                  name={column.name}
                  onClick={this.toggleHighlightEverySecondRow}
                />
              ))
            }
          </tr>
        </thead>
        <tbody>
          {this.props.rows.map((row, rowIdx) =>  (
            <Row key={rowIdx} row={row} columns={columns}/>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Table
