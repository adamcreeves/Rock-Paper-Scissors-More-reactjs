import React from "react";
import { availableOptions, displayMessage } from "../../utils/Utils";
import "../../styles/Main.css";

function ResponseMessage({
  player1,
  player2,
  opponentsThrow,
  winnerMessage,
  playersThrow,
}) {
  return (
    <div>
      {opponentsThrow === 3 ? (
        <div className="responseMessage">
          <div className="responseMessage__outcome">{displayMessage[0]}</div>
        </div>
      ) : (
        <div className="responseMessage">
          <div className="responseMessage__throws">
            {player1 +
              " throws " +
              availableOptions[playersThrow] +
              " and " +
              player2 +
              " throws " +
              availableOptions[opponentsThrow]}
          </div>
          <div className="responseMessage__outcome">{winnerMessage}</div>
        </div>
      )}
    </div>
  );
}

export default ResponseMessage;
