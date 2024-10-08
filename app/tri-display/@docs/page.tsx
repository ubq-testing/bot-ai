"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const demoDoc = `
# Docs Page

[Google](www.google.com)

- list 1 
- list 2
- list 3

\`\` quote \`\` 

\`\`\`javascript
function example() {
  return 'Hello, Markdown!';
}
\`\`\`
`;

export default function DocsPage() {

  useEffect(() => {
    setMarkdown(demoDoc);
  }, []);

  return (
    <div>
      <h1>Docs Page</h1>
      <div className="markdown-content">
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  );
}
