import React from "react";
import { availableOptions } from "../../utils/Utils";
import "../../styles/Main.css";
import { str_015, str_016, str_020 } from "../../resources/strings";
import { int_004 } from "../../resources/integers";
import { c_011, c_012, c_013 } from "../../resources/classNames";

function ResponseMessage({
  player1,
  player2,
  player1sThrow,
  player2sThrow,
  winnerMessage,
}) {
  return (
    <div>
      {player2sThrow === int_004 ? (
        <div className={c_011}>
          <div className={c_012}>{str_020}</div>
        </div>
      ) : (
        <div className={c_011}>
          <div className={c_013}>
            {player1 +
              str_015 +
              availableOptions[player1sThrow] +
              str_016 +
              player2 +
              str_015 +
              availableOptions[player2sThrow]}
          </div>
          <div className={c_012}>{winnerMessage}</div>
        </div>
      )}
    </div>
  );
}

export default ResponseMessage;
