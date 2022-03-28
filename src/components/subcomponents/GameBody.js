import React, { useState } from "react";
import { availableOptions, handleButtonPress } from "../../utils/Utils";
import ResponseMessage from "./ResponseMessage";
import RPSButton from "./RPSButton";
import ScoreBoard from "./ScoreBoard";
import "../../styles/Main.css";
import {
  str_001,
  str_004,
  str_005,
  str_006,
  str_007,
  str_008,
} from "../../resources/strings";
import { int_001, int_002, int_003, int_004 } from "../../resources/integers";
import { c_004, c_005, c_006, c_007, c_008 } from "../../resources/classNames";

function GameBody({ player1, player2, resetPlayers }) {
  const [player1Score, setPlayer1Score] = useState(int_001);
  const [player2Score, setPlayer2Score] = useState(int_001);
  const [player1Throw, setPlayer1Throw] = useState(int_004);
  const [player2Throw, setPlayer2Throw] = useState(int_004);
  const [winnerMessage, setWinnerMessage] = useState(str_001);
  const rockPressed = () => {
    setPlayer1Throw(int_001);
    handleButtonPress(
      availableOptions[int_001],
      player1,
      player1Score,
      setPlayer1Score,
      player2,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage
    );
  };
  const paperPressed = () => {
    setPlayer1Throw(int_002);
    handleButtonPress(
      availableOptions[int_002],
      player1,
      player1Score,
      setPlayer1Score,
      player2,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage
    );
  };
  const scissorsPressed = () => {
    setPlayer1Throw(int_003);
    handleButtonPress(
      availableOptions[int_003],
      player1,
      player1Score,
      setPlayer1Score,
      player2,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage
    );
  };
  const resetPressed = () => {
    setPlayer1Score(int_001);
    setPlayer2Score(int_001);
    setWinnerMessage(str_001);
    setPlayer1Throw(int_004);
    setPlayer2Throw(int_004);
  };
  const newGamePressed = () => resetPlayers();
  const isNewGame = player1Throw === int_004;
  return (
    <div className={c_004}>
      <div className={c_006}>
        {!isNewGame && (
          <RPSButton
            buttonFunc={resetPressed}
            label={str_007}
            buttonClass={c_007}
          />
        )}
        <RPSButton
          buttonFunc={newGamePressed}
          label={str_008}
          buttonClass={c_007}
        />
      </div>
      <ScoreBoard
        player1={player1}
        player1Score={player1Score}
        player2={player2}
        player2Score={player2Score}
      />
      <div className={c_005}>
        <RPSButton
          buttonFunc={rockPressed}
          label={str_004}
          buttonClass={c_008}
        />
        <RPSButton
          buttonFunc={paperPressed}
          label={str_005}
          buttonClass={c_008}
        />
        <RPSButton
          buttonFunc={scissorsPressed}
          label={str_006}
          buttonClass={c_008}
        />
      </div>
      <ResponseMessage
        player1={player1}
        player2={player2}
        player1sThrow={player1Throw}
        player2sThrow={player2Throw}
        winnerMessage={winnerMessage}
      />
    </div>
  );
}

export default GameBody;
