import React, { useState } from "react";
import "../css/State.css";

export default function State() {
  let [input, setInput] = useState("");
  let [text, setText] = useState("Hello World");
  let [size, setSize] = useState(16);

  const onClickSetText = () => {
    let t = prompt("Please Input Text");
    if (t) {
      setText(t);
    }
  };

  const onClickZoomIn = () => {
    let newSize = size + 2;
    setSize(newSize);
  };

  return (
    <div className="border border-danger container-sm text-center p-3">
      <h1>UseState</h1>
      <div className="d-flex justify-content-center">
        <div className="me-4 w-50">
          <h3>State</h3>
          <p>{input}</p>
          <textarea
            id="input"
            className="rounded-4 py-2 px-1 w-100"
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <div className="ps-4 w-50" style={{ borderLeft: "1px solid black" }}>
          <p style={{ fontSize: size }}>{text}</p>
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <button className="btn btn-success" onClick={onClickSetText}>
              text
            </button>
            <button className="btn btn-secondary m-2" onClick={onClickZoomIn}>
              increment
            </button>
            <button className="btn btn-info" onClick={() => setSize(size - 2)}>
              decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
