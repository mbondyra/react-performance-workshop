import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import eventCounter from '../../lib/eventCounter'

const HeaderCell = React.memo(({key, name}) => {
  eventCounter('HeaderCell');
  return <th key={key}>{name}</th>
})

class Row extends React.Component {
  shouldComponentUpdate(prevProps){
    return this.props.isSelected || ( prevProps.isSelected !== this.props.isSelected)
  }
  render(){
    eventCounter('Row');
    return <tr>
      {this.props.children}
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

  render() {
    eventCounter('Table')
    const columns = this.props.columns
    return (
      <table>
        <thead>
          <tr>{columns.map(column => <HeaderCell key={column.key} name={column.name}/>)} </tr>
        </thead>
        <tbody>
          {this.props.rows.map((row, rowIdx) => (
            <Row isSelected={rowIdx === this.state.activeRow}>
              {this.props.columns.map((column, columnIdx) => (
              <Cell
                name={row.name}
                content={row[column.key]}
                structure={column.structure}
                rowIdx={rowIdx}
                columnIdx={columnIdx}
                onClick={this.setActiveCell}
                selected={rowIdx === this.state.activeRow && columnIdx === this.state.activeColumn}
                styles={column.styles || emptyStyles}
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
