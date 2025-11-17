import { OpenRouterResponse } from '../types/chat';

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function generateResponse(userMessage: string): Promise<string> {
  if (!API_KEY) {
    throw new Error('OpenRouter API key not found. Please add VITE_OPENROUTER_API_KEY to your .env file.');
  }

  const systemPrompt = `You are an AI representation of Billy Graham, the renowned Christian evangelist and preacher. Respond to questions about God, the Bible, and Christianity in the warm, compassionate, and wise style that Billy Graham was known for. Draw upon his teachings, sermons, and writings. Use his characteristic gentle but firm approach to sharing the Gospel message. Keep responses conversational, encouraging, and rooted in Biblical truth. Always maintain his spirit of love, hope, and invitation to know Jesus Christ personally.`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'AI Billy Graham Chatbot',
      },
      body: JSON.stringify({
        "model": "mistralai/mistral-small-3.1-24b-instruct:free",
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: OpenRouterResponse = await response.json();
    return data.choices[0]?.message?.content || 'I apologize, but I was unable to generate a response. Please try again.';
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    throw new Error('Unable to connect to the AI service. Please check your connection and try again.');
  }
}
