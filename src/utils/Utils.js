import { int_001, int_002, int_003, int_004 } from "../resources/integers";
import {
  str_021,
  str_022,
  str_023,
  str_024,
  str_025,
} from "../resources/strings";

export const handleButtonPress = (
  label,
  player1,
  player1Score,
  setPlayer1Score,
  player2,
  player2Score,
  setPlayer2Score,
  setPlayer2sThrow,
  setWinnerMessage
) => {
  const randomIndex = Math.floor(Math.random() * int_004);
  setPlayer2sThrow(randomIndex);
  const player2sThrow = availableOptions[randomIndex];

  if (label === player2sThrow) {
    setWinnerMessage(str_021);
  } else if (label === str_023 && player2sThrow === str_024) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
  } else if (label === str_023 && player2sThrow === str_025) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
  } else if (label === str_024 && player2sThrow === str_023) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
  } else if (label === str_024 && player2sThrow === str_025) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
  } else if (label === str_025 && player2sThrow === str_023) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
  } else if (label === str_025 && player2sThrow === str_024) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
  }
};

export const availableOptions = [str_023, str_024, str_025];
