import React from "react";
import "../../styles/Main.css";

function Title({ str, classNm }) {
  return <div className={classNm}>{str}</div>;
}

export default Title;
