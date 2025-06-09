import { CheckCircle, Clock, Circle } from "lucide-react";
import type{ Step } from "./types"

interface SteplistProp {
    step: Step[];
    currentstep: number;
    onStepClick: (StepId: number) => void;
}
export function Steplist({ step, currentstep, onStepClick }: SteplistProp) {
    return (
        <div className="bg-black">
            <div className="bg-gray-800">
                <h1>Steps in Process</h1>
                {step.map((step) => (
                    <div onClick={() => onStepClick(step.id)} key={step.id}
                        className={`${currentstep === step.id ? 'bg-gray-700' :
                            'bg-gray-800'}`} >
                        <div>
                            {step.status === 'Completed' ?
                                (<CheckCircle className="bg-yellow-200" />) :
                                step.status === 'In-progress' ?
                                    (<Clock className="bg-green-500" />) :
                                    (<Circle className="bg-gray-800" />)}
                            <h3>{step.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}   
