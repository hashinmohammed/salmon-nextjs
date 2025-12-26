// utils/openai.js
// Utility to call OpenAI ChatGPT API using fetch

export async function fetchChatGPT(messages) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages }),
  });
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || "API error");
  }
  const data = await response.json();
  return data.content || "No response from AI.";
}
