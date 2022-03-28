import React, { useState } from "react";
import { availableOptions, handleButtonPress } from "../../utils/Utils";
import ResponseMessage from "./ResponseMessage";
import RPSButton from "./RPSButton";
import ScoreBoard from "./ScoreBoard";
import "../../styles/Main.css";

function GameBody({ player1, player2, resetPlayers }) {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Throw, setPlayer1Throw] = useState(3);
  const [player2Throw, setPlayer2Throw] = useState(3);
  const [winnerMessage, setWinnerMessage] = useState("");
  const rockPressed = () => {
    setPlayer1Throw(0);
    handleButtonPress(
      availableOptions[0],
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
    setPlayer1Throw(1);
    handleButtonPress(
      availableOptions[1],
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
    setPlayer1Throw(2);
    handleButtonPress(
      availableOptions[2],
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
    setPlayer1Score(0);
    setPlayer2Score(0);
    setWinnerMessage("");
    setPlayer1Throw(3);
    setPlayer2Throw(3);
  };
  const newGamePressed = () => resetPlayers();
  const isNewGame = player1Throw === 3;
  return (
    <div className="gameBody">
      <ScoreBoard
        player1={player1}
        player1Score={player1Score}
        player2={player2}
        player2Score={player2Score}
      />
      <div className="body__buttonRow">
        <RPSButton
          buttonFunc={rockPressed}
          label={"Rock"}
          buttonClass={"button"}
        />
        <RPSButton
          buttonFunc={paperPressed}
          label={"Paper"}
          buttonClass={"button"}
        />
        <RPSButton
          buttonFunc={scissorsPressed}
          label={"Scissors"}
          buttonClass={"button"}
        />
      </div>
      <ResponseMessage
        player1={player1}
        player2={player2}
        playersThrow={player1Throw}
        opponentsThrow={player2Throw}
        winnerMessage={winnerMessage}
      />
      {!isNewGame && (
        <div className="body__gameButton">
          <RPSButton
            buttonFunc={resetPressed}
            label={"Reset Game"}
            buttonClass={"gameButton"}
          />
          <RPSButton
            buttonFunc={newGamePressed}
            label={"New Game"}
            buttonClass={"gameButton"}
          />
        </div>
      )}
    </div>
  );
}

export default GameBody;
