import React from "react";
import { availableOptions } from "../../utils/Utils";
import {
  str_015,
  str_016,
  str_020,
  str_075,
  str_076,
  str_077,
  str_078,
} from "../../resources/strings";
import { int_001, int_010 } from "../../resources/integers";
import { c_011, c_012, c_013, c_020 } from "../../resources/classNames";
import Cookies from "universal-cookie";

function ResponseMessage({
  player1,
  player2,
  player1sThrow,
  player2sThrow,
  winnerMessage,
  resultMessage,
}) {
  const cookies = new Cookies();
  const storedPlayer1Score = parseInt(cookies.get(str_075)) || int_001;
  const storedPlayer2Score = parseInt(cookies.get(str_076)) || int_001;
  return (
    <div>
      {player2sThrow === int_010 &&
      (storedPlayer1Score !== int_001 || storedPlayer2Score !== int_001) ? (
        <div className={c_011}>
          <div className={c_020}>{str_077}</div>
          <div className={c_012}>{str_078}</div>
        </div>
      ) : player2sThrow === int_010 ? (
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
          {resultMessage && <div className={c_020}>{resultMessage}</div>}
          <div className={c_012}>{winnerMessage}</div>
        </div>
      )}
    </div>
  );
}

export default ResponseMessage;
