import React from "react";
import {
  c_014,
  c_015,
  c_016,
  c_017,
  c_018,
  c_019,
} from "../../resources/classNames";
import { str_017, str_018 } from "../../resources/strings";
import "../../styles/Main.css";
import Title from "./Title";

function ScoreBoard({ player1, player1Score, player2, player2Score }) {
  return (
    <div className={c_014}>
      <Title str={str_018} classNm={c_015} />
      <div className={c_016}>
        <div className={c_017}>
          <div className={c_018}>{player1 + str_017}</div>
          <div className={c_019}>{player1Score}</div>
        </div>
        <div className={c_017}>
          <div className={c_018}>{player2 + str_017}</div>
          <div className={c_019}>{player2Score}</div>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
