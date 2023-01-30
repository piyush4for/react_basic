import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var text = "piyush";
  var color = "blue";

  const [likeCounter, setCounterValue] = useState(0);

  function likeEvent() {
    setCounterValue(likeCounter + 1);
  }

  return (
    <div className="App">
      <h1>
        welcome <span style={{ color: color }}>{text}</span>
      </h1>
      <button onClick={likeEvent}>Like</button>
      {likeCounter}
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
