import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { randomColor } from "./helpers/nice"
import HelloWorldClass from "./components/HelloWorldClass";
import HelloWorldFunction from "./components/HelloWorldFunction";
import CicleLifeButton from "./components/CicleLifeButton";

function App() {
  const [showButton, setShowButton] = useState(true);
  const [background, setBackground] = useState("#282c34");


  const handleBackground = () => {
    setBackground(randomColor());
  };

  const handleClickCicleLife = () => {
    setShowButton(false);
  };

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: background}}>
        <img src={logo} className="App-logo" alt="logo"/>
        <HelloWorldClass text="react"/>
        <HelloWorldFunction text="react"/>
        { showButton && <CicleLifeButton
            color="#2C9CB2"
            text="1010101010101"
            onClick={handleClickCicleLife}
          />
        }
        <br/>
        <br/>
        <button onClick={handleBackground}>Change background</button>
      </header>
    </div>
  );
}

export default App;
