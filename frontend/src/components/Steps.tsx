import { CheckCircle, Clock, Circle } from "lucide-react";
import type { Step } from "./types";

interface SteplistProp {
  step: Step[];
  currentstep: number;
  onStepClick: (StepId: number) => void;
}
export function Steplist({ step, currentstep, onStepClick }: SteplistProp) {
  return (
    <div className="bg-slate-950 w-full   h-[400px] items-center p-5 rounded-lg font-bold ">
      <div className="bg-gray-950 rounded-2xl">
        <h1 className="text-white mb-4 flex-shrink-0 ">Steps in Process</h1>
        <div className="bg-slate-950 rounded-2xl flex-1 overflow-hidden flex flex-col">
          <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-900">
            {step.map((step) => (
              <div
                onClick={() => onStepClick(step.id)}
                key={step.id}
                className={`${
                  currentstep === step.id
                    ? "bg-slate-900 rounded-2xl border-2 border-blue-700"
                    : "bg-slate-950"
                }`}
              >
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
    </div>
  );
}
