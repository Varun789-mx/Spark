import { CheckCircle, Clock, Circle } from "lucide-react";
import type { Step } from "./types"

interface SteplistProp {
    step: Step[];
    currentstep: number;
    onStepClick: (StepId: number) => void;
}
export function Steplist({ step, currentstep, onStepClick }: SteplistProp) {
    return (
        <div className="bg-black w-full h-full flex flex-col rounded-4xl p-2">
            <div className="bg-slate-950 pt-5 rounded-2xl">
                <h1 className="text-white text-center font-bold text-2xl">Steps in Process</h1>
                <div className="overflow-y-auto flex-1 p-2 max-h-95 scrollbar-hide">
                    {step.map((step) => (
                        <div
                            onClick={() => onStepClick(step.id)}
                            key={step.id}
                            className={`${currentstep === step.id
                                ? " rounded-2xl border-2 border-blue-700"
                                : "bg-slate-950"
                                }`}>
                            <div className="flex items-center p-4 gap-4 ">
                                {step.status === "Completed" ? (
                                    <CheckCircle className="text-yellow-500 bg-slate-950" />
                                ) : step.status === "In-progress" ? (
                                    <Clock className="text-white bg-slate-950" />
                                ) : (
                                    <Circle className="bg-slate-950 text-white" />
                                )}
                                <h3 className="text-white">{step.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}   
