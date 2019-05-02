import React, { PureComponent, Suspense } from 'react'
import eventCounter from '../lib/eventCounter'
import { FixedSizeList as List } from 'react-window'
import _ from 'lodash'

const Map = React.lazy(() => import('../map'))

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


  state = {
    activeRow: null,
    activeColumn: null,
    rows: this.props.rows,
    latLng: null
  }

  getLatLng = () => {
    return (this.state.rows.find(row => row.name === this.state.activeRow )||{}).latlng
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

    const row = this.state.rows[index-1]
    return <Row
      style={style}
      key={row.name}
      rowId={row.name}
      row={row}
      columns={this.props.columns}
      columnSelectedInThisRow={this.state.activeRow === row.name ? this.state.activeColumn : undefined}
      onCellClick={this.setActiveCell}
      onRemoveClick={this.removeRow}
      onMapClick={this.loadMap}
    />
  }

  renderHeader(){
    return <div className='row header'>
      <div className='cell headerCell'>Actions</div>
      {
        _.map(this.props.columns, column => <HeaderCell key={column.key} name={column.name}/>)
      }
    </div>
  }

  render() {
    eventCounter('Table')
    const {rows} = this.state
    return (
      <div>
        {this.state.activeColumn === 'name' &&
        <Suspense
          fallback={<div className='mapContainer'>Loading...</div>}>
          <Map latLng={this.getLatLng()} />
        </Suspense>
        }
        <div className='grid'>
          <List
            height={window.innerHeight}
            itemCount={rows.length}
            itemSize={90}
            width={1000}
            itemData={[this.state.activeRow, this.state.activeColumn]}
          >
            {this.renderRow}
          </List>
        </div>
      </div>
    )
  }
}

export default Table
