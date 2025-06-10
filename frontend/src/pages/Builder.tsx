import { Navbar } from "../components/Navbar";
import { Chatbox } from "../components/Chatabox";
import { Background } from "../components/Background";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Step } from "../components/types";
import { Parsexml } from "../Steps";
import { Steplist } from "../components/Steps";
import { Editor } from "../components/Editor";

export function Builder() {
    const location = useLocation();
    const Stateprompt = location.state?.prompt;
    const [steps, setSteps] = useState<Step[]>([]);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [prompts, setPrompts] = useState<string>("");

    const { prompt } = location.state as { prompt: string };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`${BACKEND_URL}/template`, {
                    prompt: Stateprompt.trim(),
                });

                const { promptsData, uiprompt } = response.data;
                setPrompts(promptsData);
                const parsedSteps = Parsexml(uiprompt);
                setSteps(parsedSteps);
                if (parsedSteps.length > 0) {
                    console.log(parsedSteps);
                    setCurrentStep(parsedSteps[0].id);
                    console.log(currentStep);
                    setSteps(parsedSteps);
                }
            } catch (error) {
                console.error("Error loading steps:", error);
            }
        };

        fetchData();
    }, [prompt]);

    return (
        <div className="relative min-h-screen">
            <span className="hidden">{prompts}</span>
            <div className="fixed inset-0 -z-10">
                <Background />
            </div>
            <div className="relative z-10">
                <Navbar />
            </div>
            <div className="flex w-full justify-items-center px-6 m-2">
                <div className="absolute w-1/3 mt-8 flex-1 flex-col items-center p-2 gap-4">
                    <Steplist
                        step={steps}
                        currentstep={currentStep}
                        onStepClick={setCurrentStep}
                    />
                    <Chatbox />
                </div>
                <div className="absolute top-16 right-0 w-3/5 p-2">
                    <Editor />
                </div>
            </div>
        </div>
    );
}