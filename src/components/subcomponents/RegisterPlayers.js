import React, { useState } from "react";

function RegisterPlayers({ setPlayer1, setPlayer2 }) {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const startGamePressed = () => {
    if (name1.toLowerCase() !== name2.toLowerCase()) {
      setPlayer1(name1.trim());
      setPlayer2(name2.trim());
    } else {
      alert("You need to enter different names");
    }
  };
  return (
    <form className="registerPlayers" onSubmit={startGamePressed}>
      <input
        className={"playerName"}
        type={"text"}
        placeholder={"Enter Player 1's Name"}
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        required
      />
      <input
        className={"playerName"}
        type={"text"}
        placeholder={"Enter Player 2's Name"}
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        required
      />
      <input className={"gameButton"} type={"submit"} value={"Start Game"} />
    </form>
  );
}

export default RegisterPlayers;
