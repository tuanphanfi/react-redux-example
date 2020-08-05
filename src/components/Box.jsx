import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Box() {
  const color = useSelector((state) => state.color);
  const count = useSelector((state) => state.count);
  const textColor = useSelector((state) => state.textColor);
  const numbBox = useSelector((state) => state.numbBox);
  return (
    <>
      {Array(count).fill(
        <div style={{ backgroundColor: color , color: textColor}}>Color Box</div>
      )}
    </>
  );
}
