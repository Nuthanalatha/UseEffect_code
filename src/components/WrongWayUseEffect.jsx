import React, { useState } from "react";

function WrongWayUseEffect() {
  const [count, setCount] = useState(0);
  useState(() => {
    console.log("use effect exicuted");
  }); //this is wrong it will give use effect exicute before function

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>count={count}</p>
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default WrongWayUseEffect;
