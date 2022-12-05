import React from "react";

const PlayerRow = ({ player }) => {
  //const {getSinlgePlayer, setSelectedPlayer} =props;
  //console.log(props.players)
  // map takes any named paramater and you can use dot notation to get to anything in the object
  //player is just a w
  //const player = props.user;
  // const { player } = props;

  return (
    <div className="single-player-card">
      <div className="header-info">
        <p className="pup-title">{player.name}</p>
        <p className="pup-number">#{player.id}</p>
      </div>
      <img src={player.imageUrl} />
      <button className="detail-button" data-id={player.id}>
        See details
      </button>
    </div>
  );
};

export default PlayerRow;
