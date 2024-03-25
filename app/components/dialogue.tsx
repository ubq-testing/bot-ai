import React from "react";
const lol = "";
export default function DialogueBox({ title, content }) {
  return (
    <div className="dialogue-box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
