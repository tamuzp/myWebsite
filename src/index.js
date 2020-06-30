import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Main from './App/Main'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app,
  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  html {
    box-sizing: border=box;
    font-size: 100%
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
    padding: 0;
    margin: 0;
    font: 1rem / 1,4a4 arial, sans-serif;
  }
`
const container = document.querySelector('#app')

const App = () => (
  <BrowserRouter>
    <Main />
    <GlobalStyle/>
  </BrowserRouter>
)

ReactDOM.render(<App/>, container)