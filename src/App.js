import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorldClass from "./components/HelloWorldClass";
import HelloWorldFunction from "./components/HelloWorldFunction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorldClass text="react"/>
        <HelloWorldFunction text="react"/>
      </header>
    </div>
  );
}

export default App;
