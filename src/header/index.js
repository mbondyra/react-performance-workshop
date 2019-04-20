import React, { Component } from 'react'
import logo from './conf-logo.png'
import styled from 'styled-components'


const Container = styled.header`
  color: #fb8d82;
  height: 48px;
  border-bottom:  1px solid #131821;
  line-height: 48px;
  img {
    height: 30px;
    margin: 0 10px 0 30px;
    vertical-align: middle;
  }
  h1{
    font-size: 18px;
    height: 48px;
    margin: 0;
    line-height: 48px;
    padding: 0;
    vertical-align: middle;
  }
`

class Header extends Component {
  render() {
    return (
      <Container>
        <h1>
          <img src={logo} className="App-logo" alt="react-logo" />
          react performance 101
        </h1>
      </Container>
    );
  }
}

export default Header
