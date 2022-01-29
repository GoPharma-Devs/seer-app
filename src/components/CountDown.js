import React from "react";
import Clock from "./Clock";

function CountDown() {
  let deadline = "February, 17, 2022 08:00:00";

  return (
    <>
      <Clock deadline={deadline} />
    </>
  );
}

export default CountDown;