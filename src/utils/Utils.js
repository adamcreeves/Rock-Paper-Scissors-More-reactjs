import { int_002 } from "../resources/integers";
import {
  str_001,
  str_021,
  str_022,
  str_023,
  str_024,
  str_025,
  str_026,
  str_027,
  str_029,
  str_030,
  str_031,
  str_032,
  str_033,
  str_034,
  str_035,
  str_036,
  str_037,
  str_038,
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
  setWinnerMessage,
  setResultMessage
) => {
  const randomIndex = Math.floor(Math.random() * 5);
  setPlayer2sThrow(randomIndex);
  const player2sThrow = availableOptions[randomIndex];

  if (label === player2sThrow) {
    setWinnerMessage(str_021);
    setResultMessage(str_001);
  } else if (label === str_023 && player2sThrow === str_024) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_029);
  } else if (label === str_023 && player2sThrow === str_025) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_038);
  } else if (label === str_023 && player2sThrow === str_026) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_030);
  } else if (label === str_023 && player2sThrow === str_027) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_037);
  } else if (label === str_024 && player2sThrow === str_023) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_029);
  } else if (label === str_024 && player2sThrow === str_025) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_031);
  } else if (label === str_024 && player2sThrow === str_026) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_035);
  } else if (label === str_024 && player2sThrow === str_027) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_036);
  } else if (label === str_025 && player2sThrow === str_023) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_038);
  } else if (label === str_025 && player2sThrow === str_024) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_031);
  } else if (label === str_025 && player2sThrow === str_026) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_034);
  } else if (label === str_025 && player2sThrow === str_027) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_033);
  } else if (label === str_026 && player2sThrow === str_023) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_030);
  } else if (label === str_026 && player2sThrow === str_024) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_035);
  } else if (label === str_026 && player2sThrow === str_025) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_034);
  } else if (label === str_026 && player2sThrow === str_027) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_032);
  } else if (label === str_027 && player2sThrow === str_023) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_037);
  } else if (label === str_027 && player2sThrow === str_024) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_036);
  } else if (label === str_027 && player2sThrow === str_025) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_033);
  } else if (label === str_027 && player2sThrow === str_026) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_032);
  }
};

export const availableOptions = [str_023, str_024, str_025, str_026, str_027];
