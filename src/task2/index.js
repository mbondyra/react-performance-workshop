import React, { Component } from 'react';
import rows from '../lib/countriesAll.json'
import Table from './Table'

const columns = [
  { key: 'name', name: 'Name' },
  { key: 'capital', name: 'Capital' },
  { key: 'flag', name: 'Flag', structure: 'image', styles: {width:'100px'}},
  { key: 'population', name: 'Population' },
  { key: 'topLevelDomain', name: 'Domain', structure: 'array' },
  { key: 'numericCode', name: 'Numeric Code' },
  { key: 'region', name: 'region'},
  { key: 'subregion', name: 'Subregion' },
  { key: 'demonym', name: 'Demonym' },
  { key: 'area', name: 'Area' },
  { key: 'borders', name: 'Borders', structure: 'array' },
  //{ key: 'currencies', name: 'Currency' },
  // { key: 'nativeName', name: 'Native Name' },
];


class Task1 extends Component {
  render() {
    return <Table columns={columns} rows={rows} />;
  }
}

export default Task1
