import React from "react";
import PlayerRow from "./api/PlayerRow";
//import { puppyData } from './puppyData';

//
const PlayerList = (props) => {
  //const {getSinlgePlayer, setSelectedPlayer} =props;
  //console.log(props.players)
  // map takes any named paramater and you can use dot notation to get to anything in the object
  //player is just a w
  // .lenght if there is no length there is nothing to map over to add puppies to (ternary statement for that)
  console.log(props);
  return (
    <div id="players-container">
      {props.players.length
        ? props.players.map((player) => {
            console.log(" this is the player", player);
            return (
              <PlayerRow player={player} key={player.id} />

              // <div class ="single-player-card">
              // <div class ="header-info">
              //     <p class ="pup-title">{player.name}</p>
              //     <p class ="pup-number">#{player.id}</p>
              // </div>
              // <img src={player.imageUrl} />
              // <button class="detail-button" data-id={player.id}>See details</button>
              // </div>
            );
          })
        : "no pups"}
    </div>
  );
};

export default PlayerList;
