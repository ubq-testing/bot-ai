import DialogueBox from "@/app/components/dialogue";
import React from "react";

const content = `
This is just an example dialogue box that wil be used later.
`;

export default function DataPage() {
  return (
    <div>
      <h1>Data Page</h1>
      <p>This is the Data page content.</p>

      <DialogueBox title="Dialogue Box 1" content={content} />

      <DialogueBox title="Dialogue Box 2" content={content} />
    </div>
  );
}
