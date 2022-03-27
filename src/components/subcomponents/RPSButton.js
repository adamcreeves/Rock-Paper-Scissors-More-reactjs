import React from "react";
import "../../styles/Main.css";

function RPSButton({ buttonFunc, label, buttonClass }) {
  return (
    <button className={buttonClass} onClick={buttonFunc}>
      {label}
    </button>
  );
}

export default RPSButton;
