import React, { useState } from 'react';
import { randomColor } from "../../utils/nice";
import { createRandomUsers } from "../../utils/faker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HelloWorldClass from "../../components/HelloWorldClass";
import HelloWorldFunction from "../../components/HelloWorldFunction";
import CicleLifeButton from "../../components/CicleLifeButton";
import UserCard from "../../components/userCard";
import MyForm from "../../components/MyForm";
import Pokemons from "../../components/Pokemons";
import Calculator from "../../components/Calculator";
import Father from "../../components/Father";

function CustomizedMenuContainer() {
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
    <Router>
      <Switch>
        <Route path="/INRI6">
          <h2>INRI6</h2>
          <HelloWorldClass text="react"/>
          <HelloWorldFunction text="react"/>
        </Route>
        <Route path="/INRI7">
          <h2>INRI7</h2>
          { showButton && <CicleLifeButton
              color="#2C9CB2"
              text="1010101010101"
              onClick={handleClickCicleLife}
            />
          }
        </Route>
        <Route path="/INRI8">
          <h2>INRI8</h2>
          <button onClick={handleBackground}>Change background</button>
        </Route>
        <Route path="/INRI9">
          <h2>INRI9</h2>
            {users.map((user) => {
              return (
                <UserCard {...user} key={user.name + user.lastName} />
              );
            })}
        </Route>
        <Route path="/INRI10">
          <h2>INRI10</h2>
          <Pokemons />
        </Route>
        <Route path="/INRI11">
          <h2>INRI11</h2>
           <MyForm users={users}/>
        </Route>
        <Route path="/INRI12">
          <h2>INRI12</h2>
           <Calculator />
        </Route>
        <Route path="/INRI13">
          <h2>INRI13</h2>
           <Father />
        </Route>
      </Switch>
    </Router>
  );
}

export default CustomizedMenuContainer;
