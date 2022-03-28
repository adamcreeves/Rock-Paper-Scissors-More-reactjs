export const handleButtonPress = (
  label,
  player1,
  player1Score,
  setPlayer1Score,
  player2,
  player2Score,
  setPlayer2Score,
  setOpponentsThrow,
  setWinnerMessage
) => {
  const randomIndex = Math.floor(Math.random() * 3);
  setOpponentsThrow(randomIndex);
  const opponentThrows = availableOptions[randomIndex];
  if (label === opponentThrows) {
    setWinnerMessage(displayMessage[1]);
  } else if (
    label === availableOptions[0] &&
    opponentThrows === availableOptions[1]
  ) {
    setWinnerMessage(player2 + displayMessage[2]);
    setPlayer2Score(player2Score + 1);
  } else if (
    label === availableOptions[0] &&
    opponentThrows === availableOptions[2]
  ) {
    setWinnerMessage(player1 + displayMessage[2]);
    setPlayer1Score(player1Score + 1);
  } else if (
    label === availableOptions[1] &&
    opponentThrows === availableOptions[0]
  ) {
    setWinnerMessage(player1 + displayMessage[2]);
    setPlayer1Score(player1Score + 1);
  } else if (
    label === availableOptions[1] &&
    opponentThrows === availableOptions[2]
  ) {
    setWinnerMessage(player2 + displayMessage[2]);
    setPlayer2Score(player2Score + 1);
  } else if (
    label === availableOptions[2] &&
    opponentThrows === availableOptions[0]
  ) {
    setWinnerMessage(player2 + displayMessage[2]);
    setPlayer2Score(player2Score + 1);
  } else if (
    label === availableOptions[2] &&
    opponentThrows === availableOptions[1]
  ) {
    setWinnerMessage(player1 + displayMessage[2]);
    setPlayer1Score(player1Score + 1);
  }
};

export const availableOptions = ["rock", "paper", "scissors"];

export const displayMessage = [
  "Let's play a game!",
  "This round is a tie",
  " wins the round!",
];
