import React, { useState } from "react";
import Title from "./subcomponents/Title";
import GameBody from "./subcomponents/GameBody";
import "../styles/Main.css";
import RegisterPlayers from "./subcomponents/RegisterPlayers";

function Body() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const resetGame = () => {
    setPlayer1("");
    setPlayer2("");
  };
  return (
    <div className="body">
      <Title str={"Welcome to Adam's"} classNm={"title"} />
      <Title str={"Rock Paper Scissors Game"} classNm={"subtitle"} />
      {!player1 ? (
        <RegisterPlayers setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
      ) : (
        <GameBody
          player1={player1}
          player2={player2}
          resetPlayers={resetGame}
        />
      )}
    </div>
  );
}

export default Body;
