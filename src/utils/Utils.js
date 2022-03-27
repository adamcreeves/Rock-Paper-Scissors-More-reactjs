export const handleButtonPress = (
  label,
  playerScore,
  setPlayerScore,
  opponentScore,
  setOpponentScore,
  setOpponentsThrow,
  setWinnerMessageIndex
) => {
  const randomIndex = Math.floor(Math.random() * 3);
  setOpponentsThrow(randomIndex);
  const opponentThrows = availableOptions[randomIndex];
  if (label === opponentThrows) {
    setWinnerMessageIndex(5);
  } else if (
    label === availableOptions[0] &&
    opponentThrows === availableOptions[1]
  ) {
    setWinnerMessageIndex(4);
    setOpponentScore(opponentScore + 1);
  } else if (
    label === availableOptions[0] &&
    opponentThrows === availableOptions[2]
  ) {
    setWinnerMessageIndex(3);
    setPlayerScore(playerScore + 1);
  } else if (
    label === availableOptions[1] &&
    opponentThrows === availableOptions[0]
  ) {
    setWinnerMessageIndex(3);
    setPlayerScore(playerScore + 1);
  } else if (
    label === availableOptions[1] &&
    opponentThrows === availableOptions[2]
  ) {
    setWinnerMessageIndex(4);
    setOpponentScore(opponentScore + 1);
  } else if (
    label === availableOptions[2] &&
    opponentThrows === availableOptions[0]
  ) {
    setWinnerMessageIndex(4);
    setOpponentScore(opponentScore + 1);
  } else if (
    label === availableOptions[2] &&
    opponentThrows === availableOptions[1]
  ) {
    setWinnerMessageIndex(3);
    setPlayerScore(playerScore + 1);
  }
};

export const availableOptions = ["rock", "paper", "scissors"];

export const displayMessage = [
  "Let's play!",
  "You throw ",
  "the computer throws ",
  "You win the round!",
  "The computer wins the round!",
  "This round is a tie",
];
