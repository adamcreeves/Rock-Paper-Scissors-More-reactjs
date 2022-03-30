import { int_002, int_010 } from "../resources/integers";
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
  str_039,
  str_040,
  str_043,
  str_044,
  str_045,
  str_046,
  str_047,
  str_048,
  str_049,
  str_050,
  str_051,
  str_052,
  str_053,
  str_055,
  str_056,
  str_057,
  str_058,
  str_059,
  str_060,
  str_061,
  str_062,
  str_063,
  str_064,
  str_065,
  str_066,
  str_067,
  str_068,
  str_069,
  str_071,
  str_072,
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
  const randomIndex = Math.floor(Math.random() * int_010);
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
  } else if (label === str_023 && player2sThrow === str_039) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_047);
  } else if (label === str_023 && player2sThrow === str_040) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_052);
  } else if (label === str_023 && player2sThrow === str_071) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_060);
  } else if (label === str_023 && player2sThrow === str_072) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_063);
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
  } else if (label === str_024 && player2sThrow === str_039) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_043);
  } else if (label === str_024 && player2sThrow === str_040) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_051);
  } else if (label === str_024 && player2sThrow === str_071) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_056);
  } else if (label === str_024 && player2sThrow === str_072) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_064);
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
  } else if (label === str_025 && player2sThrow === str_039) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_048);
  } else if (label === str_025 && player2sThrow === str_040) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_053);
  } else if (label === str_025 && player2sThrow === str_071) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_058);
  } else if (label === str_025 && player2sThrow === str_072) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_068);
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
  } else if (label === str_026 && player2sThrow === str_039) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_045);
  } else if (label === str_026 && player2sThrow === str_040) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_049);
  } else if (label === str_026 && player2sThrow === str_071) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_057);
  } else if (label === str_026 && player2sThrow === str_072) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_066);
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
  } else if (label === str_027 && player2sThrow === str_039) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_046);
  } else if (label === str_027 && player2sThrow === str_040) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_050);
  } else if (label === str_027 && player2sThrow === str_071) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_059);
  } else if (label === str_027 && player2sThrow === str_072) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_065);
  } else if (label === str_039 && player2sThrow === str_023) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_047);
  } else if (label === str_039 && player2sThrow === str_024) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_043);
  } else if (label === str_039 && player2sThrow === str_025) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_048);
  } else if (label === str_039 && player2sThrow === str_026) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_045);
  } else if (label === str_039 && player2sThrow === str_027) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_046);
  } else if (label === str_039 && player2sThrow === str_040) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_044);
  } else if (label === str_039 && player2sThrow === str_071) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_055);
  } else if (label === str_039 && player2sThrow === str_072) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_067);
  } else if (label === str_040 && player2sThrow === str_023) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_052);
  } else if (label === str_040 && player2sThrow === str_024) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_051);
  } else if (label === str_040 && player2sThrow === str_025) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_053);
  } else if (label === str_040 && player2sThrow === str_026) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_049);
  } else if (label === str_040 && player2sThrow === str_027) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_050);
  } else if (label === str_040 && player2sThrow === str_039) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_044);
  } else if (label === str_040 && player2sThrow === str_071) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_061);
  } else if (label === str_040 && player2sThrow === str_072) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_069);
  } else if (label === str_071 && player2sThrow === str_023) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_060);
  } else if (label === str_071 && player2sThrow === str_024) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_056);
  } else if (label === str_071 && player2sThrow === str_025) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_058);
  } else if (label === str_071 && player2sThrow === str_026) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_057);
  } else if (label === str_071 && player2sThrow === str_027) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_059);
  } else if (label === str_071 && player2sThrow === str_039) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_055);
  } else if (label === str_071 && player2sThrow === str_040) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_061);
  } else if (label === str_071 && player2sThrow === str_072) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_062);
  } else if (label === str_072 && player2sThrow === str_023) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_063);
  } else if (label === str_072 && player2sThrow === str_024) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_064);
  } else if (label === str_072 && player2sThrow === str_025) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_068);
  } else if (label === str_072 && player2sThrow === str_026) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_066);
  } else if (label === str_072 && player2sThrow === str_027) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_065);
  } else if (label === str_072 && player2sThrow === str_039) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_067);
  } else if (label === str_072 && player2sThrow === str_040) {
    setWinnerMessage(player2 + str_022);
    setPlayer2Score(player2Score + int_002);
    setResultMessage(str_069);
  } else if (label === str_072 && player2sThrow === str_071) {
    setWinnerMessage(player1 + str_022);
    setPlayer1Score(player1Score + int_002);
    setResultMessage(str_062);
  }
};

export const availableOptions = [
  str_023,
  str_024,
  str_025,
  str_026,
  str_027,
  str_039,
  str_040,
  str_071,
  str_072,
];
