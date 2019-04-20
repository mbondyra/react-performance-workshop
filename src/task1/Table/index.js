import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledTable = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  th, td {
    border: 1px solid white;
    padding: 13px 10px 11px;
    text-align: left;
    user-select: none;
  }

  tbody td.selected {
    background-color: #edf9ff;
    box-shadow: 1px 0px 0 0 #b3def4, 0px 1px 0 0 #b3def4, 0px 0px 0 0 #b3def4, 1px 1px 0 0 #b3def4;
  }
`

const HeaderCell = ({column}) => <th key={column.key}>{column.name}</th>

const Row = ({row, columns}) => <tr key={row.id}>{columns.map(column =>
    <Cell row={row} column={column} settings={column.settings || []}/>)}
  </tr>

const Cell = ({row, column, settings}) => (
  <td key={column.key}>
    {
      settings.indexOf('image') > -1
      ? <img src={row[column.key]} style={{width: '100px'}}/>
      : row[column.key]
    }
  </td>
)

class Table extends Component {
  static propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array,
  };

  renderCell = (row, column) =>  <td key={column.key}>{row[column.key]}</td>

  render() {
    return (
      <StyledTable>
        <thead>
          <tr>{this.props.columns.map(column => <HeaderCell column={column}/>)} </tr>
        </thead>
        <tbody>{this.props.rows.map(row=> <Row row={row} columns={this.props.columns}/>)}</tbody>
      </StyledTable>
    );
  }
}

export default Table
