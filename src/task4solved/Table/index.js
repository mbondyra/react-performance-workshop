import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import eventCounter from '../../lib/eventCounter'
import { FixedSizeList as List } from 'react-window'

const emptyStyles = {}

const HeaderCell = React.memo(({name}) => {
  eventCounter('HeaderCell')
  return <div className='cell headerCell'>{name}</div>
})

const Row = React.memo(({style, row, columns, onCellClick, columnSelectedInThisRow, onRemoveClick}) => {
  eventCounter('Row');
  return (
    <div className='row' style={style}>
      <div className='trash cell' onClick={()=> onRemoveClick(row)}>
        <span role='img' aria-label='remove'>🗑️</span>
      </div>
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
    </div>
  )
})

const Cell = React.memo(({name, content, rowKey, structure, columnKey, styles, onClick, isSelected}) => {
  eventCounter('Cell')
  return (
    <div onClick = {() => onClick(rowKey, columnKey)} className={isSelected ? ' cell selected' : 'cell'}>
      { structure === 'image' ? <img src={content} style={styles} alt={name}/> : content }
    </div>
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

  renderRow = ({index, style}) => {
    if (index === 0) {
      return this.renderHeader()
    }

    const row = this.state.rows[index+1]
    return <Row
      style={style}
      key={row.name}
      rowId={row.name}
      row={row}
      columns={this.props.columns}
      columnSelectedInThisRow={this.state.activeRow === row.name ? this.state.activeColumn : undefined}
      onCellClick={this.setActiveCell}
      onRemoveClick={this.removeRow}
    />
  }

  renderHeader(){
    return <div className='row header'>
      <div className='cell headerCell'>Actions</div>
      {
        this.props.columns.map(
          column => <HeaderCell key={column.key} name={column.name}/>
        )
      }
    </div>
  }

  render() {
    eventCounter('Table')
    const {rows} = this.state
    return (
      <div className='grid'>
        <List
          height={window.innerHeight}
          itemCount={rows.length + 1}
          itemSize={90}
          width={1000}
          itemData={[this.state.activeRow, this.state.activeColumn]}
        >
          {this.renderRow}
        </List>
      </div>
    )
  }
}

export default Table
