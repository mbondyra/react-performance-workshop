import React, { Component } from 'react'
import Task from './task4solved'

class App extends Component {
  state = {
    toggle: true,
  }

  handleToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }


  render() {
    return (
      <div>
        <button type="button" onClick={this.handleToggle}>
          {this.state.toggle ? 'On' : 'Off'}
        </button>
        <Task/>

      </div>
    );
  }
}

export default App
