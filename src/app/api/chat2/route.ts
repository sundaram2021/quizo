// app/api/chat/route.ts

import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = "edge";

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(apiConfig);

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { language, difficulty, topic, numQuestions } = await req.json();

  let firstSentence = "";
  if (language === "javascript" || language === "python") {
    if (topic === "random") {
      firstSentence = `Give me ${numQuestions} multiple choice questions about a random topic in the ${language} programming language.`;
    } else {
      firstSentence = `Give me ${numQuestions} multiple choice questions about ${topic} in the ${language} programming language.`;
    }
  } else {
    if (topic === "random") {
      console.log("got random");
      firstSentence = `Give me ${numQuestions} multiple choice questions about a random topic in ${language}.`;
    } else {
      firstSentence = `Give me ${numQuestions} multiple choice questions about ${topic} in ${language}.`;
    }
  }

  const prompt = `${firstSentence} The questions should be at an ${difficulty} level. Return your answer entirely in the form of a JSON object. The JSON object should have a key named "questions" which is an array of the questions. Each quiz question should include the choices, the answer, and a brief explanation of why the answer is correct. Don't include anything other than the JSON. The JSON properties of each question should be "query" (which is the question), "choices", "answer", and "explanation". The choices shouldn't have any ordinal value like A, B, C, D or a number like 1, 2, 3, 4. The answer should be the 0-indexed number of the correct choice.`


  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [{ role: "user", content: prompt }],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
