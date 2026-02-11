import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const getChatbotResponse = async (userMessage: string) => {
  if (!apiKey) {
    console.warn("Gemini API Key is missing.");
    return "I'm currently unable to connect to my brain. Please use the contact form!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: `You are an AI assistant for SamBookPro, a world-class book marketer with 10+ years of experience. 
        Your goal is to answer questions about book marketing services, SEO, PR, and social media campaigns for books. 
        Be professional, encouraging, and highly knowledgeable. If asked about pricing, suggest they 'Request a Proposal' via the contact form. 
        Keep responses concise and helpful. You represent 'SamBookPro'.`,
        temperature: 0.7,
      },
    });

    return response.text() || "I'm sorry, I'm having trouble connecting right now. Please try again or use the contact form!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently resting. Please use the contact form to reach out directly!";
  }
};
