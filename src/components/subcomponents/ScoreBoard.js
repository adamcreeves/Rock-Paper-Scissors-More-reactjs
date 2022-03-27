import React from "react";
import "../../styles/Main.css";
import Title from "./Title";

function ScoreBoard({ playerScore, opponentScore }) {
  return (
    <div className="scoreBoard">
      <Title str={"Score:"} classNm={"scoreText"} />
      <div className="scoreBoard__body">
        <div className="scoreBoard__row">
          <div className="scoreBoard__label">{"User: "}</div>
          <div className="scoreBoard__score">{playerScore}</div>
        </div>
        <div className="scoreBoard__row">
          <div className="scoreBoard__label">{"Computer: "}</div>
          <div className="scoreBoard__score">{opponentScore}</div>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
