import React, { useState } from "react";
import { handleButtonPress } from "../../utils/Utils";
import ResponseMessage from "./ResponseMessage";
import RPSButton from "./RPSButton";
import ScoreBoard from "./ScoreBoard";
import Cookies from "universal-cookie";
import {
  str_001,
  str_004,
  str_005,
  str_006,
  str_007,
  str_008,
  str_023,
  str_024,
  str_025,
  str_026,
  str_027,
  str_028,
  str_039,
  str_040,
  str_041,
  str_042,
  str_054,
  str_070,
  str_071,
  str_072,
  str_073,
  str_074,
  str_075,
  str_076,
} from "../../resources/strings";
import {
  int_001,
  int_002,
  int_003,
  int_004,
  int_005,
  int_006,
  int_007,
  int_008,
  int_009,
  int_010,
} from "../../resources/integers";
import {
  c_004,
  c_005,
  c_006,
  c_007,
  c_008,
  c_021,
} from "../../resources/classNames";

function GameBody({ player1, player2, resetPlayers }) {
  const cookies = new Cookies();
  const storedPlayer1Score = parseInt(cookies.get(str_075)) || int_001;
  const storedPlayer2Score = parseInt(cookies.get(str_076)) || int_001;
  const [player1Score, setPlayer1Score] = useState(storedPlayer1Score);
  const [player2Score, setPlayer2Score] = useState(storedPlayer2Score);
  const [player1Throw, setPlayer1Throw] = useState(int_010);
  const [player2Throw, setPlayer2Throw] = useState(int_010);
  const [winnerMessage, setWinnerMessage] = useState(str_001);
  const [resultMessage, setResultMessage] = useState(str_001);
  const player1SavedOrNew = cookies.get(str_073) || player1;
  const player2SavedOrNew = cookies.get(str_074) || player2;

  const rockPressed = () => {
    setPlayer1Throw(int_001);
    handleButtonPress(
      str_023,
      player1SavedOrNew,
      player1Score,
      setPlayer1Score,
      player2SavedOrNew,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage,
      setResultMessage
    );
  };
  const paperPressed = () => {
    setPlayer1Throw(int_002);
    handleButtonPress(
      str_024,
      player1SavedOrNew,
      player1Score,
      setPlayer1Score,
      player2SavedOrNew,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage,
      setResultMessage
    );
  };
  const scissorsPressed = () => {
    setPlayer1Throw(int_003);
    handleButtonPress(
      str_025,
      player1SavedOrNew,
      player1Score,
      setPlayer1Score,
      player2SavedOrNew,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage,
      setResultMessage
    );
  };
  const lizardPressed = () => {
    setPlayer1Throw(int_004);
    handleButtonPress(
      str_026,
      player1SavedOrNew,
      player1Score,
      setPlayer1Score,
      player2SavedOrNew,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage,
      setResultMessage
    );
  };
  const spockPressed = () => {
    setPlayer1Throw(int_005);
    handleButtonPress(
      str_027,
      player1,
      player1Score,
      setPlayer1Score,
      player2,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage,
      setResultMessage
    );
  };
  const firePressed = () => {
    setPlayer1Throw(int_006);
    handleButtonPress(
      str_039,
      player1SavedOrNew,
      player1Score,
      setPlayer1Score,
      player2SavedOrNew,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage,
      setResultMessage
    );
  };
  const glassPressed = () => {
    setPlayer1Throw(int_007);
    handleButtonPress(
      str_040,
      player1SavedOrNew,
      player1Score,
      setPlayer1Score,
      player2SavedOrNew,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage,
      setResultMessage
    );
  };
  const dynamitePressed = () => {
    setPlayer1Throw(int_008);
    handleButtonPress(
      str_071,
      player1SavedOrNew,
      player1Score,
      setPlayer1Score,
      player2SavedOrNew,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage,
      setResultMessage
    );
  };
  const putinPressed = () => {
    setPlayer1Throw(int_009);
    handleButtonPress(
      str_072,
      player1SavedOrNew,
      player1Score,
      setPlayer1Score,
      player2SavedOrNew,
      player2Score,
      setPlayer2Score,
      setPlayer2Throw,
      setWinnerMessage,
      setResultMessage
    );
  };
  const resetPressed = () => {
    cookies.remove(str_075);
    cookies.remove(str_076);
    setPlayer1Score(int_001);
    setPlayer2Score(int_001);
    setResultMessage(int_001);
    setWinnerMessage(str_001);
    setPlayer1Throw(int_010);
    setPlayer2Throw(int_010);
  };
  const newPlayersPressed = () => {
    cookies.remove(str_075);
    cookies.remove(str_076);
    resetPlayers();
  };
  const isNewGame =
    storedPlayer1Score === int_001 &&
    storedPlayer2Score === int_001 &&
    player1Score === 0 &&
    player2Score === 0;
  const storedScoreMatches =
    storedPlayer1Score === player1Score && storedPlayer2Score === player2Score;
  if (!storedScoreMatches) {
    cookies.set(str_075, player1Score, { path: str_054 });
    cookies.set(str_076, player2Score, { path: str_054 });
  }
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
          buttonFunc={newPlayersPressed}
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
      <div className={c_021}>
        <div className={c_005}>
          <RPSButton
            buttonFunc={firePressed}
            label={str_041}
            buttonClass={c_008}
          />
          <RPSButton
            buttonFunc={glassPressed}
            label={str_042}
            buttonClass={c_008}
          />
          <RPSButton
            buttonFunc={dynamitePressed}
            label={str_070}
            buttonClass={c_008}
          />
        </div>
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
        <div className={c_005}>
          <RPSButton
            buttonFunc={putinPressed}
            label={str_072}
            buttonClass={c_008}
          />
          <RPSButton
            buttonFunc={lizardPressed}
            label={str_028}
            buttonClass={c_008}
          />
          <RPSButton
            buttonFunc={spockPressed}
            label={str_027}
            buttonClass={c_008}
          />
        </div>
      </div>
      <ResponseMessage
        player1={player1}
        player2={player2}
        player1sThrow={player1Throw}
        player2sThrow={player2Throw}
        winnerMessage={winnerMessage}
        resultMessage={resultMessage}
      />
    </div>
  );
}

export default GameBody;
