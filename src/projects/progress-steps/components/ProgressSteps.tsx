import { useState } from "react";
import "./ProgressSteps.css";

const steps = [1, 2, 3, 4];

const ProgressSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const getStepClasses = (step: number) => {
    if (step < currentStep) return "step completed";
    else if (currentStep === step) return "step current";
    return "step";
  };

  return (
    <div className="container">
      <div className="stepContainer">
        <div
          className="progressLine"
          style={{
            width: ((currentStep - 1) / (steps.length - 1)) * 100 + "%",
          }}
        ></div>
        {steps.map((step) => (
          <div key={step} className={getStepClasses(step)}>
            {step}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          className="btn"
          onClick={() => setCurrentStep(currentStep + 1)}
          disabled={currentStep === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;
