import React from "react";
import "../../styles/Main.css";
import Title from "./Title";

function ScoreBoard({ player1, player1Score, player2, player2Score }) {
  return (
    <div className="scoreBoard">
      <Title str={"Score:"} classNm={"scoreText"} />
      <div className="scoreBoard__body">
        <div className="scoreBoard__row">
          <div className="scoreBoard__label">{player1 + ": "}</div>
          <div className="scoreBoard__score">{player1Score}</div>
        </div>
        <div className="scoreBoard__row">
          <div className="scoreBoard__label">{player2 + ": "}</div>
          <div className="scoreBoard__score">{player2Score}</div>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
