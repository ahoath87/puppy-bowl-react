import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import PlayerList from "./playerList";
//import { puppyData } from "./puppyData";
//import {getPuppies} from './api/api';

const Main = () => {
  //we name what the state is and the function inside of it
  // the setter says take this old state which is empty array and give it whatever we give the new state as
  // the new state is players
  const [players, setPlayers] = useState([]);
  //console.log("this is pups", puppyData);
  // this is my asynchronous function written in a try catch format so that if there is an error it is caught and sent back
  const getPlayers = async () => {
    try {
      //console.log("in getPlayers");
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2221-FTB-ET-WEB-FT/players"
      );
      const data = await response.json();
      console.log("this is my data", data);
      setPlayers(data.data.players);
    } catch (error) {
      console.error(error);
    }
  };
  //once everything is rendered the first time run this function but do not do it again
  useEffect(() => {
    getPlayers();
  }, []);

  console.log("my players", players);

  return (
    //named my favorite notebook players, put it in my backpack props over in playerlist.js
    //now our players are available on the key players, off of props
    // if i wanted to i could add any key <PlayerList soccer={footySport} it just says we want
    //to store these attributes on its component bc it has its idividual backpack
    <PlayerList players={players} />
  );
};

const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(<Main />);
