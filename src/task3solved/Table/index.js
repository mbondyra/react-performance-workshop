import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import eventCounter from '../../lib/eventCounter'

const emptyStyles = {}

const HeaderCell = React.memo(({name}) => {
  eventCounter('HeaderCell')
  return <th>{name}</th>
})

const Row = React.memo(({row, columns, onCellClick, columnSelectedInThisRow, onRemoveClick}) => {
  eventCounter('Row');
  return (
    <tr>
      <td className='trash' onClick={()=> onRemoveClick(row)}>
        <span role='img' aria-label='remove'>🗑️</span>
      </td>
      {columns.map(({key, structure, styles}) =>
        <Cell
          key={key}
          columnKey={key}
          rowKey={row.name}
          name={row.name}
          content={row[key]}
          structure={structure}
          isSelected={columnSelectedInThisRow === key}
          styles={styles || emptyStyles}
          onClick={onCellClick}
        />)}
    </tr>
  )
})

const Cell = React.memo(({name, content, rowKey, structure, columnKey, styles, onClick, isSelected}) => {
  eventCounter('Cell')
  return (
    <td onClick = {() => onClick(rowKey, columnKey)} className={isSelected ? 'selected' : ''}>
      { structure === 'image' ? <img src={content} style={styles} alt={name}/> : content }
    </td>
  )
})


class Table extends PureComponent {
  static propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array,
  }

  state = {
    activeRow: null,
    activeColumn: null,
    rows: this.props.rows,
    columns: this.props.columns
  }

  setActiveCell = (activeRow, activeColumn) => {
    this.setState({activeRow, activeColumn})
  }

  removeRow = rowToDelete => {
    this.setState({rows: this.state.rows.filter(row => row !== rowToDelete)})
  }

  render() {
    eventCounter('Table')
    const {rows, columns} = this.state
    return (
      <table>
        <thead>
          <tr>
            <th>Actions</th>
            {columns.map(
              column => <HeaderCell key={column.key} name={column.name}/>
            )}
          </tr>
        </thead>
        <tbody>
        {rows.map( row =>
          <Row
            key={row.name}
            rowId={row.name}
            row={row}
            columns={columns}
            columnSelectedInThisRow={this.state.activeRow === row.name ? this.state.activeColumn : undefined}
            onCellClick={this.setActiveCell}
            onRemoveClick={this.removeRow}
          />
        )}
        </tbody>
      </table>
    )
  }
}

export default Table
