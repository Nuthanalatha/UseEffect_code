import React, { useEffect, useState } from "react";

function RightWayUseEffect() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("use effect exicuted in mounting phase");

    return () => {
      console.log("component will unmount phase"); //having return statement inside a empty use effect
    };
  }, []); //mounting phase simmilar to component did mount //dependence array is empty then it is mounting phase ([])

  useEffect(() => {
    if (count !== 0) {
      console.log("use effect ComponentDidUpdate is exicuted");
    }
  }, [count]); //if you have dependence array in your useeffect it updating phase

  return (
    <div>
      <h1>count-{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default RightWayUseEffect;
