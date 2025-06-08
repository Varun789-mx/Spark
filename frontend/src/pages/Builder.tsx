import { Navbar } from "../components/Navbar";
import { Chatbox } from "../components/Chatabox";
import { Background } from "../components/Background";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import type { Step } from "../components/types";
import { Parsexml } from "../Steps";

async function init() {
    try {
        const res = await axios.post(`${BACKEND_URL}/chat`, {
            prompt: prompt,
        });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

export async function Builder() {
    const location = useLocation();
    const [step, setSteps] = useState<Step[]>([]);

    const { prompt } = location.state as { prompt: string };

    try {
        const response = await axios.post(`${BACKEND_URL}/template`, {
            prompt: prompt.trim(),
        });

        const { prompts, uiprompt } = response.data;
        setSteps(Parsexml(uiprompt[0]));
    } catch (error) {
        console.log(error);
    }

    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 -z-10">
                <Background />
            </div>
            <div className="relative z-10">
                <Navbar />
            </div>
            <div className="flex w-full justify-items-center px-6 m-2">
                <div className="absolute w-1/3 top-3/4 flex-1 items-center p-2">
                    <Chatbox />
                </div>
                <div className="absolute top-16 right-0 w-3/5 p-2">
                    {step.map(res=><span key={res.id}>{res.description}</span>)};
                </div>
            </div>
        </div>
    );
}
