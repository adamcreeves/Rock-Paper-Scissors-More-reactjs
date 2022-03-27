import React, { useState } from "react";
import { availableOptions, handleButtonPress } from "../utils/Utils";
import RPSButton from "./subcomponents/RPSButton";
import ScoreBoard from "./subcomponents/ScoreBoard";
import Title from "./subcomponents/Title";
import "../styles/Main.css";
import ResponseMessage from "./subcomponents/ResponseMessage";

function Body() {
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [playersThrow, setPlayersThrow] = useState(3);
  const [opponentsThrow, setOpponentsThrow] = useState(3);
  const [messageIndex, setMessageIndex] = useState(0);
  const rockPressed = () => {
    setPlayersThrow(0);
    handleButtonPress(
      availableOptions[0],
      playerScore,
      setPlayerScore,
      opponentScore,
      setOpponentScore,
      setOpponentsThrow,
      setMessageIndex
    );
  };
  const paperPressed = () => {
    setPlayersThrow(1);
    handleButtonPress(
      availableOptions[1],
      playerScore,
      setPlayerScore,
      opponentScore,
      setOpponentScore,
      setOpponentsThrow,
      setMessageIndex
    );
  };
  const scissorsPressed = () => {
    setPlayersThrow(2);
    handleButtonPress(
      availableOptions[2],
      playerScore,
      setPlayerScore,
      opponentScore,
      setOpponentScore,
      setOpponentsThrow,
      setMessageIndex
    );
  };
  const resetPressed = () => {
    setPlayerScore(0);
    setOpponentScore(0);
    setMessageIndex(0);
    setPlayersThrow(3);
    setOpponentsThrow(3);
  };
  const isNewGame = opponentsThrow === 3;

  return (
    <div className="body">
      <Title str={"Welcome to Adam's"} classNm={"title"} />
      <Title str={"Rock Paper Scissors Game for Web"} classNm={"subtitle"} />
      <ScoreBoard playerScore={playerScore} opponentScore={opponentScore} />
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
        playersThrow={playersThrow}
        opponentsThrow={opponentsThrow}
        messageIndex={messageIndex}
      />
      {!isNewGame && (
        <div className="body__resetButton">
          <RPSButton
            buttonFunc={resetPressed}
            label={"Reset"}
            buttonClass={"resetButton"}
          />
        </div>
      )}
    </div>
  );
}

export default Body;
