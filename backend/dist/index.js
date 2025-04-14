"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ai_inference_1 = __importStar(require("@azure-rest/ai-inference"));
const core_auth_1 = require("@azure/core-auth");
// Retrieve the token from environment variables
const API = process.env.OPEN_AI_KEY;
if (!API) {
    throw new Error("OPENAI KEY IS NOT SETUP.");
}
const token = API;
// Define the endpoint and model
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Initialize the client
        const client = (0, ai_inference_1.default)(endpoint, new core_auth_1.AzureKeyCredential(token));
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
        const response = yield client.path("/chat/completions").post(requestBody);
        // Handle unexpected responses
        if ((0, ai_inference_1.isUnexpected)(response)) {
            throw new Error(JSON.stringify(response.body.error));
        }
        // Output the response
        console.log(response.body.choices[0].message.content);
    });
}
// Execute the main function and handle errors
main().catch((err) => {
    console.error("The sample encountered an error:", err);
});
