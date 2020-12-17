import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Alert } from '@hazelcast/ui'
import { Toast } from '@hazelcast/ui'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Alert type="success" title="ersneirst" content="sietnrseitn" closeToast={() => console.log} />

        <Toast type="info" content="Toast text" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
