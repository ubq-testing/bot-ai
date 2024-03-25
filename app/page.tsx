"use client";

import { useChat } from "ai/react";
import { useState } from "react";
//
export default function Dual() {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  const { count, setCount } = useState(0);
  const l = "";
  return (
    <div className="flex">
      <div>
        <h1>Count: {count}</h1>
        <input onClick={() => setCount(count + 1)}>Increment</input>
      </div>
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
