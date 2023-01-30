import React, { useState } from "react";
import "./styles.css";

var text = "piyush";

var dictionary = {
  "❤": "heart",
  "😀": "smile",
  "😁": "cheese",
  "😂": "laugh"
};

export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = dictionary[userInput];

    if (meaning === undefined) {
      meaning = "we cant find in database";
    }
    setmeaning("Emoji: " + meaning);
  }

  return (
    <div className="App">
      <h1>
        welcome <span style={{ color: "blue" }}>{text}</span> to Emojipedia
      </h1>
      <input onChange={emojiInputHandler}></input>
      <div>{meaning}</div>
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
