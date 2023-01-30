import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var text = "piyush";

  var [userInput, setInput] = useState("");

  function inputHandler(event) {
    console.log(event.target.value);
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>
        welcome <span style={{ color: "blue" }}>{text}</span>
      </h1>
      <input onChange={inputHandler}></input>
      <div>Welcome {userInput}</div>
    </div>
  );
}

/**
 * things to notice
 * class-> className
 * style->taken as object
 *
 * VISER -- view -> event -> state -> render in event handler
 */
