import dotenv from "dotenv";
dotenv.config();
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { Key } from "readline";

// Retrieve the token from environment variables
const API = process.env.OPEN_AI_KEY
if (!API) {
    throw new Error("OPENAI KEY IS NOT SETUP.");
}

const token = API;

// Define the endpoint and model
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

export async function main(): Promise<void> {
    // Initialize the client
    const client = ModelClient(
        endpoint,
        new AzureKeyCredential(token)
    );

    // Prepare the request body
    const requestBody = {
        body: {
            messages: [
                { role: "system", content: "" },
                { role: "user", content: "What is the capital of France?" }
            ],
            temperature: 1,
            top_p: 1,
            model: model
        }
    };

    // Send the request
    const response = await client.path("/chat/completions").post(requestBody);

    // Handle unexpected responses
    if (isUnexpected(response)) {
        throw new Error(JSON.stringify(response.body.error));
    }

    // Output the response
    console.log(response.body.choices[0].message.content);
}

// Execute the main function and handle errors
main().catch((err: unknown) => {
    console.error("The sample encountered an error:", err);
});
