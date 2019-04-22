import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import eventCounter from '../../lib/eventCounter'

//pass less props

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
      structure={column.structure}
      onClick={onCellClick}
      selected={selectedCell === columnIdx}
      styles={column.styles || emptyStyles}
    />)}
  </tr>
})

// const Cell = React.memo(({name, rowIdx, content, columnIdx, styles, onClick, isSelected, structure}) => {
//   eventCounter('Cell')
//   return <td onClick = {()=>onClick(rowIdx, columnIdx)} className={isSelected ? 'selected' : ''}>
//     {
//       structure === 'image'
//       ? <img src={content} style={styles} alt={name}/>
//       : content
//     }
//   </td>
// })

const Cell =  React.memo(({name, content, rowIdx, structure, columnIdx, styles, onClick, selected})  => {
  eventCounter('Cell')
  return (
    <td onClick = {()=>onClick(rowIdx, columnIdx)} className={selected ? 'selected' : ''}>
      { structure === 'image' ? <img src={content} style={styles} alt={name}/> : content }
    </td>
  )
})


class Table extends PureComponent {
  static propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array,
  }

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
