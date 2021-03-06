import React, { useState } from "react";
import Title from "./subcomponents/Title";
import GameBody from "./subcomponents/GameBody";
import RegisterPlayers from "./subcomponents/RegisterPlayers";
import { str_001, str_073, str_074, str_079 } from "../resources/strings";
import { c_001, c_002 } from "../resources/classNames";
import Cookies from "universal-cookie";

function Body() {
  const cookies = new Cookies();
  const storedPlayer1 = cookies.get(str_073) || str_001;
  const storedPlayer2 = cookies.get(str_074) || str_001;
  const [player1, setPlayer1] = useState(storedPlayer1);
  const [player2, setPlayer2] = useState(storedPlayer2);
  const resetGame = () => {
    setPlayer1(str_001);
    setPlayer2(str_001);
    cookies.remove(str_073);
    cookies.remove(str_074);
  };
  return (
    <div className={c_001} data-testid="body-component">
      {!player1 ? (
        <>
          <Title str={str_079} classNm={c_002} />
          <RegisterPlayers setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
        </>
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
