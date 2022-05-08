import React from "react";

function RPSButton({ buttonFunc, label, buttonClass }) {
  return (
    <button className={buttonClass} onClick={buttonFunc}>
      {label}
    </button>
  );
}

export default RPSButton;
