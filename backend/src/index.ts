import { GoogleGenAI } from "@google/genai";
import express from "express";
import { basePrompt } from "./prompts/Baseprompt";
import { nextjsPrompt } from "./defaults/nextjs";
import { nodePrompt } from "./defaults/node";
import { Reactprompt } from "./defaults/react";
import { expressPrompt } from "./defaults/expressjs";
import dotenv, { config } from "dotenv";
dotenv.config();

const app = express();

type AllowedResponse = "React" | "express" | "nextjs" | "node";
const port = process.env.PORT || 4000;

app.use(express.json())

const token = process.env.GEMINI_API;
if (!token) {
  throw new Error("Api is not available");
}

const ai = new GoogleGenAI({ apiKey: token });

interface promptRequest {
  prompt: string,
}

app.post('/template', async (req, res) => {
  const body = req.body.prompt;
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{
        role: "user",
        parts: [{ text: body }]
      }],
      config: {
        temperature: 0.2,
        maxOutputTokens: 10,
        systemInstruction: "Response should be in only one word and your options are 'node', 'express', 'React', or 'nextjs'. Choose only one nothing extra."
      }
    });
    console.log(result.text);


    const responseText = result.text?.trim() as AllowedResponse
    if (responseText != "React" && responseText != "express" && responseText != "nextjs" && responseText != "node") {
      res.status(404).json({ Msg: "Incorrect response" })
    }
    if (responseText == "React") {
      res.json({
        prompt: [basePrompt, Reactprompt],
      })
      return;
    }

    if (responseText == "node") {
      res.json({
        prompt: [basePrompt, nodePrompt],
      })
      return;

    }

    if (responseText == "express") {
      res.json({
        prompt: [basePrompt, expressPrompt],
      })
      return;
    }

    if (responseText == "nextjs") {
      res.json({
        prompt: [basePrompt, nextjsPrompt]
      })
      return;
    }

  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : "unknown error" })
  }
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}/template`);
})  