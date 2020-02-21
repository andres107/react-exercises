import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import './styles.css';
import { randomColor } from "../../utils/nice";
import { createRandomUsers } from "../../utils/faker";
import CustomizedAppBar from "../../components/CustomizedAppBar";
import HelloWorldClass from "../../components/HelloWorldClass";
import HelloWorldFunction from "../../components/HelloWorldFunction";
import CicleLifeButton from "../../components/CicleLifeButton";
import UserCard from "../../components/userCard";
import MyForm from "../../components/MyForm"
import Pokemons from "../../components/Pokemons"
import Calculator from "../../components/Calculator";
import Father from "../../components/Father";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function Home() {
  const [showButton, setShowButton] = useState(true);
  const [background, setBackground] = useState("#282c34");
  const users = createRandomUsers(20);

  const options = [
    {
      title: "INRI-6",
      link: "/INRI6",
    },
    {
      title: "INRI-7",
      link: "/INRI7"
    },
    {
      title: "INRI-8",
      link: "/INRI8"
    },
    {
      title: "INRI-9",
      link: "INRI9"
    },
    {
      title: "INRI-10",
      link: "INRI10"
    },
    {
      title: "INR-I11",
      link: "INRI11"
    },
    {
      title: "INRI-12",
      link: "INRI12"
    },
    {
      title: "INRI-13",
      link: "INRI13"
    }
  ];

  const handleBackground = () => {
    setBackground(randomColor());
  };

  const handleClickCicleLife = () => {
    setShowButton(false);
  };

  return (
    <div className="Home">
     <Router>
     <CustomizedAppBar options={options} title="Menú"/>
     <div className="Home-header" style={{backgroundColor: background}}>
      <center>
        <img src={logo} className="Home-logo" alt="logo"/>
        </center>
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
    </div>
    </Router>
    </div>
  );
}

export default Home;
