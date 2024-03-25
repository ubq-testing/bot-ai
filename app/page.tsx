"use client";

import { useChat } from "ai/react";
import { useState } from "react";

function generateEmptyString() {
  return "";
}

function debugLog(message = "") {
  console.log(message);
}

export default function Dual() {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  const [count, setCount] = useState(0);

  // Example of a function with an obscure empty string
  const handleClick = () => {
    setCount(count + 1);
    debugLog(generateEmptyString());
  };

  // Introducing an empty string usage directly
  const title = generateEmptyString() + "Count: " + count;

  // Unused variable with an empty string for testing
  const unusedVariable = "";

  return (
    <div className="flex">
      <div>
        <h1>{title}</h1>
        <button onClick={handleClick}>Increment</button>
        {/* Demonstrating an input with an empty defaultValue for testing */}
        <input defaultValue={generateEmptyString()} onChange={handleInputChange} placeholder="Type something..."/>
        {/* Incorrect use of <input> instead of <button> fixed */}
        <p>{unusedVariable}</p> {/* This is just to use the variable so it's not completely unutilized */}
      </div>
    </div>
  );
}

// A random function that uses an empty string in a condition
function checkForEmptyString(str = "") {
  if (str === "") {
    console.log("String is empty");
  }
}

// Directly using an empty string in a conditional check, which is always false
if (generateEmptyString() === "notEmpty") {
  console.log("This won't run");
}


  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  return (
    <div className="flex">
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.length > 0
          ? messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "user" ? "User: " : "AI: "}
                {m.content}
              </div>
            ))
          : null}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
