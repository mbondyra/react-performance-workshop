import React, { Component } from 'react'
import logo from './conf-logo.png'
import styled from 'styled-components'

const Div=styled.div``

class Header extends Component {
  render() {
    return (
      <header>
        <Div/>
        <h1>
          <img src={logo} className="App-logo" alt="react-logo" />
          react performance 101
        </h1>
      </header>
    );
  }
}

export default Header
