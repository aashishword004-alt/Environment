import { GoogleGenAI } from "@google/genai";
import donenv from "dotenv";
donenv.config();

const ai = new  GoogleGenAI({
  apiKey : process.env.GEMINI_API_KEY
});

// console.log(process.env.GEMINI_API_KEY)

async function envment(question) {
   try{
     const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: question,

        config: {
            systemInstruction: `
                You are an Environment Expert AI Assistant.

                Your job is to answer questions ONLY related to:
                1. Environmental pollution
                2. Global warming
                3. Climate change
                4. Deforestation
                5. Biodiversity
                6. Water conservation
                7. Renewable energy
                8. Ecosystems
                9. Waste management
                10. Environmental protection

                Rules:
                - Answer environmental questions clearly and simply.
                - You can answer follow-up questions related to the
                  previous environmental discussion.
                - If a question is unrelated to the environment,
                  reply exactly:
                  "Sorry, I can only answer environment-related questions."
                - Do not answer unrelated questions.
            `
        }
    });
    return response.text;
   } 
   catch(e)
   {
    if(staus === 503)
    {
      throw e
    }

    throw e
   }
   
}

export default envment;
