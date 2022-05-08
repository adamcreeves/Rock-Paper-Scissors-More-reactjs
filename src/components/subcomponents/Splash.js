import React from "react";
import { c_024, c_025, c_026, c_027 } from "../../resources/classNames";
import { str_002, str_003 } from "../../resources/strings";
import Loader from "./Loader";
import Title from "./Title";

function Splash() {
  return (
    <>
      <div className={c_024}>
        <div className={c_025}>
          <Title str={str_002} classNm={c_026} />
          <Title str={str_003} classNm={c_027} />
        </div>
        <Loader />
      </div>
    </>
  );
}

export default Splash;
