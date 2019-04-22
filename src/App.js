import React, { Component } from 'react'
import Task from './task5'

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
    const {toggle} = this.state
    return (
      <main className={toggle ? 'night' : 'day' }>
        <button type="button" onClick={this.handleToggle} >
          {this.state.toggle ? 'light theme' : 'dark theme'}
        </button>
        <Task/>

      </main>
    );
  }
}

export default App
