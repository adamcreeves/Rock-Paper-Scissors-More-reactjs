import React from "react";
import "../../styles/Main.css";

function RPSButton({ buttonFunc, label }) {
  return (
    <button className="button" onClick={buttonFunc}>
      {label}
    </button>
  );
}

export default RPSButton;
