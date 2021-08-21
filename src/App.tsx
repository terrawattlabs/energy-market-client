import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThingDiv } from './Thing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ThingDiv name="Solar"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, Finn!
        </a>
      </header>
      
    </div>
  );
}

export default App;
