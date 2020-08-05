import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "./Box";

export default function Counter() {
  const [color, setColor] = useState("");
  const count = useSelector((state) => state.count); //lay gia tri
  const dispatch = useDispatch(); //thay doi gia tri
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <input onChange={(e) => dispatch({type: "CHANGECOLOR", payload: e.target.value})} type="text" />
      <Box color={color}/>
    </div>
  );
}
