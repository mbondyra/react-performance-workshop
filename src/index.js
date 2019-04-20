import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './header'

const AppContainer = styled.div`
  max-width: 1120px;
  padding: 30px;
  margin: 0 auto;
`

ReactDOM.render(
  <div>
    <Header />
    <AppContainer>
      <App/>
    </AppContainer>
  </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
