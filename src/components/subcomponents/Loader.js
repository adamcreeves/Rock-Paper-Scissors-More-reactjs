import React from "react";
import { c_022, c_023 } from "../../resources/classNames";
import { str_080 } from "../../resources/strings";

function Loader() {
  return (
    <div className={c_022}>
      <div className={c_023} />
      <div className={c_023} />
      <div className={c_023} />
      <span>{str_080}</span>
    </div>
  );
}

export default Loader;
