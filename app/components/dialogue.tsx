import React from "react";

export default function DialogueBox({ title, content }) {
  return (
    <div className="dialogue-box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
