import React from "react";
import "../../styles/Main.css";

function Title({ str, classNm }) {
  return (
    <div className={classNm} data-testid={"title-component"}>
      {str}
    </div>
  );
}

export default Title;
