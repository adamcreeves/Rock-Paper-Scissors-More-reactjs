import React from "react";
import { availableOptions, displayMessage } from "../../utils/Utils";
import "../../styles/Main.css";

function ResponseMessage({ opponentsThrow, messageIndex, playersThrow }) {
  return (
    <div>
      {opponentsThrow === 3 ? (
        <div className="responseMessage">
          <div className="responseMessage__outcome">
            {displayMessage[messageIndex]}
          </div>
        </div>
      ) : (
        <div className="responseMessage">
          <div className="responseMessage__throws">
            {displayMessage[1] +
              availableOptions[playersThrow] +
              " and " +
              displayMessage[2] +
              availableOptions[opponentsThrow]}
          </div>
          <div className="responseMessage__outcome">
            {displayMessage[messageIndex]}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResponseMessage;
