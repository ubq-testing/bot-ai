import React from "react";

export default function DialogueBox({ title, content }) {
  return (
    <div className="">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
