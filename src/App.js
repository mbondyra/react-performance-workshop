import React, { Component } from 'react'
import Task from './task1'
import {whyDidYouUpdate} from 'why-did-you-update'

whyDidYouUpdate(React, {groupByComponent:true, collapseComponentGroups: true})

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
    return (
      <main className={this.state.toggle ? 'night' : 'day' }>
        <button type="button" onClick={this.handleToggle} >
          {this.state.toggle ? 'light theme' : 'dark theme'}
        </button>
        <Task/>
      </main>
    );
  }
}

export default App
