import "./styles.css";
import React, { useState } from "react";

const emojiDict = {
  "🐵": "Monkey Face",
  "🦍": "Gorilla",
  "🐩": "Poodle",
  "🐱": "Cat Face",
  "🐈": "Cat",
  "🐆": "Leopard",
  "🐎": "Horse",
  "🦌": "Deer",
  "🐂": "Ox",
  "🐏": "Ram",
  "🦙": "Llama",
  "🦛": "Hippopotamus",
  "🦇": "Bat",
  "🐨": "Koala",
  "🦨": "Skunk",
  "🦩": "Flamingo",
  "🐦": "Bird",
  "🐧": "Penguin",
  "🕊️": "Dove",
  "🦅": "Eagle",
  "🦜": "Parrot",
  "🐓": "Rooster",
  "🦃": "Turkey",
};

var emojiArr = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInput(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }

    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 id="heading" > Animal emoji interpreter </h1>
      <input onChange={emojiInput}></input>
      <h2 id="output-cont">{meaning}</h2>

      <h3 id="heading-three">Emojis we know</h3>
      {emojiArr.map((emojiitem) => {
        return (
          <span
            onClick={() => clickHandler(emojiitem)}
            style={{ fontSize: "2rem", padding: "0.8rem", cursor: "pointer" }}
            key={emojiitem}
          >
            {emojiitem}
          </span>
        );
      })}
    </div>
  );
}
