import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { randomColor } from "./helpers/nice"
import { createRandomUsers } from "./helpers/faker"
import HelloWorldClass from "./components/HelloWorldClass";
import HelloWorldFunction from "./components/HelloWorldFunction";
import CicleLifeButton from "./components/CicleLifeButton";
import UserCard from "./components/userCard";

function App() {
  const [showButton, setShowButton] = useState(true);
  const [background, setBackground] = useState("#282c34");
  const users = createRandomUsers(20);

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
        <br/>
        <br/>
        <table>
          <thead>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.name + user.lastName}>
                  <td><UserCard {...user} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
