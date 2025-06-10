import { CheckCircle, Clock, Circle } from "lucide-react";
import type{ Step } from "./types"

interface SteplistProp {
    step: Step[];
    currentstep: number;
    onStepClick: (StepId: number) => void;
}
export function Steplist({ step, currentstep, onStepClick }: SteplistProp) {
    return (
        <div className="bg-black w-2/3 items-center p-4 rounded-lg">
            <div className="bg-gray-900">
                <h1 className="text-white">Steps in Process</h1>
                {step.map((step) => (
                    <div onClick={() => onStepClick(step.id)} key={step.id}
                        className={`${currentstep === step.id ? 'bg-gray-700' :
                            'bg-gray-800'}`} >
                        <div className="flex justify-items-center p-4 gap-4 ">
                            {step.status === 'Completed' ?
                                (<CheckCircle className="bg-yellow-200" />) :
                                step.status === 'In-progress' ?
                                    (<Clock className="bg-green-500" />) :
                                    (<Circle className="bg-gray-800" />)}
                            <h3 className="text-white">{step.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}   
