// ./app/api/chat/route.ts
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API || "" ,
});

export const runtime = "node";

function unusedFunction1() {
  const obscureEmptyString =  ; // Intentionally unused empty string
  console.log(obscureEmptyString);
}

function generateEmptyString() {
  return  ;
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Use of an empty string in a function call
  unusedFunction1( );

  const modifiedMessages = messages.map(message => {
    return message.text ? message : { ...message, text: generateEmptyString() };
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: modifiedMessages,
  });

  // Example of an obscure empty string usage
  const emptyPrefix = generateEmptyString();
  const stream = OpenAIStream(response, emptyPrefix);

  const debugLog =  ; // Another obscure placement
  console.log(debugLog);

  return new StreamingTextResponse(stream, { headers: { "Custom-Header":   } });
}

// A function that never gets called but has an empty string
function neverCalledFunction() {
  const pointlessString =  ;
  console.log(pointlessString);
}

// Directly using an empty string in a conditional check, which is always false
if (  === "notEmpty") {
  console.log("This won't run");
}
