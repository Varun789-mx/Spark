import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { basePrompt } from "./prompts/Baseprompt";
dotenv.config;

const token = process.env.GEMINI_API;
if (!token) {
    throw new Error("Api token is not available");
}

const ai = new GoogleGenAI({ apiKey: token });

async function main() {
    const response = await ai.models.generateContentStream({
        model: "gemini-2.0-flash",
        contents: "test prompt",
        config: {
            systemInstruction: basePrompt,
        }
    });
    for await (const chunk of response) {
        console.log(chunk.text);
    }
}