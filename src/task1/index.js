import React, { Component } from 'react';
import rows from '../lib/countries.json'
import Table from './Table'




class Task1 extends Component {
  render() {
    const columns = [
      { key: 'name', name: 'Name' },
      { key: 'capital', name: 'Capital' },
      { key: 'flag', name: 'Flag', structure: 'image', styles: {width:'100px'}},
      { key: 'population', name: 'Population' },
      { key: 'topLevelDomain', name: 'Domain', structure: 'array' },
      // { key: 'nativeName', name: 'Native Name' },
      { key: 'numericCode', name: 'Numeric Code' },
      { key: 'region', name: 'region'},
      { key: 'subregion', name: 'Subregion' },
      { key: 'demonym', name: 'Demonym' },
      { key: 'area', name: 'Area' },
      //{ key: 'currencies', name: 'Currency' },
      { key: 'borders', name: 'Borders', structure: 'array' },
    ]
    return <Table columns={columns} rows={rows} />;
  }
}

export default Task1
