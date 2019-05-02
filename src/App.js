import React, { Component } from 'react'
import Task from './task0'
import rows from './lib/countriesAll.json'

class App extends Component {
  state = {
    toggle: true
  }

  handleToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
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
    ]

    return (
      <main className={this.state.toggle ? 'night': 'day'}>
        <button type="button" onClick={this.handleToggle} >
          {this.state.toggle ? 'light theme' : 'dark theme'}
        </button>
        <Task columns={columns} rows={rows} />
      </main>
    );
  }
}

export default App
