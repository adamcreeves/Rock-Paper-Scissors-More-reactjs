import React, { useState } from "react";
import Title from "./subcomponents/Title";
import GameBody from "./subcomponents/GameBody";
import "../styles/Main.css";
import RegisterPlayers from "./subcomponents/RegisterPlayers";
import { str_001, str_002, str_003 } from "../resources/strings";
import { c_001, c_002, c_003 } from "../resources/classNames";

function Body() {
  const [player1, setPlayer1] = useState(str_001);
  const [player2, setPlayer2] = useState(str_001);
  const resetGame = () => {
    setPlayer1(str_001);
    setPlayer2(str_001);
  };
  return (
    <div className={c_001}>
      <Title str={str_002} classNm={c_002} />
      <Title str={str_003} classNm={c_003} />
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
