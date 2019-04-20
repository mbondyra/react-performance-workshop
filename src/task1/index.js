import React, { Component } from 'react';
import rows from '../countries.json'
import Table from './Table'

const columns = [
  { key: 'name', name: 'Name' },
  { key: 'capital', name: 'Capital' },
  { key: 'flag', name: 'Flag', settings: ['image']},
  { key: 'population', name: 'Population' },
  { key: 'topLevelDomain', name: 'Domain' },
  { key: 'nativeName', name: 'Native Name' },
  { key: 'numericCode', name: 'Numeric Code' },
];


class Task1 extends Component {
  render() {
    return <Table columns={columns} rows={rows} />;
  }
}

export default Task1
