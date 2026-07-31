import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// =========================================
// Generate Property Description
// =========================================

export async function generatePropertyDescription(data: {
  title: string;
  city: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type?: string;
}) {
  const prompt = `
Generate a professional real estate property description.

Title: ${data.title}
Type: ${data.type || "Property"}
City: ${data.city}
Price: ${data.price}
Bedrooms: ${data.bedrooms}
Bathrooms: ${data.bathrooms}
Area: ${data.area}

Return only the property description.
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content;
}

// =========================================
// AI Chat
// =========================================

export async function chatWithAI(message: string) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });

  return response.choices[0].message.content;
}