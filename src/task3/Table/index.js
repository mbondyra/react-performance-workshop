import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import eventCounter from '../../lib/eventCounter'

//pass less props

const HeaderCell = React.memo(({name}) => {
  eventCounter('HeaderCell');
  return <th>{name}</th>
})

class Row extends React.Component {
  shouldComponentUpdate(prevProps){
    return this.props.isSelected || ( prevProps.isSelected !== this.props.isSelected)
  }
  render(){
    const {children, onRemoveRowClick} = this.props
    eventCounter('Row');
    return <tr>
      <td onClick={(row)=>onRemoveRowClick(row)}>Remove row</td>
      {children}
    </tr>
  }

}

const Cell =  React.memo(({name, content, rowIdx, structure, columnIdx, styles, onClick, selected})  => {
  eventCounter('Cell')
  return (
    <td onClick = {()=>onClick(rowIdx, columnIdx)} className={selected ? 'selected' : ''}>
      { structure === 'image' ? <img src={content} style={styles} alt={name}/> : content }
    </td>
  )
})

const emptyStyles = {}
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

  removeRow = (row) => {

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
          {this.props.rows.map((row, rowIdx) => {
            return <Row key={rowIdx} isSelected={rowIdx === this.state.activeRow} onRemoveClick={this.removeRow}>
              {this.props.columns.map((column, columnIdx) => {
                return <Cell
                key={columnIdx}
                name={row.name}
                content={row[column.key]}
                structure={column.structure}
                rowIdx={rowIdx}
                columnIdx={columnIdx}
                onClick={this.setActiveCell}
                selected={rowIdx === this.state.activeRow && columnIdx === this.state.activeColumn}
                styles={column.styles || emptyStyles}
              />
              })}
            </Row>
          })}
        </tbody>
      </table>
    )
  }
}

export default Table
